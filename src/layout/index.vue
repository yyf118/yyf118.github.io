<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <Content></Content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts' setup>
import Header from './header/index.vue';
import Content from './content/index.vue';
import Aside from './aside/index.vue';
import { ref, reactive } from 'vue'

</script>
<style scoped>

</style>