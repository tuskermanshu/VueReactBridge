

<script setup lang="ts">
import { ref } from 'vue';


const props = withDefaults(defineProps<{
    title: string;
    count:number,
}>(), {
    title: '默认数据',
    count: 0
});

const emits = defineEmits<{
    handleClick:[count:number]
}>()

const count = ref(props.count)


function remoteClick (){
    console.log("remote click in Vue")
    count.value++
    emits('handleClick',count.value)
}

</script>

<template>
    <div>
        <div>
            <h3>common element</h3>
            <button  @click="remoteClick">{{ props.title }} - {{ count }}</button>
        </div>
        <div>
            <h3>Element-plus element</h3>
            <el-button type="primary"  @click="remoteClick">{{ props.title }} - {{ count }}</el-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>