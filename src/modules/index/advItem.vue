<template>
    <div class="items-wrapper wrapper adv-items clearfix">
        <div class="left-con">
            <div class="headline clearfix">
                <i class="icon icon-promote"></i>
                <span class="name">推广</span>
            </div>
            <div class="adv-items-box clearfix">
                <div class="box-item">
                    <a href="">
                        <div class="pic">
                            <div class="lazy-img">
                                <img src="../../../asset/img/cover1.png@160w_100h.png" alt="">
                            </div>
                        </div>
                        <p class="item-title">【动画中的武艺】为了明天，奋战到底——“Joe VS 荒垣”分析【MEGALOBOX】</p>
                    </a>
                </div>
                <div class="box-item">
                    <a href="">
                        <div class="pic">
                            <div class="lazy-img">
                                <img src="../../../asset/img/cover2.jpg@160w_100h.png" alt="">
                            </div>
                        </div>
                        <p class="item-title">【全程高能】11种语言解说集锦：RNG复仇KZ，Uzi天秀卡莎</p>
                    </a>
                </div>
                <div class="box-item">
                    <a href="">
                        <div class="pic">
                            <div class="lazy-img">
                                <img src="../../../asset/img/cover3.jpg@160w_100h.png" alt="">
                            </div>
                        </div>
                        <p class="item-title">逼我朋友用中文介绍鞋子</p>
                    </a>
                </div>
                <div class="box-item">
                    <a href="">
                        <div class="pic">
                            <div class="lazy-img">
                                <img src="../../../asset/img/cover4.jpg@160w_100h.png" alt="">
                            </div>
                        </div>
                        <p class="item-title">【波澜哥x面筋哥】骚（原曲：痒）</p>
                    </a>
                </div>
                <div class="box-item">
                    <a href="">
                        <div class="pic">
                            <div class="lazy-img">
                                <img src="../../../asset/img/cover1.png@160w_100h.png" alt="">
                            </div>
                        </div>
                        <p class="item-title">【动画中的武艺】为了明天，奋战到底——“Joe VS 荒垣”分析【MEGALOBOX】</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="right-con">
            <div class="online">
                <a href="">在线人数：1312819</a><em></em><a href="">最新投稿：11732</a>
            </div>
            <div class="adpos">
                <a href=""><img src="../../../asset/img/ad1.jpg" alt="" class="pic" width="260" height="150"></a>
            </div>
        </div>
    </div>
</template>
<style>
    .adv-items .headline .icon {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: middle;
        float: left;
        margin-top: -10px;
    }
    .icon-promote {
        background-position: -141px -75px;
    }
    .adv-items-box {
        height: 168px;
        overflow: hidden;
    }
    .box-item {
        float: left;
        margin: 0 20px 20px 0;
        position: relative;
        width: 160px;
        height: 148px;
        font-size: 12px;
        overflow: hidden;
    }
    .box-item .pic {
        position: relative;
        width: 160px;
        height: 100px;
        display: block;
        overflow: hidden;
        text-align: center;
        border-radius: 4px;
    }
    .lazy-img {
        background: url('../../../asset/img/lazy.png');
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .box-item .item-title {
        padding-top: 8px;
        height: 40px;
        line-height: 20px;
        -webkit-transition: all .2s linear;
        -o-transition: all .2s linear;
        transition: all .2s linear;
        color: #222;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        text-align: left;
    }
    .box-item a:hover .item-title {
        color: #00a1d6;
    }
    .adv-items .online {
        position: relative;
        height: 34px;
        line-height: 34px;
        padding: 0 10px;
        border-radius: 4px;
        text-align: center;
        background: #e5e9ef;
        white-space: nowrap;
    }
    .adv-items .online em {
        display: inline-block;
        border-left: 1px solid #b8c0cc;
        height: 10px;
        line-height: 10px;
        margin: 12px 15px 0;
        vertical-align: top;
    }
    .adv-items .online a {
        color: #6d757a;
        transition: all .2s;
        -webkit-transition: all .2s;
        -o-transition: all .2s;
    }
    .adv-items .adpos {
        margin-top: 10px;
        border-radius: 4px;
        overflow: hidden;
        width: 260px;
        height: 150px;
        position: relative;
    }
    .adv-items .adpos a {
        display: block;
    }
    .adv-items .online a:hover {
        color: #00a1d6;
    }
</style>