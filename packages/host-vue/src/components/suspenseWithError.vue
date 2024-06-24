<script setup lang='ts'>
import { onErrorCaptured, ref } from "vue";

const error = ref<boolean | void>()

onErrorCaptured((err:boolean | void) => (error.value = err));

</script>

<template>
    <div>
    <slot name="error" :error="error" v-if="error" />
    <Suspense v-else>
      <template #default>
        <slot name="default" />
      </template>
      <template #fallback>
        <slot name="fallback" />
      </template>
    </Suspense>
    </div>
</template>

<style lang='scss' scoped>

</style>