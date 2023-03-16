<template>
<div class="header shadow-md" >
    <logoIcon class="p-t-1 animate__animated animate__heartBeat"></logoIcon>
    <button @click="toggle">全屏</button> 
    <el-button>登录/注册</el-button>
</div>

</template>
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import 'animate.css'
import logoIcon from './logoIcon.vue';
import { useFullscreen } from '@vueuse/core'
const { toggle } = useFullscreen()


</script>
<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-button {
    color: #FF8C00;
}
</style>