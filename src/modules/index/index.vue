<template>
    <div>
        <slider-item></slider-item>
    </div>
</template>
<script>
    import SliderItem from './sliderItem.vue'

    export default {
        components: {
            SliderItem
        },
        mounted() {
            console.log('index mounted');
        }
    }
</script>