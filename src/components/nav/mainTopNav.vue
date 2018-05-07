<template>
    <header>
        <nav>
            <div class="nav-menu clearfix">
                <div class="wrapper">
                    <div class="fl">
                        <ul>
                            <li><a href="">主站</a></li>
                            <li><a href="">画友</a></li>
                            <li><a href="">游戏中心</a></li>
                            <li><a href="">直播</a></li>
                            <li><a href="">会员购</a></li>
                            <li><a href="">BML</a></li>
                            <li><a href="">下载APP</a></li>
                        </ul>
                    </div>
                    <div class="right-item fr"><a href="" class="right-link">投稿</a></div>
                    <div class="fr">
                        <ul>
                            <li><a href="">个人中心</a></li>
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
                            <button type="submit" class="search-submit"></button>
                        </form>
                        <a href="" class="link-ranking"><span>排行榜</span></a>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="primary-menu">
                    <ul class="primary-nav">
                        <li>
                            <a href="">
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
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style>
    .wrapper {
        width: 1160px;
        margin: 0 auto;
    }
    @media screen and (max-width: 1400px) {
        .wrapper {
            width: 980px;
        }
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }
    .nav-menu {
        height: 42px;
    }
    .nav-menu ul li {
        height: 42px;
        line-height: 42px;
    }
    .nav-menu ul li a {
        padding: 0 10px;
        height: 100%;
        display: block;
        text-align: center;
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
    .nav-menu ul li,
    .primary-menu ul li{
        float: left;
    }
    .nav-banner {
        height: 170px;
        background: url('../../../asset/img/nav-top-main.png') no-repeat center;
        position: relative;
    }
    .search {
        position: absolute;
        right: 0;
        bottom: 20px;
        width: 268px;
        height: 36px;
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
        background: url('../../../asset/img/icons.png') -635px -720px;
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
        text-align: center;
        transition: background-color .2s;
        -webkit-transition: background-color .2s;
        -o-transition: background-color .2s;
    }
    .link-ranking:hover {
        background-color: #fff;
    }
    .link-ranking span {

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
</style>
<script>
    export default {

    }
</script>