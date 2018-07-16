<template>
    <div class="footer">
        <div class="footer-wrp">
            <div class="footer-cnt clearfix">
                <ul class="boston-postcards">
                    <li>
                        <div class="tips">bilibili</div>
                        <div class="cards" v-for="card in cardsL"><a href="">{{card.title}}</a></div>
                    </li>
                    <li>
                        <div class="tips">传送门</div>
                        <div class="cards" v-for="card in cardsR"><a href="">{{card.title}}</a></div>
                    </li>
                    <li>
                        <div class="block right">
                            <a href="">
                                <div class="phone">
                                    <div class="pic"></div>
                                    <em>客户端下载</em>
                                    <div class="qrcode-box-wrp">
                                        <div class="qrcode-box qrcode-app">
                                            <div class="qrcode-box-arrow"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="weibo">
                                    <div class="pic"></div>
                                    <em>新浪微博</em>
                                    <div class="qrcode-box-wrp">
                                        <div class="qrcode-box qrcode-weibo">
                                            <div class="qrcode-box-arrow"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" id="weixin">
                                <div class="weixin">
                                    <div class="pic"></div>
                                    <em>官方微信</em>
                                    <div class="qrcode-box-erp bigvip-qrcode">
                                        <div class="qrcode-box qrcode-weixin">
                                            <div class="qrcode-box-arrow"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    .footer {
        width: 100%;
        padding-top: 20px;
        color: #99a2aa;
        text-align: center;
        font-size: 12px;
    }
    .footer .footer-wrp {
        background-color: #f6f9fa;
        padding-top: 40px;
        padding-bottom: 60px;
    }
    .footer .footer-cnt {
        width: 980px;
        margin: 0 auto;
    }
    .footer ul, .footer li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    .footer .boston-postcards {
        list-style: none;
        margin: 0 auto;
        float: left;
        margin-bottom: 30px;
    }
    .footer .boston-postcards li {
        float: left;
        text-align: left;
        list-style: none;
        width: 300px;
        height: 112px;
        padding-right: 25px;
        padding-left: 24px;
        line-height: 1;
        border-left: solid 1px #e5e9ef;
        font-size: 14px;
    }
    .footer .boston-postcards li:first-child {
        border-left: 0;
        padding-left: 0!important;
    }
    .footer .boston-postcards li .tips {
        margin-bottom: 22px;
    }
    .footer .boston-postcards li .cards {
        float: left;
        width: 100px;
        position: relative;
        margin-bottom: 16px;
    }
    .footer a {
        outline: none;
        text-decoration: none;
        cursor: pointer;
        white-space: nowrap;
        color: #222;
    }
    .footer .boston-postcards li:last-child {
        width: 280px;
        padding-right: 0;
    }
    .footer .right {
        float: right;
    }
    .footer .block.right {
        position: relative;
        width: 100%;
    }
    .footer .block.right div {
        position: relative;
        width: 82px;
        height: 80px;
        float: left;
    }
    .footer .block.right .pic {
        position: relative;
        margin-left: 11px;
        width: 60px;
        height: 60px;
    }
    .footer .block.right .phone .pic {
        background: url(//static.hdslb.com/images/base/icons.png) no-repeat -1024px -194px;
    }
    .footer .block.right em {
        position: absolute;
        width: 82px;
        line-height: 14px;
        float: left;
        bottom: 0;
        left: 0;
        text-align: center;
        font-weight: normal;
    }
    .footer .block.right .qrcode-box-wrp {
        width: 130px;
        height: 130px;
        background: #fff;
        margin-top: -146px;
        right: -23px;
        position: absolute;
        visibility: hidden;
        opacity: 0;
        transition: .2s;
        z-index: 100000;
    }
    .footer .block.right .qrcode-box {
        width: 128px;
        height: 128px;
        border: 1px solid #e5e9ef;
    }
    .footer .block.right .qrcode-box.qrcode-app {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAIAAABJZFj0AAADKklEQVR4nO2c0W7DIAxFk6n//8vdQyU0mZpzbaimTfe8TMsIUO86gO3mfj6fl1ny9dsT+AM8Xj/u+2538VLi3MNQ6PhT1nK+JRBuyXoujYWMPq0jxjZiHuF3/RGe6X9mdoRqn/sLS/tzXdaRgm3ERF8bZH6BS89i0cm6ysbKeliMhVQ/12UdKdhGTOprVRpLD7pMw5U+gXXEHNOR8q8WtTY3wxs/ejK3jhjbiEl9rarexlkcfQp3WI0QQsMrrSPGNmKir7V3IspZ5HVFb5CNsnBSPNY0sI4Y24i5T+2+dqLU2XKGHS6C6Aexjpiyjhr/Otzm7N+YzaqxWZuvWEeMbcTcVU0O8EE7Owhuf94OPXeuPLOzvRjOf56edcTYRky6rlXl3ciL6IcVHAvnr3yQrE/riLGNmFhbo8eSM9HqTtceS1mt9mtrBtYRYxsx5dzRTsWYuNZgmY5eM7dokF33ea0D6wjrprLnaOO4r29/sklWs5VKCYp1xNhGTDyL4PZ/Bs8ioeWbScilxdmNWYxhMbTPIiexjRj2tcCOaPFGcfujHPdF91TSOdYRYxsxvIcMmmw4YwAXo52VUY8Q6EFE64hJ8yKxXf052oiWVmuxjkR1EeuIsY2YY3mR1RhywFQ/1qx7aExmcaN1xNhGjFoPuV/msug83Iux2sVYep3zeg6XzyIlbCOmX+ffSO/pR+0wRDVKPY/STv9f1pEC57Kx8DxcHzQqrDDAmt04/6ldDzljHTG2EcPfXc8etKGBsqmp5rLbRVyLoRspFuuIsY0YNd+P+h8sWlYdoXHu1+vB9GlbR4xtxMR49kAPV+vVKtXSgY+i74GtI8Y2Ys5/DxKT8Y0GehC6mgRTerCOmGPvh1RqObKxDmaosYcwqDIZ64ixjZhj74dUntnV7U/mU0dSknon1hFjGzHH3g+5UxCgd45DtGvJFl9PsI4Y24g59l6/mezcr6811UD4fAXzVNne8ifWEfNBHTVKUPYP2PthXz+zO9hGzLH3QzZ6aJQmihsoZVZibcFlHSnYRkyaF9FpR8jSOZ0o09n//sLAOmJsI+ZYXuQfYx0xthHzDclyLbJnpcixAAAAAElFTkSuQmCC) center center no-repeat;
    }
    .footer .block.right .qrcode-box .qrcode-box-arrow {
        width: 130px;
        height: 141px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAXVBMVEUAAADf39/d3d3e3t7e3t7d3d3d3d3d3d3d3d3d3d3d3d3g4ODd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////7+/vw8PDm5ub09PTz8/Pq6uri4uL4+Ph7FEonAAAAFnRSTlMA+nfy7dvEVTghGvzRvLech2daLgwGJIBjEgAAAF9JREFUCNddzUcSgCAABMEx5xzA+P9nWgoK2Lc5bC3zD7vbG9Fqt/BICzEbiw/tYlpWwFRub59hDjB4eiSOhIevR3uDFsu712hEywJxP6Z8ukM9GrWUMbY8DDIcSY9yAeUiCzzIjqapAAAAAElFTkSuQmCC) bottom center no-repeat;
    }
    .footer .block.right .weibo .pic {
        background: url(//static.hdslb.com/images/base/icons.png) no-repeat -1024px -322px;
    }
    .footer .block.right .qrcode-box.qrcode-weibo {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABlBMVEX///8AAABVwtN+AAABPklEQVQ4y5XTsW3DMBCF4WewYGOYCwjQGtfdShLSGiaNtIa1EjuuIYALyB0Lwi9SShdk8ndfeYc7tFLWi0WuLpGhKcH5As0LE0xHfMAmVp80d+WKmPAnTYgDLrYrnF2R9TpZmLaUdU6SH3MiP7XnKcAFe21V90rFPG4qHcnw9UQyXGjH0BTgA8quCLZlzQbEXG/g2FE+Ng/3KtqRAp5pdRv2PiQjg0Z+3yN74janZPiWwtARn2B1m8rY1jGRTQNutlQ0BbO8VU09Uda2pH4xEsdNoKPBv6hmeaqtn1JuN6RcXbQ5NAX4IFKnycaOLDApGU6FY1sC/4p2uM4sHe3NKa7+HgVoSlknLYNfkg5tHd8vclyk1k/9/nvh5lj68pH1PJeEriaLXE+0a0c4n4rmzSfk0JSyQuzgnkqgoX/0Awm1JF4V4zroAAAAAElFTkSuQmCC) center center no-repeat;
    }
    .footer .block.right .weixin .pic {
        color: #222;
        background: url(//static.hdslb.com/images/base/icons.png) no-repeat -1024px -66px;
    }
</style>
<script>
    export default {
        data() {
            return {
                cardsL: [
                    {title: '关于我们', link: ''},
                    {title: '联系我们', link: ''},
                    {title: '加入我们', link: ''},
                    {title: '友情链接', link: ''},
                    {title: 'bilibili认证', link: ''},
                    {title: 'Investor Relations', link: ''},
                ],
                cardsR: [
                    {title: '帮助中心', link: ''},
                    {title: '高级弹幕', link: ''},
                    {title: '活动专题页', link: ''},
                    {title: '侵权申诉', link: ''},
                    {title: '活动中心', link: ''},
                    {title: '用户反馈论坛', link: ''},
                    {title: '壁纸站', link: ''},
                    {title: '名人堂', link: ''},
                ],
            }
        }
    }
</script>