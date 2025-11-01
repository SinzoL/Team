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
            <div 
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
import { computed } from 'vue'

const competitionsData = {
    "2025": [
        { name: "数字中国创新大赛 数字安全赛道 华南赛区初赛", rank: "Rank: 1" },
        { name: "CISCN x CCB 华南分区决赛", rank: "Rank: 10" },
        { name: "CISCN x CCB 初赛", rank: "Rank: 127" }
    ],
    "2024": [
        { name: "niteCTF", rank: "Rank: 23/1174" },
        { name: "鹏城杯", rank: "初赛排名 60 | 决赛——攻击排名：32/60 | 决赛——防御排名：8/60" },
        { name: "长城杯", rank: "Rank: 38 (获得决赛资格)" },
        { name: "BaseCTF", rank: "Rank: 10/2037" },
        { name: "羊城杯决赛", rank: "Rank: 12/18 (优胜奖)" },
        { name: "羊城杯初赛", rank: "Rank: 18/500" },
        { name: "中国工业互联网安全大赛智能家居赛道线下决赛", rank: "Rank: 13/30 (优秀奖)" },
        { name: "TFCCTF", rank: "Rank: 50/1452" },
        { name: "UIUCTF", rank: "Rank: 129/959" },
        { name: "CISCN 华南分区决赛", rank: "Rank: 19/50 (二等奖)" },
        { name: "广东省赛决赛", rank: "Rank: 14/30 (二等奖)" },
        { name: "中国海洋大学信息安全竞赛", rank: "Rank: 1 (一等奖)" },
        { name: "polarCTF 夏季挑战赛", rank: "Rank: 4/118 (二等奖)" },
        { name: "Dragon Knight CTF", rank: "Rank: 6 (三等奖)" },
        { name: "CISCN 初赛", rank: "Rank: 296/2000" },
        { name: "XYCTF", rank: "Rank: 12 (三等奖)" },
        { name: "复兴杯 决赛", rank: "三等奖" }
    ],
    "2023": [
        { name: "CISCN 华南分区赛", rank: "三等奖" }
    ]
}

// 计算总统计信息
const totalCompetitions = computed(() => {
    return Object.values(competitionsData).flat().length
})

const totalAwards = computed(() => {
    return Object.values(competitionsData).flat().filter(comp => 
        comp.rank.includes('奖') || 
        comp.rank.includes('优胜') || 
        comp.rank.includes('优秀') ||
        comp.rank.match(/rank:\s*[1-9](?![0-9])/i)
    ).length
})

const topRankings = computed(() => {
    return Object.values(competitionsData).flat().filter(comp => 
        comp.rank.match(/rank:\s*[1-9](?![0-9])/i) ||
        comp.rank.includes('一等奖')
    ).length
})

// 按年份倒序排列的比赛数据
const sortedCompetitionsArray = computed(() => {
    const entries = Object.entries(competitionsData)
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