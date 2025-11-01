<script setup>
import flingLine from '../components/flingLine.vue';
import LeftPart from './mem/leftPart.vue';
import RightPart from './mem/rightPart.vue';
</script>

<template>
  <div class="members-page">
    <flingLine />
    
    <!-- 页面标题区域 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">团队成员</h1>
        <div class="title-decoration"></div>
      </div>
    </div>
    
    <!-- 团队介绍区域 -->
    <div class="team-intro-section">
      <RightPart />
    </div>
    
    <!-- 成员展示区域 -->
    <div class="members-section">
      <LeftPart />
    </div>
  </div>
</template>

<style scoped>
.members-page {
  min-height: 100vh;
  background: transparent;
  position: relative;
}

.page-header {
  padding: 120px 0 60px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #26eee1;
  margin-bottom: 15px;
  font-family: 'JetBrains Mono', monospace;
  text-shadow: 0 0 20px rgba(38, 238, 225, 0.3);
}

.page-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
  font-style: italic;
}

.title-decoration {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #26eee1, transparent);
  margin: 0 auto;
  border-radius: 2px;
}

/* 团队介绍区域 */
.team-intro-section {
  position: relative;
  z-index: 2;
  padding: 0 20px 40px;
  display: flex;
  justify-content: center;
}

/* 成员展示区域 */
.members-section {
  position: relative;
  z-index: 2;
  padding: 0 20px 60px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    padding: 100px 0 40px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .team-intro-section,
  .members-section {
    padding: 0 15px 30px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
}
</style>