<template>
    <div>
        <Nav/>
        <div class="content">
            <router-view></router-view>
        </div>
        <FooterVue/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import FooterVue from '../components/footer.vue';

export default {
    components: {
        Nav,
        FooterVue
    }
}
</script>

<style scoped>
.content {
    width: 100%;
    min-height: calc(100vh - 120px); /* 减去导航栏和页脚的高度 */
    overflow-y: auto;
}
</style>