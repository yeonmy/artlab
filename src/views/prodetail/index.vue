<template>
<div class="bg">
    <router-view></router-view>
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
            <button onclick="javascript:window.history.go(-1)"></button>
            <em class="title1">作品详情</em>
        </div>
        <div class="sider">
            <a href="">
                <div class="img" style="color: #e7166b;"></div>
                <div class="num" style="color: #e7166b;">1.3k</div>
            </a>
            <a href="">
                <div class="img" style="color: #e7166b;"></div>
                <div class="num" style="color: #e7166b;">814</div>
            </a>
            <a href="">
                <div class="img"></div>
                <div class="num">31</div>
            </a>
            <a href=""><img src="@/assets/images/comment.png" alt="" style="width: .64rem;">
                <div class="num">询价</div>
            </a>
        </div>
        <div class="work">
            <img class="img_bg" src="@/assets/image2/1 (1).png" alt="" style="opacity: 0.6 ;">
            <div class="work_main">
                <img src="@/assets/image2/1 (1).png" alt="" class="img_main">
            </div>
        </div>
        <div class="time">2023年3月5日 22:22发布</div>
        <div class="tit">追光的少女{{$route.query.id}}</div>
        <hr>
        <div class="brief">
            <div class="work_brief">简介</div>
            <div class="content" style="text-indent: 2em;">在自己的世界呆久了，相当于变相的画地为牢。拨开困扰你的叶子，或许就有一大片暖暖的阳光洒在你身上。</div>
            <div class="tag"><a href="">原创</a><a href="">人像</a><a href="">柳叶笔</a><a href="">OC</a></div>
        </div>
        <hr style="margin-top: .267rem;">
        <div class="author">
            <div class="head">作者</div>
            <a class="body" style="color: #686872;">
                <img src="@/assets/images/portrait.png" alt="" style="width: 1.253rem;float: left;">
                <div class="name">向野的野象 <img src="@/assets/images/female.png" alt=""></div>
                <div class="bottom">37件作品 <em>9.3k粉丝</em></div>
                <button>关注</button>
            </a>
        </div>
        <hr>
        <div class="comments">
            <div class="comments_head">
                <div class="left1">评论(31)</div>
                <div class="right1">
                    <select name="" id="">
                        <option value="">按热度</option>
                        <option value="">最新</option>
                    </select>
                </div>
            </div>
            <div class="comment">
                <div class="head">
                    <img src="@/assets/image3/Ellipse_160-3.png" alt="" style="width: 1.253rem;float: left;">
                    <div class="name">雅丽</div>
                    <div class="timer">3月6号 15:54</div>
                    <button>75</button>
                </div>
                <div class="body">
                    我真的很喜欢那种午后阳光暖暖洒在身上的感觉，这幅画让我想起了那种慵懒的午后。我吹爆~
                </div>
            </div>
            <div class="comment">
                <div class="head">
                    <img src="@/assets/image3/Ellipse_160-3.png" alt="" style="width: 1.253rem;float: left;">
                    <div class="name">雅丽</div>
                    <div class="timer">3月6号 15:54</div>
                    <button>75</button>
                </div>
                <div class="body">
                    我真的很喜欢那种午后阳光暖暖洒在身上的感觉，这幅画让我想起了那种慵懒的午后。我吹爆~
                </div>
            </div>
            <div class="comment">
                <div class="head">
                    <img src="@/assets/image3/Ellipse_160-3.png" alt="" style="width: 1.253rem;float: left;">
                    <div class="name">雅丽</div>
                    <div class="timer">3月6号 15:54</div>
                    <button>75</button>
                </div>
                <div class="body">
                    我真的很喜欢那种午后阳光暖暖洒在身上的感觉，这幅画让我想起了那种慵懒的午后。我吹爆~
                </div>
            </div>
            <div class="comment">
                <div class="head">
                    <img src="@/assets/image3/Ellipse_160-3.png" alt="" style="width: 1.253rem;float: left;">
                    <div class="name">雅丽</div>
                    <div class="timer">3月6号 15:54</div>
                    <button>75</button>
                </div>
                <div class="body">
                    我真的很喜欢那种午后阳光暖暖洒在身上的感觉，这幅画让我想起了那种慵懒的午后。我吹爆~
                </div>
            </div>
            <div class="comment">
                <div class="head">
                    <img src="@/assets/image3/Ellipse_160-3.png" alt="" style="width: 1.253rem;float: left;">
                    <div class="name">雅丽</div>
                    <div class="timer">3月6号 15:54</div>
                    <button>75</button>
                </div>
                <div class="body">
                    我真的很喜欢那种午后阳光暖暖洒在身上的感觉，这幅画让我想起了那种慵懒的午后。我吹爆~
                </div>
            </div>
            <div class="comment">
                <div class="head">
                    <img src="@/assets/image3/Ellipse_160-3.png" alt="" style="width: 1.253rem;float: left;">
                    <div class="name">雅丽</div>
                    <div class="timer">3月6号 15:54</div>
                    <button>75</button>
                </div>
                <div class="body">
                    我真的很喜欢那种午后阳光暖暖洒在身上的感觉，这幅画让我想起了那种慵懒的午后。我吹爆~
                </div>
            </div><div class="comment">
                <div class="head">
                    <img src="@/assets/image3/Ellipse_160-3.png" alt="" style="width: 1.253rem;float: left;">
                    <div class="name">雅丽</div>
                    <div class="timer">3月6号 15:54</div>
                    <button>75</button>
                </div>
                <div class="body">
                    我真的很喜欢那种午后阳光暖暖洒在身上的感觉，这幅画让我想起了那种慵懒的午后。我吹爆~
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'prodetailIndex'
}
</script>

<style scoped>
/* work样式*/
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

/* sider侧边栏样式*/
.sider {
    width: 1.067rem;
    height: 5.547rem;
    background-color: #dcdcdcc0;
    border-radius: .133rem;
    position: fixed;
    top: 3.92rem;
    left: 8.293rem;
    z-index: 11;
    text-align: center;
}
.sider a .img {
    font-size: .64rem;
    font-family: 'icomoon';
    color: #686872;
}
.sider a .num {
    color: #686872;
    font-size: .267rem;
}
.bg {
    height: 37.333rem;
}

/*time*/
.time {
    height: .48rem;
    float: right;
    margin-right: .64rem;
    font-size: .32rem;
}

/*tit*/
.tit {
    width: 10rem;
    text-align: center;
    font-size: .587rem;
    color: #111118;
    margin-top: .667rem;
}

hr {
    margin: .16rem .64rem;
    width: 8.72rem;
}

/* brief 样式*/
.brief {
    width: 8.72rem;
    margin: auto;
    height: 2.88rem;
}
.brief .work_brief {
    width: 1.6rem;
    height: .48rem;
    background-color: #f996be;
    color: #fff;
    font-size: .267rem;
    text-align: center;
}
.brief .content {
    font-size: .373rem;
    text-indent: 2em;
}
.brief .tag a {
    float: left;
    height: .533rem;
    border-radius: .267rem;
    padding: .053rem .213rem;
    color: #686872;
    background-color: #e3e3ec;
    font-size: .267rem;
    margin-right: .427rem;
}

/* author样式 */
.author {
    width: 8.72rem;
    margin: auto;
}
.author .head {
    width: 1.067rem;
    height: .48rem;
    background-color: #f996be;
    color: #fff;
    font-size: .267rem;
    text-align: center;
    margin-bottom: .16rem;
}

.author .body .name img {
    width: .347rem;
}
.author .body .name {
    color: #111118;
    margin-left: 1.6rem;
    width: 4.267rem;
}
.author .body .bottom {
    font-size: .267rem;
    margin-left: 1.6rem;
    width: 4.267rem;
}
.author .body .bottom em {
    height: .427rem;
    background-color: #32c29a;
    padding: .08rem .32rem;
    border-radius: .213rem;
    color: #fff;
}
.author .body button {
    float: right;
    height: .667rem;
    background-color: #e7166b;
    color: #fff;
    padding: 0 .267rem;
    margin-top: -0.907rem;
    border-radius: .6rem;
}
.author .body button::before {
   content:'\e922';
   font-family: 'icomoon';
}

/* comments样式 */
.comments {
    width: 8.72rem;
    margin: auto;
}
.comments .comments_head {
    height: .8rem;
}
.comments .comments_head .left1 {
    float: left;
    padding: 0 .267rem;
    height: .48rem;
    background-color: #f996be;
    color: #fff;
    font-size: .267rem;
    text-align: center;
    margin-bottom: .16rem;
}
.comments .comments_head .right1 {
    float: right;
    margin-right: .107rem;
}
.comments .comment .head .name{
    color: #111118;
    margin-left: 1.6rem;
    width: 4.267rem;
}
.comments .comment .head .timer{
    width: 4.267rem;
    margin-left: 1.6rem;
    font-size: .32rem;
}
.comments .comment .head button::before{
    color:#e7166b;
    content:'\e91b';
    font-family: 'icomoon';
}
.comments .comment .head button {
    float: right;
    margin-top: -0.907rem;
    color:#e7166b;
    background-color: transparent;
}
.comments .comment .body {
    text-indent: 2em;
    margin-top: .267rem;
    font-size: .373rem;
    margin-bottom: .667rem;
}
</style>
