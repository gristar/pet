<template>
    <div>
        <el-nav></el-nav>
        <index></index>
        <router-view></router-view>
    </div>
</template>
<script>
    import resetStyle from '../../styles/reset.css'
    import commonStyle from '../../styles/common.css'
    import ElNav from '../../components/nav/mainTopNav.vue'
    import Index from '../index';

    export default {
        components: {
            ElNav,
            Index,
        },
        mounted() {
            console.log('app mounted');
        }
    }
</script>