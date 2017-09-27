<template>
    <div>
        <nav></nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import nav from '../../components/nav'

    export default {
        components: {
            nav
        }
    }
</script>