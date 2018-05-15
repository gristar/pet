<template>
    <div class="items-wrapper adv-item clearfix">
        <div class="left-con">
            <div class="headline clearfix">
                <i class="icon icon-promote"></i>
                <span class="name">推广</span>
            </div>
            <div class="item-box clearfix">
                <div class="item">
                    <a href="">
                        <div class="pic">
                            <div class="lazy-img">
                                <img src="../../../asset/img/cover1.jpg@160w_100h.webp" alt="">
                            </div>
                        </div>
                        <p class="title">【全明星】童话镇</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="right-con">

        </div>
    </div>
</template>
<style>
    .icon-promote {
        background-position: -141px -75px;
    }
    .item-box {
        height: 168px;
        overflow: hidden;
    }
    .item {
        float: left;
        margin: 0 20px 20px 0;
    }
    .item .pic {
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
    .item .title {
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
</style>