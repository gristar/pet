<template>
    <div>
        <div class="tab">
            <div class="tab-item on">直播排行</div>
            <div class="tab-item">关注的主播</div>
            <div class="tab-item">为你推荐</div>
        </div>
        <div class="tab-box">
            <div class="tab-con clearfix">
                <div class="tab-item rank">
                    <div class="r-item" v-for="(item, index) in rank">
                        <span class="number">{{index+1}}</span>
                        <a href="" class="preview">
                            <div class="lazy-img"><img :src="item.cover" alt=""></div>
                        </a>
                        <a href="">
                            <div class="r-i">
                                <p class="r-i-t">
                                    <span class="u-name">{{item.uName}}</span>
                                    <span class="u-online"><i></i><em>{{item.uOnline}}</em></span>
                                </p>
                                <div class="r-i-st">{{item.title}}</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="tab-item"></div>
                <div class="tab-item tuijian">
                    <!--<div class="tj-swiper swiper-container">
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
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .tab {
        overflow: hidden;
        zoom: 1;
    }
    .tab-item:first-child {
        margin-left: 0;
    }
    .tab-item {
        float: left;
        position: relative;
        height: 20px;
        line-height: 20px;
        cursor: pointer;
        padding: 1px 0 2px;
        border-bottom: 1px solid transparent;
        margin-left: 12px;
        -webkit-transition: .2s;
        -o-transition: .2s;
        transition: .2s;
        -webkit-transition-property: border,color;
        -o-transition-property: border,color;
        transition-property: border,color;
    }
    .tab-item .r-item {
        overflow: hidden;
        position: relative;
        margin: 0 0 14px;
    }
    .tab-item.rank .r-item {
        padding-left: 25px;
    }
    .r-item .number {
        position: absolute;
        color: #fff;
        height: 18px;
        line-height: 18px;
        top: 0;
        left: 0;
        font-size: 12px;
        min-width: 12px;
        text-align: center;
        background-color: #b8c0cc;
        z-index: 20;
        border-radius: 4px;
        padding: 0 3px;
        font-weight: bolder;
        float: left;
        margin-right: 6px;
    }
    .tab-item .r-item:first-child .number,
    .tab-item .r-item:nth-child(2) .number,
    .tab-item .r-item:nth-child(3) .number {
        background-color: #f25d8e;
    }
    .tab-item .r-item .preview {
        display: block;
        float: left;
        position: relative;
        margin-right: 12px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }
    .tab-item .r-item .r-i {
        float: left;
        width: 205px;
    }
    .tab-item.rank .r-item .r-i {
        width: 180px;
    }
    .tab-item .r-item .r-i-t {
        line-height: 16px;
        overflow: hidden;
    }
    .tab-item .r-item .r-i-t .u-name {
        max-width: 135px;
        float: left;
        color: #222;
        overflow: hidden;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .tab-item .r-item .r-i-t .u-online {
        max-width: 60px;
        float: right;
        color: #99a2aa;
        line-height: 16px;
        overflow: hidden;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .tab-item .r-item .r-i-t .u-online i {
        display: inline-block;
        vertical-align: middle;
        width: 12px;
        height: 12px;
        margin-top: -2px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFW…9evEIPVrCG58hxAVJw+95DXJH3AuSHFBCDiJh+CkoaAAEGAFWeWrgxfH0/AAAAAElFTkSuQmCC) no-repeat;
    }
    .tab-item .r-item .r-i-st {
        margin-top: 4px;
        color: #99a2aa;
        overflow: hidden;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        max-width: 190px;
    }
</style>
<script>
    import Swiper from 'swiper';

    export default {
        data() {
            return {
                rank: [
                    {uName: '宫本狗雨',uOnline: '9.8万', cover: 'https://i2.hdslb.com/bfs/face/8c49a758216f9bd14b0046afe48a3514f44126f0.jpg@40w_40h.webp', title: '黑魂重制版'},
                    {uName: 'OldBa1',uOnline: '4.0万', cover: 'https://i2.hdslb.com/bfs/face/795d2fae0a26727dd88c53e060024bab8efecb54.jpg@40w_40h.webp', title: '第五人格第二赛季启动~'},
                    {uName: '梦醒三生梦',uOnline: '3.5万', cover: 'https://i1.hdslb.com/bfs/face/b30b947c58c6b1011136621a3ab54c0031c920fe.jpg@40w_40h.webp', title: '二狗带你看懂王者荣耀'},
                    {uName: '杆菌无敌',uOnline: '3.0万', cover: 'https://i0.hdslb.com/bfs/face/6bbeb93dd72c60cb7ad2e876b241d0360d7f0d38.gif', title: '【杆菌】哇！吃人！'},
                    {uName: '基佬爱上熊',uOnline: '2.0万', cover: 'https://i0.hdslb.com/bfs/face/ce10c759df53720268b23ef8bd06150aa61834a5.jpg@40w_40h.webp', title: '【pokemmo】全世界玩家在线出手机端'},
                    {uName: '红发杰克丶',uOnline: '1.7万', cover: 'https://i1.hdslb.com/bfs/face/ea5235b1c9d9ce2604c37bcef2c0ef965d3b5589.jpg@40w_40h.webp', title: '堡垒之夜'},
                ]
            }
        }
    }

    let tjSwiper = new Swiper ('.tj-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
</script>