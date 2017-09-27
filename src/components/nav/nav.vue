<template>
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button class="navbar-toggle collapsed" type="button" data-target="#menu">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">Pet</a>
                </div>

                <div class="collapse navbar-collapse" id="menu">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="">精选</a></li>
                        <li><a href="">关注</a></li>
                        <li><a href="">宠物资讯</a></li>
                        <li class="divider"></li>
                        <li><a href="">反馈</a></li>
                    </ul>
                    <form action="" class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="搜索">
                        </div>
                        <button type="submit" class="btn btn-default">提交</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle">宠物<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="">狗狗</a></li>
                                <li><a href="">猫咪</a></li>
                                <li><a href="">小宠</a></li>
                                <li><a href="">水族</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {

    }
</script>