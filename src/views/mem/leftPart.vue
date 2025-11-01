<template>
  <div class="members-showcase">
    <!-- 成员网格 -->
    <div class="members-grid">
      <div 
        v-for="(member, index) in members" 
        :key="index"
        class="member-card-wrapper"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <MemberCard 
          :member="member"
          class="enhanced-member-card"
        />
      </div>
    </div>
    
    <!-- 加载状态 -->
    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>正在加载成员信息...</p>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: { 
    MemberCard: defineAsyncComponent(() => 
      import('../../components/MemberCard.vue')
    )
  },
  props: {
    title: {
      type: String,
      default: '团队成员'
    }
  },
  data() {
    return {
      members: [],
      loading: true
    };
  },
  async created() {
    try {
      this.loading = true;
      const response = await fetch('/members.json');
      if (response.ok) {
        this.members = await response.json();
      } else {
        // 使用简化的默认数据
        this.members = [];
      }
    } catch (error) {
      console.error('加载成员数据失败:', error);
      this.members = [];
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

.members-showcase {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 成员网格 */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 0;
  justify-items: center;
}

.member-card-wrapper {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.enhanced-member-card {
  transition: all 0.3s ease;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.enhanced-member-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
}



/* 加载状态 */
.loading-state {
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 255, 255, 0.7);
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(38, 238, 225, 0.3);
  border-top: 3px solid #26eee1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .members-showcase {
    padding: 20px 15px;
  }
  
  .controls-section {
    margin-bottom: 30px;
  }
  
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .filter-tabs {
    gap: 8px;
  }
  
  .filter-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .members-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .search-input {
    padding: 12px 40px 12px 15px;
    font-size: 14px;
  }
  
  .filter-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .filter-btn {
    min-width: 120px;
  }
}


</style>