<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- 版权信息 -->
      <div class="copyright">
        <p>&copy; {{ currentYear }} Del0n1x CTF Team. All rights reserved.</p>
      </div>

      <!-- 关注我们 -->
      <div class="social-section">
        <h4>关注我们</h4>
        <div class="social-links">
          <a href="https://space.bilibili.com/3546725136468673" target="_blank" class="social-link" title="Bilibili">
            <svg viewBox="0 0 24 24" class="social-icon">
              <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .356-.124.657-.373.906l-1.174 1.12zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.789 1.894v7.52c.02.765.283 1.395.789 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.128.789-1.893v-7.52c-.02-.765-.283-1.396-.789-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.249-.56.373-.933.373s-.684-.124-.933-.373c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.249-.56.373-.933.373s-.684-.124-.933-.373c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
            </svg>
          </a>
          <a href="https://ctftime.org/team/283146" target="_blank" class="social-link" title="CTFtime">
            <svg viewBox="0 0 24 24" class="social-icon">
              <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
            </svg>
          </a>
          <a href="https://www.yuque.com/keyboard-ovrmx/scxvuu" target="_blank" class="social-link" title="WriteUp">
            <svg viewBox="0 0 24 24" class="social-icon">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, 
    rgba(10, 10, 20, 0.95) 0%, 
    rgba(20, 20, 40, 0.95) 50%, 
    rgba(15, 15, 30, 0.95) 100%);
  border-top: 1px solid rgba(38, 238, 225, 0.2);
  color: white;
  padding: 25px 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* 关注我们区域 */
.social-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.social-section h4 {
  font-size: 16px;
  font-weight: 600;
  color: #26eee1;
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon {
  width: 20px;
  height: 20px;
  fill: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(38, 238, 225, 0.3);
  background: rgba(38, 238, 225, 0.2);
  border-color: #26eee1;
}

.social-link:hover .social-icon {
  fill: #26eee1;
  transform: scale(1.1);
}

/* 版权信息 */
.copyright p {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-family: 'JetBrains Mono', monospace;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .social-section {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 20px 15px;
  }
  
  .social-links {
    gap: 12px;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
  }
  
  .social-icon {
    width: 18px;
    height: 18px;
  }
  
  .social-section h4 {
    font-size: 14px;
  }
  
  .copyright p {
    font-size: 12px;
  }
}
</style>