<template>
    <div class="team-intro-banner">
        <div class="intro-content">
            <div class="intro-icon">
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- 主盾牌渐变 -->
                        <linearGradient id="mainShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#00f5ff;stop-opacity:1" />
                            <stop offset="30%" style="stop-color:#26eee1;stop-opacity:1" />
                            <stop offset="70%" style="stop-color:#1e90ff;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#0066cc;stop-opacity:1" />
                        </linearGradient>
                        
                        <!-- 内层盾牌渐变 -->
                        <linearGradient id="innerShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#f7931e;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#ffcc02;stop-opacity:1" />
                        </linearGradient>
                        
                        <!-- 核心渐变 -->
                        <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
                            <stop offset="30%" style="stop-color:#26eee1;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#0066cc;stop-opacity:0.8" />
                        </radialGradient>
                        
                        <!-- 强化发光效果 -->
                        <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        
                        <!-- 外发光效果 -->
                        <filter id="outerGlow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                            <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    <!-- 外层光环 -->
                    <circle cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="#26eee1" 
                            stroke-width="1" 
                            opacity="0.3"
                            filter="url(#outerGlow)">
                        <animate attributeName="r" 
                                 values="45;50;45" 
                                 dur="4s" 
                                 repeatCount="indefinite"/>
                        <animate attributeName="opacity" 
                                 values="0.3;0.6;0.3" 
                                 dur="4s" 
                                 repeatCount="indefinite"/>
                    </circle>
                    
                    <!-- 主盾牌外轮廓 -->
                    <path d="M60 15 L25 30 L25 65 Q25 90 60 100 Q95 90 95 65 L95 30 Z" 
                          fill="url(#mainShieldGradient)" 
                          stroke="#00f5ff" 
                          stroke-width="3"
                          filter="url(#strongGlow)">
                        <animate attributeName="stroke-width" 
                                 values="3;5;3" 
                                 dur="2s" 
                                 repeatCount="indefinite"/>
                    </path>
                    
                    <!-- 内层盾牌 -->
                    <path d="M60 25 L35 35 L35 60 Q35 80 60 88 Q85 80 85 60 L85 35 Z" 
                          fill="url(#innerShieldGradient)" 
                          stroke="#ffcc02" 
                          stroke-width="2"
                          opacity="0.9">
                        <animate attributeName="opacity" 
                                 values="0.9;1;0.9" 
                                 dur="3s" 
                                 repeatCount="indefinite"/>
                    </path>
                    
                    <!-- 中央核心 -->
                    <circle cx="60" cy="55" r="15" 
                            fill="url(#coreGradient)" 
                            stroke="#ffffff" 
                            stroke-width="2"
                            filter="url(#strongGlow)">
                        <animate attributeName="r" 
                                 values="15;18;15" 
                                 dur="2.5s" 
                                 repeatCount="indefinite"/>
                    </circle>
                    
                    <!-- CTF标识 -->
                    <text x="60" y="58" 
                          font-family="monospace" 
                          font-size="8" 
                          font-weight="bold" 
                          text-anchor="middle" 
                          fill="#000033">CTF</text>
                    
                    <!-- 能量波纹 -->
                    <g stroke="#26eee1" stroke-width="2" fill="none" opacity="0.7">
                        <path d="M40 45 Q50 40 60 45 Q70 50 80 45">
                            <animate attributeName="opacity" 
                                     values="0.3;1;0.3" 
                                     dur="1.8s" 
                                     repeatCount="indefinite"/>
                        </path>
                        <path d="M40 55 Q50 50 60 55 Q70 60 80 55">
                            <animate attributeName="opacity" 
                                     values="1;0.3;1" 
                                     dur="1.8s" 
                                     repeatCount="indefinite"/>
                        </path>
                        <path d="M40 65 Q50 60 60 65 Q70 70 80 65">
                            <animate attributeName="opacity" 
                                     values="0.5;1;0.5" 
                                     dur="1.8s" 
                                     repeatCount="indefinite"/>
                        </path>
                    </g>
                    
                    <!-- 角落装饰元素 -->
                    <g fill="#00f5ff" opacity="0.8">
                        <!-- 左上角 -->
                        <polygon points="30,35 35,30 35,40 30,40">
                            <animateTransform attributeName="transform" 
                                              type="rotate" 
                                              values="0 32.5 35;360 32.5 35" 
                                              dur="6s" 
                                              repeatCount="indefinite"/>
                        </polygon>
                        <!-- 右上角 -->
                        <polygon points="85,30 90,35 85,40 85,30">
                            <animateTransform attributeName="transform" 
                                              type="rotate" 
                                              values="0 87.5 35;-360 87.5 35" 
                                              dur="6s" 
                                              repeatCount="indefinite"/>
                        </polygon>
                        <!-- 左下角 -->
                        <polygon points="30,75 35,70 40,75 35,80">
                            <animateTransform attributeName="transform" 
                                              type="rotate" 
                                              values="0 35 75;360 35 75" 
                                              dur="8s" 
                                              repeatCount="indefinite"/>
                        </polygon>
                        <!-- 右下角 -->
                        <polygon points="80,75 85,70 90,75 85,80">
                            <animateTransform attributeName="transform" 
                                              type="rotate" 
                                              values="0 85 75;-360 85 75" 
                                              dur="8s" 
                                              repeatCount="indefinite"/>
                        </polygon>
                    </g>
                    
                    <!-- 扫描线效果 -->
                    <line x1="25" y1="0" x2="95" y2="0" 
                          stroke="#00f5ff" 
                          stroke-width="2" 
                          opacity="0.8">
                        <animateTransform attributeName="transform" 
                                          type="translate" 
                                          values="0,30; 0,80; 0,30" 
                                          dur="3s" 
                                          repeatCount="indefinite"/>
                        <animate attributeName="opacity" 
                                 values="0;1;0" 
                                 dur="3s" 
                                 repeatCount="indefinite"/>
                    </line>
                </svg>
            </div>
            <h2 class="intro-title">Del0n1x CTF Team</h2>
            <p class="intro-text">
                在CTF的世界里，我们不仅是技术的追逐者，更是智慧的探险家。
                每一道题目，都是一片未知的领域，等待我们去探索、去征服。
                我们以代码为剑，以逻辑为盾，在虚拟的战场上披荆斩棘。
            </p>
        </div>
    </div>
</template>

<script setup>
// 团队介绍横幅组件
</script>

<style scoped>
.team-intro-banner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.intro-content {
    text-align: center;
    padding: 40px 30px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    border: 1px solid rgba(38, 238, 225, 0.2);
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.intro-icon {
    width: 80px;
    height: 80px;
    display: inline-block;
    animation: float 3s ease-in-out infinite;
}

.intro-icon svg {
    width: 100%;
    height: 100%;
    display: block;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.intro-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #26eee1;
    font-family: 'JetBrains Mono', monospace;
    text-shadow: 0 0 20px rgba(38, 238, 225, 0.3);
    letter-spacing: 2px;
}

.intro-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
    max-width: 800px;
    margin: 0 auto;
    font-weight: 400;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .team-intro-banner {
        padding: 0 15px;
    }
    
    .intro-content {
        padding: 30px 20px;
    }
    
    .intro-icon {
        font-size: 2.5rem;
    }
    
    .intro-title {
        font-size: 2rem;
        letter-spacing: 1px;
    }
    
    .intro-text {
        font-size: 1rem;
        line-height: 1.6;
    }
}

@media (max-width: 480px) {
    .intro-content {
        padding: 25px 15px;
    }
    
    .intro-icon {
        font-size: 2rem;
    }
    
    .intro-title {
        font-size: 1.5rem;
    }
    
    .intro-text {
        font-size: 0.9rem;
    }
}
</style>