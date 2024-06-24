<script setup lang='ts' >
import {  DefineComponent, onMounted, onUnmounted, ref, useAttrs } from "vue";
import React from 'react';
import {createRoot } from "react-dom/client"
import SuspenseWithError from "./suspenseWithError.vue";


const attrs = useAttrs()


const reactRef = ref()
const reactComponent = ref<DefineComponent<{}, {}, any>>()



onMounted(()=>{
    renderReactComponents();
})  

onUnmounted(()=>{
    reactRef.value.unmount();
})

async function loadReactComponent() {
    try {
    // 使用 Module Federation  加载React组件
    const Component = (await import("remoteReactComponents/Button")).default;
    return Component
    } catch (error) {
        console.error("Failed to load React component:", error);
        throw error; 
    }
}

async function renderReactComponents(){
     reactRef.value = createRoot(reactComponent.value as any)
    reactComponent.value = await loadReactComponent();
    reactRef.value.render(
        React.createElement(reactComponent.value,mappedProps(attrs)),
    );
}

const mappedProps = <T extends Record<string, any>>(props: T): T => {
    const mapObj = Object.keys(props).reduce((acc: T, key: string) => {
        // Create a new object that includes changes to preserve types
        return {...acc, [key]: props[key]};
    }, {} as T);
    return mapObj
};


</script>

<template>
    <div>
        <SuspenseWithError>
            <template #error="props">
                <h1>{{ props.error }}</h1>
            </template>
            <template #default>
                <div ref="reactComponent" />
            </template>
            <template #fallback>
                <h1>Loading please wait...</h1>
            </template>
        </SuspenseWithError>
    </div>
</template>

<style lang='scss' scoped>

</style>