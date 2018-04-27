<template>
    <div>
        <el-nav></el-nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import reset from '../../styles/reset.css'
    import ElNav from '../../components/nav/mainTopNav.vue'

    export default {
        components: {
            ElNav
        }
    }
</script>