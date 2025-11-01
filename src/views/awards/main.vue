<template>
    <div class="awards-container">
        <!-- 页面标题 -->
        <div class="page-header">
            <h1 class="page-title">🏆 获奖荣誉</h1>
            <p class="page-subtitle">Del0n1x CTF Team 的辉煌战绩</p>
            <div class="stats-overview">
                <div class="stat-item">
                    <span class="stat-number">{{ totalCompetitions }}</span>
                    <span class="stat-label">参赛次数</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ totalAwards }}</span>
                    <span class="stat-label">获奖次数</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ topRankings }}</span>
                    <span class="stat-label">前十名次</span>
                </div>
            </div>
        </div>

        <!-- 按年份分组的获奖列表 -->
        <div class="awards-content">
            <!-- 加载状态 -->
            <div v-if="loading" class="loading-container">
                <div class="loading-spinner"></div>
                <p>正在加载比赛数据...</p>
            </div>
            
            <!-- 错误状态 -->
            <div v-else-if="error" class="error-container">
                <div class="error-icon">⚠️</div>
                <p>{{ error }}</p>
                <button @click="loadCompetitionsData" class="retry-btn">重新加载</button>
            </div>
            
            <!-- 数据展示 -->
            <div 
                v-else
                v-for="yearData in sortedCompetitionsArray" 
                :key="yearData.year" 
                class="year-section"
            >
                <div class="year-header">
                    <h2 class="year-title">{{ yearData.year }} 年</h2>
                    <div class="year-stats">{{ yearData.competitions.length }} 项比赛</div>
                </div>
                
                <div class="competitions-list">
                    <div 
                        class="award-card" 
                        v-for="(competition, index) in yearData.competitions" 
                        :key="index"
                    >
                        <div class="award-icon">
                            🚩
                        </div>
                        <div class="award-content">
                            <h3 class="award-name">{{ competition.name }}</h3>
                            <div class="award-rank">{{ competition.rank }}</div>
                        </div>
                        <div class="award-badge more-btn" @click="showMoreDetails(competition)">
                            more
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 响应式数据
const competitionsData = ref({})
const loading = ref(true)
const error = ref(null)

// 从外部文件加载比赛数据
const loadCompetitionsData = async () => {
    try {
        loading.value = true
        const response = await fetch('/data/competitions.json')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        competitionsData.value = data
    } catch (err) {
        console.error('加载比赛数据失败:', err)
        error.value = '加载数据失败，请稍后重试'
        // 提供备用数据
        competitionsData.value = {
            "2025": [
                { name: "数据加载中...", rank: "请稍候" }
            ]
        }
    } finally {
        loading.value = false
    }
}

// 组件挂载时加载数据
onMounted(() => {
    loadCompetitionsData()
})

// 计算总统计信息
const totalCompetitions = computed(() => {
    if (!competitionsData.value || Object.keys(competitionsData.value).length === 0) return 0
    return Object.values(competitionsData.value).flat().length
})

const totalAwards = computed(() => {
    if (!competitionsData.value || Object.keys(competitionsData.value).length === 0) return 0
    return Object.values(competitionsData.value).flat().filter(comp => 
        comp.rank.includes('奖') || 
        comp.rank.includes('优胜') || 
        comp.rank.includes('优秀') ||
        comp.rank.match(/rank:\s*[1-9](?![0-9])/i)
    ).length
})

const topRankings = computed(() => {
    if (!competitionsData.value || Object.keys(competitionsData.value).length === 0) return 0
    return Object.values(competitionsData.value).flat().filter(comp => 
        comp.rank.match(/rank:\s*[1-9](?![0-9])/i) ||
        comp.rank.includes('一等奖')
    ).length
})

// 按年份倒序排列的比赛数据
const sortedCompetitionsArray = computed(() => {
    if (!competitionsData.value || Object.keys(competitionsData.value).length === 0) {
        return []
    }
    
    const entries = Object.entries(competitionsData.value)
    const sortedEntries = entries.sort((a, b) => {
        return parseInt(b[0]) - parseInt(a[0]) // 年份倒序：2025 → 2024 → 2023
    })
    
    return sortedEntries.map(([year, competitions]) => ({
        year,
        competitions
    }))
})

// 显示更多详情
const showMoreDetails = (competition) => {
    // TODO: 后续实现跳转到详情页面
    console.log('查看更多详情:', competition)
    // 这里可以添加路由跳转逻辑
    // router.push(`/competition-details/${competition.id}`)
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

.awards-container {
    width: 100%;
    background: transparent;
    color: white;
    font-family: 'Poppins', sans-serif;
    padding-bottom: 100px;
}

/* 页面标题区域 */
.page-header {
    text-align: center;
    padding: 60px 20px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.page-title {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
}

.page-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
    font-weight: 300;
}

/* 统计概览 */
.stats-overview {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #26eee1;
    margin-bottom: 5px;
}

.stat-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* 获奖内容区域 */
.awards-content {
    padding: 40px 20px 80px;
    max-width: 1200px;
    margin: 0 auto;
}

/* 年份分组 */
.year-section {
    margin-bottom: 50px;
}

.year-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(38, 238, 225, 0.3);
}

.year-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #26eee1;
    margin: 0;
}

.year-stats {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(38, 238, 225, 0.1);
    padding: 8px 16px;
    border-radius: 20px;
    border: 1px solid rgba(38, 238, 225, 0.3);
}

/* 比赛列表 */
.competitions-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* 奖项卡片 */
.award-card {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 15px;
    padding: 20px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
}

.award-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-color: rgba(38, 238, 225, 0.4);
}

/* 奖项图标 */
.award-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
    width: 60px;
    text-align: center;
}

/* 奖项内容 */
.award-content {
    flex: 1;
    text-align: left;
}

.award-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #26eee1;
    margin-bottom: 8px;
    line-height: 1.4;
}

.award-rank {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
}

/* 奖项徽章 */
.award-badge {
    background: linear-gradient(45deg, #26eee1, #6187da);
    color: white;
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
}

/* More按钮样式 */
.more-btn {
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.more-btn:hover {
    background: linear-gradient(45deg, #ff6b6b, #ffa726);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.more-btn:active {
    transform: translateY(0);
}

.more-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.more-btn:hover::before {
    left: 100%;
}

/* 加载和错误状态 */
.loading-container, .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(38, 238, 225, 0.3);
    border-top: 3px solid #26eee1;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-container p, .error-container p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin: 0;
}

.error-icon {
    font-size: 3rem;
    margin-bottom: 15px;
}

.retry-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background: linear-gradient(45deg, #26eee1, #6187da);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.retry-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(38, 238, 225, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }
    
    .stats-overview {
        gap: 20px;
    }
    
    .stat-item {
        padding: 15px;
    }
    
    .stat-number {
        font-size: 2rem;
    }
    
    .year-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .year-title {
        font-size: 1.8rem;
    }
    
    .award-card {
        padding: 15px;
        gap: 15px;
    }
    
    .award-icon {
        font-size: 2rem;
        width: 50px;
    }
    
    .award-name {
        font-size: 1rem;
    }
    
    .award-rank {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .page-header {
        padding: 40px 15px 30px;
    }
    
    .page-title {
        font-size: 2rem;
    }
    
    .awards-content {
        padding: 30px 15px;
    }
    
    .award-card {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .award-content {
        text-align: center;
    }
    
    .award-icon {
        width: auto;
    }
}
</style>