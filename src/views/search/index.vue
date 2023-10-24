<template>
<div class="bg">
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
            <form action="">
                <button type="button" onclick="javascript:window.history.go(-1)"></button>
                <label for="search"><button></button><input type="text" id="search" placeholder="搜索作者或画作"></label>
                <a>搜索</a>
            </form>
        </div>
        <div class="history">
            <div class="head">
                <div class="left">搜索历史</div>
                <div class="right">清空</div>
            </div>
            <div class="body">
                <li><a href="">向野的花</a></li>
                <li><a href="">原野的草</a></li>
                <li><a href="">花</a></li>
                <li><a href="">树</a></li>
            </div>
        </div>
        <div class="history maybe_you_like">
            <div class="head">
                <div class="left">猜你喜欢</div>
                <div class="right">关闭</div>
            </div>
            <div class="body">
                <li><a href="">向野的野象</a></li>
                <li><a href="">愿为西南风</a></li>
                <li><a href="">花</a></li>
                <li><a href="">奇妙世界物语</a></li>
            </div>
        </div>
        <div class="backgr">
            <li class="title">
                <a href="">
                    <div style="margin-left: .4rem;" class="current">hot</div>
                </a>
                <a href="">
                    <div>实时</div>
                </a>
                 <a href="">
                    <div>趋势</div>
                </a>
            </li>
            <li>
                <div class="num" style="font-size: .693rem;color: #e7166b;font-weight: bold;">1.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot1.png" alt="" style="width: 1.04rem;">3.9k</div>
            </li>
            <li>
                <div class="num" style="font-size: .693rem;color: #32c29a;font-weight: bold;">2.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot2.png" alt="" style="width: 1.04rem;">3.2k</div>
            </li>
            <li>
                <div class="num" style="font-size: .693rem;color: #f996be;font-weight: bold;">3.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot3.png" alt="" style="width: 1.04rem;">2.9k</div>
            </li>
            <li>
                <div class="num">4.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot4.png" alt="">2.6k</div>
            </li>
            <li>
                <div class="num">5.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot4.png" alt="">2.6k</div>
            </li>
            <li>
                <div class="num">6.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot4.png" alt="">2.6k</div>
            </li>
            <li>
                <div class="num">7.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot4.png" alt="">3.9k</div>
            </li>
            <li>
                <div class="num">8.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot4.png" alt="">3.9k</div>
            </li>
            <li>
                <div class="num">9.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot4.png" alt="">3.9k</div>
            </li>
            <li>
                <div class="num">10.</div>
                <div class="work_name">奇妙世界物语系列</div>
                <div class="left"><img src="@/assets/images/hot4.png" alt="">3.9k</div>
            </li>
        </div>

    </div>
</template>

<script>
export default {
  name: 'searchIndex'
}
</script>

<style scoped>
/*导航栏样式*/
.nav button {
    float: left;
    font-size: .64rem;
    font-family: 'icomoon';
    color: #919191;
}

.nav a {
    float: right;
    height: 1.067rem;
    line-height: 1.067rem;
    margin-right: .267rem;
    color: #919191;
}

.nav label {
    display: inline-block;
    width: 7.173rem;
    height: 1.067rem;
    border-radius: .533rem;
    background-color: #E3E3EC;
    font-size: .373rem;
}

.nav label button {
    background: transparent;
    width: .427rem;
    margin-left: .64rem;
    line-height: 1.067rem;
}

.nav label input {
    height: 1.067rem;
    width: 5.867rem;
    float: right;
    border-radius: 0 .533rem .533rem 0;
    background-color: transparent;
}

/*history样式*/
.history {
    margin: 0 auto;
    margin-top: 2.3125rem;
    width: 8.72rem;
    height: 3.2rem;
}
.history .head {
    height: 1.173rem;
}
.history .head .left {
    float: left;
    height: 1.173rem;
    line-height: 1.173rem;
}
.history .head .right {
    float: right;
    height: 1.173rem;
    line-height: 1.173rem;
}
.history .head .right::before {
    font-family: 'icomoon';
    content: '\e9ac';
}
.history .body {
    width: 8.72rem;
    height: 2.08rem;
}
.history .body a {
    float: left;
    padding: 0 .4rem;
    height: .8rem;
    line-height: .8rem;
    background-color: #e3e3ec;
    color: #919191;
    border-radius: .4rem;
    margin-bottom: .267rem;
    margin-right: .64rem;
}
.maybe_you_like {
    margin-top: 0;
}
.maybe_you_like .head .left {
    height: 1.173rem;
    line-height: 1.173rem;
    margin-left: -1.867rem;
}
.maybe_you_like .head .right::before {
    font-family: 'icomoon';
    content: '\e9ce';
}

/*排行榜*/
.backgr {
    width: 8.72rem;
    height: 14.667rem;
    background-color: #fff;
    margin: auto;
    margin-top: .267rem;
    border-radius: .427rem;
}
.backgr li {
    height: 1.333rem;
}
.backgr .title div {
    color: #919191;
    float: left;
    width: 1.6rem;
    height: 1.067rem;
    line-height: 1.067rem;
    text-align: center;
}
.backgr li .current {
    font-size: .533rem;
    font-weight: bold;
    color: #e7166b;
    border-bottom: 3px solid #e7166b;
}
.backgr li div {
    display: inline-block;
}
.backgr .num {
    margin-left: .32rem;
    height: 1.333rem;
    line-height: 1.333rem;
}
.backgr .left {
    float: right;
    height: 1.333rem;
    line-height: 1.333rem;
    color: #e7166b;
    margin-right: .267rem;
}
.backgr .left img {
    width: .773rem;
}
</style>
