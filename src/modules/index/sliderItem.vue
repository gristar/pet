<template>
    <div class="wrapper">
        <div class="first-content">
            <div class="index-swiper swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="">
                            <div class="lazy-img"><img src="../../../asset/img/carbox1.jpg" alt=""></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="">
                            <div class="lazy-img"><img src="../../../asset/img/carbox2.jpg" alt=""></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="">
                            <div class="lazy-img"><img src="../../../asset/img/carbox3.jpg" alt=""></div>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="right-items clearfix">
                <div class="item">
                    <a href="">
                        <img src="../../../asset/img/item1.jpg" alt="">
                        <div class="item-mask">
                            <p class="title">最后的无限大合唱，说好的不哭的【数码宝贝tri完结纪念】再见 童年！</p>
                            <p class="author">up主：戦場ヶ原様</p>
                            <p class="play">播放：6.1万</p>
                        </div>
                    </a>
                </div>
                <div class="item">
                    <a href="">
                        <img src="../../../asset/img/item2.jpg" alt="">
                        <div class="item-mask">
                            <p class="title">【2018安迷修生贺】春雷【安雷向】</p>
                            <p class="author">up主：Lowrain平子</p>
                            <p class="play">播放：2.7万</p>
                        </div>
                    </a>
                </div>
                <div class="item">
                    <a href="">
                        <img src="../../../asset/img/item3.jpg" alt="">
                        <div class="item-mask">
                            <p class="title">【灯泡】P5高还原！异世界的怪盗团参上！</p>
                            <p class="author">up主：大大大灯泡</p>
                            <p class="play">播放：28.6万</p>
                        </div>
                    </a>
                </div>
                <div class="item">
                    <a href="">
                        <img src="../../../asset/img/item4.jpg" alt="">
                        <div class="item-mask">
                            <p class="title">【高能乱入】《次元复仇者：无限战争》————二次元英雄！全力参战！！！</p>
                            <p class="author">up主：reAct木子</p>
                            <p class="play">播放：3.9万</p>
                        </div>
                    </a>
                </div>
                <div class="item">
                    <a href="">
                        <img src="../../../asset/img/item5.jpg" alt="">
                        <div class="item-mask">
                            <p class="title">[ official MV ]ディカディズム / décadism / Flower･心華</p>
                            <p class="author">up主：nulut</p>
                            <p class="play">播放：1.0万</p>
                        </div>
                    </a>
                </div>
                <div class="item">
                    <a href="">
                        <img src="../../../asset/img/item6.jpg" alt="">
                        <div class="item-mask">
                            <p class="title">【Animenz】 Weight of the World（世界的重量）- Nier Automata ED（尼尔机械纪元片尾曲）</p>
                            <p class="author">up主：Animenzzz</p>
                            <p class="play">播放：3.1万</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .first-content {
        padding-bottom: 40px;
    }
    .swiper-container {
        width: 440px;
        height: 220px;
        float: left;
    }
    .lazy-img {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .lazy-img img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .swiper-pagination {
        text-align: right;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        text-align: center;
        color: #fff;
    }
    .right-items {
        height: 220px;
        position: relative;
        overflow: hidden;
    }
    .item {
        float: left;
        margin: 0 0 20px 20px;
        width: 160px;
        height: 100px;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        background: #fff;
    }
    .item img {
        width: 160px;
        height: 100px;
    }
    .item-mask {
        position: absolute;
        left: 0;
        top: 68px;
        width: 150px;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        padding: 10px 5px;
        overflow: hidden;
        background: #000;
        background: -webkit-linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
        background: -o-linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
        background: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(20%,rgba(0,0,0,.1)),color-stop(35%,rgba(0,0,0,.2)),color-stop(65%,rgba(0,0,0,.6)),to(rgba(0,0,0,.9)));
        background: linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
    }
    .item-mask .title {
        color: #fff;
        height: 40px;
        overflow: hidden;
        margin-bottom: 5px;
        word-break: break-all;
        word-wrap: break-word;
    }
    .item-mask .author,
    .item-mask .play {
        opacity: 0;
        color: #99a2aa;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        transition: all .6s;
        -webkit-transition: all .6s;
        -o-transition: all .6s;
    }
    .item:hover .item-mask {
        top: 0;
        height: 100%;
        background: rgba(0,0,0,0.7);
    }
</style>
<script>
    import swiperStyle from 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper';

    export default {
        mounted() {
            let mySwiper = new Swiper ('.index-swiper', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                autoplay: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })
        }
    }

</script>