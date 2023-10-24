<template>
  <div class="bg">
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
            <button onclick="javascript:window.history.go(-1)"></button>
            <em class="title1">上传作品</em>
            <button class="sub">发布</button>
        </div>
        <div class="work">
            <img class="img_bg" src="@/assets/image2/1 (26).png" alt="" style="opacity: 0.6 ;">
            <div class="work_main">
                <img src="@/assets/image2/1 (26).png" alt="" class="img_main">
            </div>
        </div>
        <div class="body">
            <button></button>
            <ul>
                <li>
                    <label for=""><em>作品名</em><input type="text" placeholder="不得超过十五个字" class="work_name"></label>
                </li>
                <li>
                    <em>标签</em> <div class="tag">添加标签</div>
                </li>
                <li style="height: 4.133rem;">
                    <em>简介</em>
                    <textarea name="" id="" cols="40" rows="2" placeholder="撰写内容(一百字以内)"></textarea>
                </li>
                <li>
                    <em>开启版权交易</em> <input type="checkbox" class="checkbox1">
                </li>
                <li>
                    <em>使用权授权</em> <input type="checkbox" class="checkbox1">
                </li>
                <li>
                    <em>是否禁止截屏</em> <input type="checkbox" class="checkbox1">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'uploadIndex'
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

/* work样式 */
.work {
    width: 10rem;
    height: 8.693rem;
    margin-top: 2.347rem;
    background-color: transparent;
    text-align: center;
    position: relative;
}
.work .img_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: blur(8px);
}
.work .work_main img{
    position: relative;
    height: 7.627rem;
    margin-top: .533rem;
    box-shadow: 0 .16rem 6px 4px #242424b9;
}

/* body 样式 */
.body button {
    background: transparent url(@/assets/images/re_upload.png);
    background-position: center;
    background-size: cover;
    width: .853rem;
    height: .853rem;
    float:right;
    margin-top: -1.333rem;
    margin-right: .64rem;
}

.body ul {
    padding: 0 .64rem;
}
.body ul li {
    width: 8.72rem;
    height: 1.333rem;
    line-height: 1.333rem;
    border-bottom: 1px solid #e3e3ec;
}
.body ul li  em{
    color: #111118;
    font-weight: bold;
}
.body ul li .work_name {
    margin-right: 0;
    width: 7.2rem;
    background-color: transparent;
}
.body ul li .work_name::placeholder {
    font-size: .373rem;
    font-weight: normal;
    color: #919191;
    float: right;
    margin-top: .4rem;
}

.body ul li .tag{
    float: right;
}
.body ul li .tag::after{
    font-family: 'icomoon';
    content: '\e90f';
}

.body ul li textarea{
    border: none;
    border-radius: 15px;
    width: 8.72rem;
}

.body ul li .checkbox1{
    float: right;
    margin-top: .533rem;
}
</style>
