<template>
    <div class="modern-member-card">
        <!-- 背景装饰 -->
        <div class="card-bg"></div>
        
        <!-- 头像区域 -->
        <div class="avatar-section">
            <div class="avatar-wrapper">
                <img :src="avatarSrc" :alt="member.nickname" class="avatar-img" />
                <div class="avatar-border"></div>
                <div class="status-indicator online"></div>
            </div>
        </div>
        
        <!-- 信息区域 -->
        <div class="info-section">
            <h3 class="member-name">{{ member.nickname || 'CTF选手' }}</h3>
            <div class="skills-tags">
                <span class="skill-tag primary">{{ member.major || 'CTF' }}</span>
                <span class="skill-tag secondary" v-if="member.level">{{ member.level }}</span>
            </div>
            <p class="member-description">{{ truncatedParagraph }}</p>
            
            <!-- 联系方式 - 修复显示问题 -->
            <div class="contact-section">
                <div class="contact-links">
                    <a 
                        v-if="member.blogUrl && member.blogType === 'github'" 
                        :href="member.blogUrl" 
                        target="_blank" 
                        class="contact-link github-link"
                        @click.stop
                        title="GitHub"
                    >
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a 
                        v-if="member.blogUrl2 && member.blogType2 === 'github'" 
                        :href="member.blogUrl2" 
                        target="_blank" 
                        class="contact-link github-link"
                        @click.stop
                        title="GitHub"
                    >
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a 
                        v-if="member.email" 
                        :href="`mailto:${member.email}`" 
                        class="contact-link email-link"
                        @click.stop
                        title="邮箱"
                    >
                        <i class="fas fa-envelope"></i>
                        <span>邮箱</span>
                    </a>
                    <a 
                        v-if="member.blogUrl && member.blogType === 'blog'" 
                        :href="member.blogUrl" 
                        target="_blank" 
                        class="contact-link blog-link"
                        @click.stop
                        title="博客"
                    >
                        <i class="fas fa-blog"></i>
                        <span>博客</span>
                    </a>
                    <a 
                        v-if="member.blogUrl2 && member.blogType2 === 'blog'" 
                        :href="member.blogUrl2" 
                        target="_blank" 
                        class="contact-link blog-link"
                        @click.stop
                        title="博客"
                    >
                        <i class="fas fa-blog"></i>
                        <span>博客</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MemberCard',
    props: {
        member: {
            type: Object,
            default: () => ({
                avatarUrl: '',
                nickname: 'CTF选手',
                major: 'CTF',
                paragraph: '优秀的团队成员，专注于网络安全技术研究。',
                blogUrl: '',
                blogType: 'blog',
                blogUrl2: '',
                blogType2: '',
                email: ''
            })
        }
    },
    computed: {
        avatarSrc() {
            return this.member.avatarUrl || '/img/default-avatar.jpg';
        },
        truncatedParagraph() {
            const text = this.member.paragraph || '优秀的团队成员，专注于网络安全技术研究。';
            return text.length > 60 ? text.substring(0, 60) + '...' : text;
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");

.modern-member-card {
    position: relative;
    width: 320px;
    height: 420px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 25px;
    margin: 15px;
    overflow: hidden;
    cursor: default;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.modern-member-card:hover {
    transform: translateY(-12px) scale(1.02);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border-color: rgba(38, 238, 225, 0.4);
}

/* 背景装饰 */
.card-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        rgba(38, 238, 225, 0.1) 0%, 
        rgba(97, 135, 218, 0.1) 50%, 
        rgba(255, 255, 255, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modern-member-card:hover .card-bg {
    opacity: 1;
}

/* 头像区域 */
.avatar-section {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-shrink: 0;
}

.avatar-wrapper {
    position: relative;
    width: 90px;
    height: 90px;
}

.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(38, 238, 225, 0.3);
    transition: all 0.3s ease;
}

.modern-member-card:hover .avatar-img {
    border-color: #26eee1;
    transform: scale(1.1);
}

.avatar-border {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: linear-gradient(45deg, #26eee1, #6187da);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.modern-member-card:hover .avatar-border {
    opacity: 0.7;
    animation: rotate 3s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.status-indicator {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.9);
}

.status-indicator.online {
    background: #4CAF50;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

/* 信息区域 */
.info-section {
    text-align: center;
    color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.member-name {
    font-size: 1.4rem;
    font-weight: 700;
    color: #26eee1;
    margin-bottom: 8px;
    font-family: 'JetBrains Mono', monospace;
}

.member-specialty {
    font-size: 1rem;
    color: #6187da;
    font-weight: 600;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.member-description {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
    margin-bottom: 15px;
    height: 54px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 技能标签 */
.skills-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.skill-tag {
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.skill-tag.primary {
    background: rgba(38, 238, 225, 0.2);
    color: #26eee1;
    border: 1px solid rgba(38, 238, 225, 0.3);
}

.skill-tag.secondary {
    background: rgba(97, 135, 218, 0.2);
    color: #6187da;
    border: 1px solid rgba(97, 135, 218, 0.3);
}

/* 联系方式区域 */
.contact-section {
    position: relative;
    z-index: 5;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s ease;
    min-width: 80px;
    justify-content: center;
    position: relative;
    z-index: 10;
    cursor: pointer;
}

.contact-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.github-link:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #333;
}

.email-link:hover {
    background: rgba(38, 238, 225, 0.3);
    border-color: #26eee1;
    color: #26eee1;
}

.blog-link:hover {
    background: rgba(97, 135, 218, 0.3);
    border-color: #6187da;
    color: #6187da;
}

.contact-link i {
    font-size: 1rem;
}

.contact-link span {
    font-size: 0.8rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .modern-member-card {
        width: 300px;
        height: 400px;
        margin: 10px;
        padding: 20px;
    }
    
    .avatar-wrapper {
        width: 80px;
        height: 80px;
    }
    
    .member-name {
        font-size: 1.2rem;
    }
    
    .member-specialty {
        font-size: 0.9rem;
    }
    
    .member-description {
        font-size: 0.85rem;
        height: 48px;
    }
    
    .contact-link {
        padding: 6px 10px;
        font-size: 0.8rem;
        min-width: 70px;
    }
}

@media (max-width: 480px) {
    .modern-member-card {
        width: 280px;
        height: 380px;
        margin: 8px;
        padding: 18px;
    }
    
    .avatar-wrapper {
        width: 70px;
        height: 70px;
    }
    
    .member-name {
        font-size: 1.1rem;
    }
    
    .contact-link {
        padding: 5px 8px;
        font-size: 0.75rem;
        min-width: 60px;
        gap: 4px;
    }
    
    .contact-link i {
        font-size: 0.9rem;
    }
    
    .contact-link span {
        font-size: 0.7rem;
    }
}
</style>