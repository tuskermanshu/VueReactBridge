<script setup lang="ts">
import { ref, onMounted,nextTick,watch } from 'vue';
import remoteReactBtn from "./components/reactComponents.vue";

const count = ref(20);
const reactRef = ref(null)

function handleHostVueClick(value:number) {
  console.log("value",value);
  count.value = value;
}

function handleHostReactClick(value:number) {
  console.log("value",value);
}

</script>

<template>
    <h1>Host Application</h1>
  <div class="container">
    <div>
      <h3>Remote Components in Vue</h3>
      <remote-vue-btn title="host-in-vue" :count="count" @handle-click="handleHostVueClick"/>
    </div>
    <div>
      <h3>Remote Components in React</h3>
      <remote-react-btn ref="reactRef" title="host-in-react" :count="10" :handleClick="handleHostReactClick"/>
    </div>
    <div>
      <h3>Using react internal methods</h3>
      <!-- 这种获取React组件内部方案很不优雅，但是能够实现 -->
      <button @click="reactRef.reactComponentRef.current.incrementCount()">increment</button>
    </div>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  width: 1000px;
  justify-content: space-around;
  align-items: center;
  
}
</style>
