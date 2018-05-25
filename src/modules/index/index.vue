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
        <index-footer></index-footer>
    </div>
</template>

<script>
    import SliderItem from './sliderItem.vue'
    import AdvItem from './advItem.vue'
    import ItemsRow from './itemsRow.vue'
    import IndexFooter from './footer.vue'

    /*window.sr = ScrollReveal({ duration: 2000 });
    sr.reveal('.contents');*/

    export default {
        components: {
            SliderItem,
            AdvItem,
            ItemsRow,
            IndexFooter,
        },
        mounted() {
            console.log('index mounted');
        }
    }
</script>