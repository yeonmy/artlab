<template>
  <div class="bg">
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
            <em class="title1" style="margin-left: 2.133rem;">消息</em>
            <a href=""><button></button></a>
        </div>
        <div class="messages_main">
            <ul>
                <li class="find_friends" style="height: 1.707rem;padding-top: .453rem;">
                    <a href="">
                        <div class="portrait" style="width: 1.253rem;"><img src="@/assets/images/icon-1.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">寻找朋友</div>
                        <div class="mess">搜索附近</div>

                    </a>
                </li>
                <li class="system">
                    <a href="">
                        <div class="portrait"><img src="@/assets/images/Official_news-2.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">系统消息</div>
                        <div class="mess">欢迎来到我们的应用系统</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160-2.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">雅丽</div>
                        <div class="mess">雅丽向您发送了一条询价信息</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160-3.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">向野的花</div>
                        <div class="mess">成交ok!</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="portrait"><img src="@/assets/image3/Ellipse_160.png" alt=""></div>
                        <div class="time">15:54</div>
                        <div class="user_name">Angel</div>
                        <div class="mess">可以了解一下最近的行情吗？</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'messagesIndex'
}
</script>

<style scoped>
/*nav样式*/
.nav a{
    float: right;
    font-size: .427rem;
    font-family: 'icomoon';
    color: #919191;
    margin-right: .64rem;
}

/*message主体样式*/
.messages_main {
    margin: auto;
    margin-top: 2.347rem;
    border-radius: .8rem;
    background-color: #fff;
}
.messages_main ul li {
    margin: .64rem auto;
    width: 8.72rem;
    height: 1.253rem;
}

.messages_main ul li .portrait {
    width: 1.253rem;
    float: left;
}
.messages_main ul li .portrait img {
    width: 100%;
}
.messages_main ul li .user_name {
    color: #111118;
}
.messages_main ul li .mess {
    font-size: .32rem;
    color: #919191;
}
.messages_main ul li .time {
     float: right;
     height: 1.253rem;
     line-height: 1.253rem;
     color: #919191;
}
</style>
