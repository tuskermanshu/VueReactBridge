<script setup lang="ts">
import { DefineComponent, onMounted, onUnmounted, ref, useAttrs } from "vue";
import React from "react";
import { createRoot } from "react-dom/client";
import SuspenseWithError from "./suspenseWithError.vue";

const attrs = useAttrs(); // 获取传递给组件的属性

const reactRef = ref<any>(); // 用于存储 React 根实例
const reactComponent = ref<DefineComponent<{}, {}, any>>(); // 用于存储加载的 React 组件
const reactComponentRef = React.createRef(); // 用于存储 React 组件的引用

onMounted(() => {
  renderReactComponents(); // 在组件挂载时渲染 React 组件
});

onUnmounted(() => {
  if (reactRef.value) {
    reactRef.value.unmount(); // 在组件卸载时卸载 React 组件
  }
});

// 异步加载 React 组件
async function loadReactComponent() {
  try {
    // 使用 Module Federation 加载 React 组件
    const Component = (await import("remoteReactComponents/Button")).default;
    return Component;
  } catch (error) {
    console.error("Failed to load React component:", error);
    throw error;
  }
}

// 渲染 React 组件
async function renderReactComponents() {
  // 使用 createRoot API  创建 React 根实例
  reactRef.value = createRoot(reactComponent.value as any);

  // 加载 React 组件
  reactComponent.value = await loadReactComponent();
  // 渲染 React 组件到页面中并传递属性
  reactRef.value.render(
    React.createElement(reactComponent.value, {
        ...mappedProps(attrs),
        ref: reactComponentRef
    })
  );
}

// 映射属性函数
const mappedProps = <T extends Record<string, any>>(props: T): T => {
  return Object.keys(props).reduce((acc: T, key: string) => {
    return { ...acc, [key]: props[key] };
  }, {} as T);
};
defineExpose({ reactComponentRef });
</script>

<template>
  <div>
    <SuspenseWithError>
      <!-- 错误状态插槽 -->
      <template #error="props">
        <h1>{{ props.error }}</h1>
      </template>
      <!-- 默认插槽 -->
      <template #default>
        <div ref="reactComponent" />
      </template>
      <!-- 加载状态插槽 -->
      <template #fallback>
        <h1>Loading please wait...</h1>
      </template>
    </SuspenseWithError>
  </div>
</template>

<style scoped></style>