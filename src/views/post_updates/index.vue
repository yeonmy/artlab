<template>
  <div class="bg">
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
            <button onclick="javascript:window.history.go(-1)"></button>
            <em class="title1">发表动态</em>
            <button class="sub">发布</button>
        </div>
        <div class="content">
            <textarea name="" id="" cols="30" rows="10" placeholder="说点儿什么吧..."></textarea>
            <button></button>
        </div>
        <ul class="uller">
            <li><em></em>权限设置 <div class="right">所有人可见</div></li>
            <li><em></em>标签 <div class="right" style="margin-right: -2.667rem;">添加标签</div></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'postIndex'
}
</script>

<style scoped>
/* nav样式 */
.nav .sub {
    background-color: #e7166b;
    border-radius: .333rem;
    float: right;
    width: 1.52rem;
    height: .667rem;
    margin-top: .267rem;
    margin-right: .64rem;
    color: #fff;
    font-size: .373rem;
}

.nav .title1 {
    margin-left: 1.067rem;
}

/* content样式 */
.content {
    margin-top: 2.347rem;
    width: 10rem;
    height: 7.12rem;
    background-color: #fff;
    padding-left: .64rem;
}

.content textarea {
    border: none;
    margin-top: .267rem;
    width: 8.72rem;
    height: 3.733rem;
}

.content button {
    width: 2.667rem;
    height: 2.667rem;
    background-image: url(@/assets/images/image.png);
    background-size: cover;
}

.uller {
    margin-top: .533rem;
}
.uller .right {
    float: right;
}
.uller li {
    width: 10rem;
    height: 1.333rem;
    line-height: 1.333rem;
    padding-left: .64rem;
    background-color: #fff;
}

.uller li em {
    font-family: 'icomoon';
    display: inline-block;
    font-size: .587rem;
    color: #686872;
    margin-right: .16rem;
}
.uller .right::after {
    font-family: 'icomoon';
    content: '\e90f';
    font-size: .533rem;
}
</style>
