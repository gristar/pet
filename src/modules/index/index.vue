<template>
    <div>
        <slider-item></slider-item>
        <adv-item></adv-item>
        <div class="contents" data-scroll-reveal="enter left and move 50px over 1.33s">
            <items-row></items-row>
            <items-row></items-row>
            <items-row></items-row>
            <items-row></items-row>
            <items-row></items-row>
        </div>
    </div>
</template>

<script>
    import SliderItem from './sliderItem.vue'
    import AdvItem from './advItem.vue'
    import ItemsRow from './itemsRow.vue'

    /*window.sr = ScrollReveal({ duration: 2000 });
    sr.reveal('.contents');*/

    export default {
        components: {
            SliderItem,
            AdvItem,
            ItemsRow,
        },
        mounted() {
            console.log('index mounted');
        }
    }
</script>