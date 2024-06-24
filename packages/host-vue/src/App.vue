<script setup lang="ts">
import { ref } from "vue";
import remoteReactBtn from "./components/reactComponents.vue";

const count = ref(20);

function handleHostVueClick(value:number) {
  console.log("count",value);
  count.value = value;
}

function handleHostReactClick(value:number) {
  console.log("value",value);
}
</script>

<template>
  <div>
    <h1>Host Project in Vue</h1>
    <h3>Remote Components in Vue</h3>
    <remote-vue-btn title="host-in-vue" :count="count" @handle-click="handleHostVueClick"/>
    <h3>Remote Components in React</h3>
    <remote-react-btn title="host-in-react" :count="10" :handleClick="handleHostReactClick"/>
  </div>
</template>

<style scoped>

</style>
