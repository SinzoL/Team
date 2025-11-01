<template>
  <div class="background-container">
    <el-main class="main-container">
      <div class="content">
        <span class="static-text">A CTF Team From HITsz</span>
        <!-- 使用 v-html 渲染带有 HTML 的字符串 -->
        <vuetyped :strings="typedStrings" :showCursor="false" :typeSpeed="40" :backSpeed="40" :backDelay="1500" :loop="true">
          <span class="typing" v-html="currentTypedText"></span>
        </vuetyped>
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const typedStrings = ['Crazy for <span style="color: rgb(7, 235, 109);">Security</span>', 'CTF for <span style="color: rgb(7, 235, 109);">Fun</span>'];
const currentTypedText = ref('');

// 监听 typedStrings 的变化，更新 currentTypedText
watch(typedStrings, (newValue) => {
  currentTypedText.value = newValue.join(''); // 将数组合并为单个 HTML 字符串
}, { immediate: true });
</script>

<style scoped>
/* 主体内容样式 */
.content {
  z-index: 2;
  color: white;
  text-align: center;
  font-size: 5rem;
  padding: 20px;
}

/* 修改 "A CTF Team From Hitsz" 的字体 */
.static-text {
  font-family: 'Departure', sans-serif;
}

/* 打印的文本居中，并且加粗 */
.typing {
  font-family: "Fira";
  font-weight: bold;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-top: 70px;
  
}
/* 移动端适配 */
@media (max-width: 1024px) {
  .content {
    font-size: 4rem;
    padding: 15px;
  }
  
  .typing {
    margin-top: 50px;
  }
}

@media (max-width: 768px) {
  .content {
    font-size: 2.5rem;
    padding: 10px;
  }
  
  .typing {
    margin-top: 30px;
  }
}

@media (max-width: 480px) {
  .content {
    font-size: 1.8rem;
    padding: 10px 5px;
  }
  
  .static-text {
    line-height: 1.2;
  }
  
  .typing {
    margin-top: 20px;
    font-size: 1.6rem;
  }
}

@media (max-width: 320px) {
  .content {
    font-size: 1.4rem;
  }
  
  .typing {
    font-size: 1.2rem;
  }
}
</style>