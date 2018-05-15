<template>
    <div>
        <el-nav></el-nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import resetStyle from '../../styles/reset.css'
    import commonStyle from '../../styles/common.css'
    import ElNav from '../../components/nav/mainTopNav.vue'

    export default {
        components: {
            ElNav
        },
        mounted() {
            console.log('app mounted');
        }
    }
</script>