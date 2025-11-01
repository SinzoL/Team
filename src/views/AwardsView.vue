<script setup>
import flingLine from '../components/flingLine.vue';
import MainVue from './awards/main.vue';
</script>

<template>
  
  <div class="container">
    <flingLine />
    <div class="content">
      <el-main>
        <MainVue class="body"></MainVue>
      </el-main>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  min-height: 100vh;
  /* 确保容器最小高度占满屏幕 */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* 内容样式 */



/* 主体部分自适应剩余高度 */
el-main {
  flex: 1;
  /* 主体部分占用剩余空间 */
  display: flex;
  /* 保证内容居中对齐时有效 */
}

.body {
  margin-top: 80px;
}

</style>