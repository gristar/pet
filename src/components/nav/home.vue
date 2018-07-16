<template>
    <div id="head-banner" class="head-banner" :style="headBannerImg">
        <div class="search">
            <form class="searchform">
                <input type="text" autocomplete="off" accesskey="s" placeholder="真男人都在用这套表情包（滑稽）" value="" class="search-keyword">
                <button type="submit" class="search-submit"></button>
            </form>
            <a href="//www.bilibili.com/ranking" target="_blank" class="link-ranking"><span>排行榜</span></a>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import '../../styles/nav.css';
    import bg1 from '../../../asset/bg_1.png';
    export default {
        data() {
            return {
                headBannerImg: {
                    'background-image': `url(${bg1})`
                }
            }
        }
    }
</script>