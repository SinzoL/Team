import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetyped from 'vue3typed'

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import './assets/font/font.css'
import './assets/css/style.css'

const app = createApp(App)

// 全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err, info)
  // 在生产环境中可以发送错误到监控服务
  if (import.meta.env.PROD) {
    // 发送错误报告到监控服务
    console.log('Error would be sent to monitoring service in production')
  }
}

// 全局警告处理
app.config.warnHandler = (msg, vm, trace) => {
  if (import.meta.env.DEV) {
    console.warn('Vue warning:', msg, trace)
  }
}

app.use(router)
app.use(vuetyped)
app.use(Particles, {
    init: async engine => {
        await loadSlim(engine); // 使用轻量版本提升性能
    },
});

app.mount('#app')
