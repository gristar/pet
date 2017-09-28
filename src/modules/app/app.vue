<template>
    <div>
        <el-nav></el-nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import ElNav from '../../components/nav'

    export default {
        components: {
            ElNav
        }
    }
</script>