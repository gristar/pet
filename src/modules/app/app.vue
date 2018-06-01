<template>
    <div>
        <el-nav></el-nav>
        <!--<index></index>-->
        <detail></detail>
        <router-view></router-view>
        <el-footer></el-footer>
    </div>
</template>
<script>
    import resetStyle from '../../styles/reset.css'
    import commonStyle from '../../styles/common.css'
    import ElNav from '../../components/nav/mainTopNav.vue'
    import ElFooter from '../../components/nav/footer.vue'
    import Index from '../index';
    import Detail from '../detail';

    export default {
        components: {
            ElNav,
            Index,
            Detail,
            ElFooter,
        },
        mounted() {
            console.log('app mounted');
        }
    }
</script>