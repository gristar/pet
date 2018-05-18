<template>
    <div>
        <slider-item></slider-item>
        <adv-item></adv-item>
        <items-row></items-row>
        <items-row></items-row>
        <items-row></items-row>
        <items-row></items-row>
        <items-row></items-row>
    </div>
</template>
<script>
    import SliderItem from './sliderItem.vue'
    import AdvItem from './advItem.vue'
    import ItemsRow from './itemsRow.vue'

    export default {
        components: {
            SliderItem,
            AdvItem,
            ItemsRow
        },
        mounted() {
            console.log('index mounted');
        }
    }
</script>