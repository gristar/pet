<template>
    <header>
        <nav>
            <div class="nav-menu clearfix">
                <div class="bg-blur"></div>
                <div class="nav-mask"></div>
                <div class="wrapper clearfix">
                    <div class="fl">
                        <ul>
                            <li class="nav-home"><a href=""><i class="icon-home icon"></i>主站</a></li>
                            <li><a href="">画友</a></li>
                            <li><a href="">游戏中心</a></li>
                            <li><a href="">直播</a></li>
                            <li><a href="">会员购</a></li>
                            <li><a href=""><i class="icon new"></i>BML</a></li>
                            <li class="nav-mobile"><i class="icon icon-mobile"></i><a href="">下载APP</a></li>
                        </ul>
                    </div>
                    <div class="right-item fr"><a href="" class="right-link">投 稿</a></div>
                    <div class="fr">
                        <ul>
                            <li class="profile-info">
                                <a href="">
                                    <div class="i-face"><img src="../../../asset/img/face.jpg" alt="" class="face"></div>
                                </a>
                            </li>
                            <li><a href="">历史</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="nav-banner">
                <div class="wrapper">
                    <div class="search">
                        <form class="search-form">
                            <input type="text" class="search-keyword">
                            <button type="submit" class="search-submit icon"></button>
                        </form>
                        <a href="" class="link-ranking"><span class="icon">排行榜</span></a>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="primary-menu">
                    <ul class="primary-nav">
                        <li class="home">
                            <a href="" class="icon">
                                <div class="nav-name">首页</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>888</span></div>
                                <div class="nav-name">动画</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>79</span></div>
                                <div class="nav-name">番剧</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>93</span></div>
                                <div class="nav-name">国创</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>999+</span></div>
                                <div class="nav-name">音乐</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>93</span></div>
                                <div class="nav-name">舞蹈</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>999+</span></div>
                                <div class="nav-name">游戏</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>693</span></div>
                                <div class="nav-name">科技</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>999+</span></div>
                                <div class="nav-name">生活</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>31</span></div>
                                <div class="nav-name">鬼畜</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>237</span></div>
                                <div class="nav-name">时尚</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>36</span></div>
                                <div class="nav-name">广告</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>999+</span></div>
                                <div class="nav-name">娱乐</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>905</span></div>
                                <div class="nav-name">影视</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="nav-num"><span>8</span></div>
                                <div class="nav-name">放映厅</div>
                            </a>
                        </li>
                        <li class="side-nav">
                            <a href="" class="side-link">
                                <i class="column icon"></i>
                                <span>专栏</span>
                            </a>
                        </li>
                        <li class="side-nav">
                            <a href="" class="side-link">
                                <i class="square icon"></i>
                                <span>广场</span>
                            </a>
                        </li>
                        <li class="side-nav">
                            <a href="" class="side-link">
                                <i class="live icon"></i>
                                <span>直播</span>
                            </a>
                        </li>
                        <li class="side-nav">
                            <a href="" class="side-link">
                                <i class="blackroom icon"></i>
                                <span>小黑屋</span>
                            </a>
                        </li>
                    </ul>
                    <div class="gif-menu gif-nav">
                        <a href="" class="gif-link"><img src="../../../asset/img/gig-nav.gif" alt=""></a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<style>
    .bg-blur {
        background: url('../../../asset/img/nav-top-main.png') no-repeat center -10px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(4px);
        -webkit-filter: blur(4px);
    }
    .nav-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: hsla(0,0%,100%,.4);
        -webkit-box-shadow: rgba(0,0,0,.1) 0 1px 2px;
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    .nav-menu {
        height: 42px;
        position: relative;
        z-index: 200;
        color: #222;
    }
    .nav-menu .wrapper {
        position: relative;
    }
    .nav-menu ul li {
        height: 42px;
        line-height: 42px;
        transition: all .3s;
        -webkit-transition: all .3s;
        -o-transition: all .3s;
    }
    .nav-menu ul li a {
        padding: 0 10px;
        height: 100%;
        display: block;
        text-align: center;
        color: #222;
    }
    .nav-menu ul li:hover {
        background-color: hsla(0, 0%, 100%, .3);
    }
    .nav-menu .right-item {
        width: 58px;
    }
    .nav-menu .right-link {
        height: 42px;
        line-height: 42px;
        display: block;
        text-align: center;
    }
    .nav-home {
        margin-left: -10px;
        padding-left: 12px;
        position: relative;
    }
    .nav-home a{
        padding-left: 20px !important;
    }
    .icon-home{
        position: absolute;
        width: 17px;
        height: 14px;
        left: 10px;
        top: 12px;
        background-position: -855px -88px;
        display: inline-block;
    }
    .nav-menu i.new {
        position: absolute;
        top: 6px;
        right: -6px;
        width: 22px;
        height: 9px;
        background-position: -851px -412px;
    }
    .nav-mobile {
        padding: 0 10px;
    }
    .nav-mobile .icon-mobile {
        background-position: -1371px -1175px;
        width: 16px;
        height: 21px;
        vertical-align: middle;
    }
    .nav-mobile a {
        display: inline-block !important;
        padding: 0 !important;
    }
    .profile-info {
        width: 58px;
    }
    .profile-info:hover {
        background: none !important;
    }
    .profile-info .i-face {
        position: absolute;
        z-index: 25;
        width: 36px;
        height: 36px;
        left: 11px;
        top: 0;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
    }
    .profile-info .i-face .face {
        border: 0 solid #fff;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        vertical-align: middle;
    }
    .nav-menu .right-item {
        position: relative;
        width: 58px;
        height: 42px;
    }
    .nav-menu .right-link {
        display: block;
        width: 100%;
        height: 48px;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAwBAMAAACyDnR9AAAAMFBMVEXUUnzWUn3WUn3VUnzVUnzVUn3UUnzUUnzaU4DfVYTuW4zxXI3VUn3qWYjmWIfkV4UXsS1iAAAACHRSTlMB99aQK5W8mPW6JqwAAACVSURBVDjLxcuhDUJBEEXRa2gAhcVRABKHRVAIghZAISgAFH4mNDArIQRBBSSUAC3wfwG7z2x+9uxmzM0jKe2qR0qe/06K5B6RvYG5hXn/LHMxYch6VXibeHyUqvpV0NufUlX/SlU9K1wUvW1WDwonRW+b1afCREx3zI5lexavshsrUe+MRF3DphgfIMZbgOU028Zz6AD+Td5T0E5DWAAAAABJRU5ErkJggg==)
    }
    .nav-menu .right-item:hover .right-link {
        opacity: .9;
    }
    .nav-menu ul li,
    .primary-menu ul li{
        float: left;
        position: relative;
    }
    .nav-banner {
        height: 170px;
        background: #eee url('../../../asset/img/nav-top-main.png') no-repeat center -10px;
        position: relative;
        z-index: 199;
        margin-top: -42px;
    }
    .search {
        position: absolute;
        right: 0;
        bottom: 20px;
        width: 268px;
        height: 32px;
        padding: 2px 2px 2px 72px;
        border-radius: 6px;
        font-size: 12px;
        background-color: rgba(0,0,0,.12);
    }
    .search-form {
        display: block;
        background-color: #fff;
        background-color: hsla(0, 0%, 100%, .88);
        height: 32px;
        border-radius: 4px;
    }
    .search-form:hover {
        background-color: #fff;
    }
    .search-keyword {
        float: left;
        width: 200px;
        display: block;
        color: #222;
        font-size: 12px;
        overflow: hidden;
        height: 32px;
        line-height: 32px;
        padding: 0 12px;
        border: 0;
        box-shadow: none;
        -webkit-box-shadow: none;
        background-color: transparent;
    }
    .search-submit {
        position:absolute;
        display: block;
        right: 0;
        width: 48px;
        min-width: 0;
        cursor: pointer;
        height: 32px;
        background-position: -635px -720px;
        margin: 0;
        padding: 0;
        border: 0;
    }
    .link-ranking {
        position: absolute;
        left: 2px;
        top: 2px;
        height: 32px;
        line-height: 32px;
        background-color: #fff;
        background-color: hsla(0,0%,100%, .88);
        border-radius: 4px;
        width: 68px;
        transition: background-color .2s;
        -webkit-transition: background-color .2s;
        -o-transition: background-color .2s;
    }
    .link-ranking:hover {
        background-color: #fff;
    }
    .link-ranking span {
        padding-left: 26px;
        color: #f25d81;
        display: inline-block;
        background-position: -659px -655px;
    }
    .primary-menu {
        position: relative;
        height: 50px;
        padding: 8px 0 0;
        margin-bottom: 4px;
        border-bottom: 1px solid #fff;
    }
    .primary-nav {
        display: inline-block;
        height: 42px;
        color: #222;
        position: relative;
    }
    .primary-nav> li {
        float: left;
        display: block;
        position: relative;
        margin-right: 0;
    }
    .primary-nav>li>a {
        width: 48px;
        text-align: center;
        display: block;
    }
    .nav-num {
        position: absolute;
        top: 8px;
        left: 0;
        height: 14px;
        width: 100%;
    }
    .nav-num span {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        transform: scale(.85);
        -webkit-transform: scale(.85);
        -ms-transform: scale(.85);
        color: #fff;
        background-color: #ffafc9;
        border-radius: 3px;
        height: 12px;
        line-height: 14px;
        max-width: 28px;
        padding: 1px 3px;
        font-family: sans-serif;
        box-sizing: content-box;
    }
    .nav-name {
        display: inline-block;
        vertical-align: middle;
        color: #222;
        font-size: 12px;
        height: 40px;
        padding-top: 8px;
        line-height: 50px;
    }
    .primary-nav li.home {
        margin-right: 9px;
    }
    .primary-nav li.home>a {
        background-position: -660px -1170px;
        width: auto;
    }
    .primary-nav .side-nav {
        margin: 0 4px;
        width: 40px;
        text-align: center;
    }
    .primary-nav .side-link {
        display: inline-block;
        position: relative;
        overflow: hidden;
        zoom:1;
    }
    .primary-nav .side-link i {
        display: block;
        width: 18px;
        height: 18px;
        margin: 3px auto 2px;
    }
    .primary-nav .side-link i.column {
        background-position: -87px -1814px;
    }
    .primary-nav .side-link i.square {
        background-position: -87px -2006px;
    }
    .primary-nav .side-link i.live {
        background-position: -87px -1878px;
    }
    .primary-nav .side-link i.blackroom {
        background-position: -87px -1942px;
    }
    .primary-nav .side-link span {
        display: block;
        color: #222;
        margin: 0;
        font-size: 12px
    }
    .gif-nav {
        position: absolute;
        right: 0;
        top: 0;
        height: 50px;
        padding: 4px 0;
    }
    .gif-nav .gif-link {
        width: 69px;
        height: 40px;
        display: inline-block;
        vertical-align: top;
        margin: 3px 0;
        overflow: hidden;
    }
    .gif-nav .gif-link img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-radius: 3px;
    }
</style>
<script>
    export default {

    }
</script>