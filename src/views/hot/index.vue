<template>
    <div class="bg">
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
            <button onclick="javascript:window.history.go(-1)"></button>
            <em class="title1">热榜</em>
        </div>
        <div class="main">
            <a href="./work.html?id=21">
                <div class="item">
                    <div class="left">
                        <div class="img_main">
                            <img src="@/assets/image2/1 (21).png" alt="">
                            <div class="no">No.1 <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="author">
                            <div class="head">作者</div>
                            <a class="body" style="color: #686872;">
                                <img src="@/assets/images/portrait.png" alt="" style="width: 1.253rem;float: left;">
                                <div class="name">向野的野象 <img src="@/assets/images/female.png" alt=""></div>
                                <div class="bottom">37件作品 <em>9.3k粉丝</em></div>
                            </a>
                        </div>
                        <div class="title">迎光而来</div>
                        <div class="content">在自己的世界呆久了，相当于变相的画地为牢。拨开困扰你的叶子，或许就有一大片暖暖的阳光洒在你身上。</div>
                    </div>
                </div>
            </a>
            <a href="./work.html?id=32">
                <div class="item">
                    <div class="left">
                        <div class="img_main">
                            <img src="@/assets/image2/1 (30).png" alt="">
                            <div class="no">No.2 <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="author">
                            <div class="head">作者</div>
                            <a class="body" style="color: #686872;">
                                <img src="@/assets/images/portrait.png" alt="" style="width: 1.253rem;float: left;">
                                <div class="name">向野的野象 <img src="@/assets/images/female.png" alt=""></div>
                                <div class="bottom">37件作品 <em>9.3k粉丝</em></div>
                            </a>
                        </div>
                        <div class="title">迎光而来</div>
                        <div class="content">在自己的世界呆久了，相当于变相的画地为牢。拨开困扰你的叶子，或许就有一大片暖暖的阳光洒在你身上。</div>
                    </div>
                </div>
            </a>
            <a href="./work.html?id=15">
                <div class="item">
                    <div class="left">
                        <div class="img_main">
                            <img src="@/assets/image2/1 (15).png" alt="">
                            <div class="no">No.3 <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="author">
                            <div class="head">作者</div>
                            <a class="body" style="color: #686872;">
                                <img src="@/assets/images/portrait.png" alt="" style="width: 1.253rem;float: left;">
                                <div class="name">向野的野象 <img src="@/assets/images/female.png" alt=""></div>
                                <div class="bottom">37件作品 <em>9.3k粉丝</em></div>
                            </a>
                        </div>
                        <div class="title">迎光而来</div>
                        <div class="content">在自己的世界呆久了，相当于变相的画地为牢。拨开困扰你的叶子，或许就有一大片暖暖的阳光洒在你身上。</div>
                    </div>
                </div>
            </a>
            <a href="./work.html?id=40">
                <div class="item">
                    <div class="left">
                        <div class="img_main">
                            <img src="@/assets/image2/1 (20).png" alt="">
                            <div class="no">No.4 <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="author">
                            <div class="head">作者</div>
                            <a class="body" style="color: #686872;">
                                <img src="@/assets/images/portrait.png" alt="" style="width: 1.253rem;float: left;">
                                <div class="name">向野的野象 <img src="@/assets/images/female.png" alt=""></div>
                                <div class="bottom">37件作品 <em>9.3k粉丝</em></div>
                            </a>
                        </div>
                        <div class="title">迎光而来</div>
                        <div class="content">在自己的世界呆久了，相当于变相的画地为牢。拨开困扰你的叶子，或许就有一大片暖暖的阳光洒在你身上。</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hotIndex'
}
</script>

<style scoped>
/* main left 样式*/
.main {
    margin-top: 2.347rem;
}
.item {
    width: 8.72rem;
    height: 5.333rem;
    margin-left: .64rem;
    margin-bottom: .533rem;
    box-shadow: 0 4px 3px 1px #5a5a5a2e;
    border-radius: .533rem;
    background-color: #fff;
}
.item .left {
    position: relative;
    float: left;
}
.item .img_main {
    width: 3.813rem;
    height: 4.693rem;
    margin-left: .48rem;
    margin-top: .32rem;
    box-shadow: 0 4px 3px 2px #8b8b8b4b;
    overflow: hidden;
}
.item .img_main img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item .img_main .no {
    width: 1.28rem;
    height: .533rem;
    background-image:url(@/assets/images/NO..png);
    background-position: center;
    background-size: cover;
    position: absolute;
    top: .64rem;
    left: .32rem;
    padding-left: .133rem;
    color: #fff;
    font-size: .32rem;
    border-radius: .08rem;
}

/* right author样式 */
.right {
    margin-left: 4.453rem;
    width: 4.267rem;
    padding-top: .107rem;
}
.right .author {
    width: 4.4rem;
    margin-top: .32rem;
    margin-bottom: .267rem;
}
.right .author .head {
    width: 1.067rem;
    height: .48rem;
    background-color: #f996be;
    color: #fff;
    font-size: .267rem;
    text-align: center;
    margin-bottom: .16rem;
}

.right .author .body .name img {
    width: .347rem;
}
.right .author .body .name {
    color: #111118;
    margin-left: 1.6rem;
    width: 4.267rem;
}
.right .author .body .bottom {
    font-size: .267rem;
    margin-left: 1.6rem;
    width: 4.267rem;
}
.right .author .body .bottom em {
    height: .427rem;
    background-color: #32c29a;
    padding: .08rem;
    border-radius: .213rem;
    color: #fff;
}
/* right title样式 */
.right .title {
    font-size: .587rem;
    text-align: center;
    color: #111118;
}
.right .content {
    display: inline-block;
    font-size: .32rem;
    text-indent: 2em;
    color: #686872;
}
</style>
