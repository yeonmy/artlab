<template>
  <div class="bg">
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
                <button onclick="javascript:window.history.go(-1)"></button>
            <em class="title1">登录/注册</em>
        </div>
        <div class="main">
            <form action="./index_main.html" target="_self">
                <ul>
                    <li class="bg_white">
                        <label for="inp1"><em>手机号 |</em><input type="tel" id="inp1"
                                placeholder="请输入手机号码"><button>获取验证码</button></label>
                    </li>
                    <li class="bg_white">
                        <label for="inp2"><em>验证码 |</em><input type="text" id="inp2" placeholder="请输入验证码"></label>
                    </li>
                    <li class="btn"><label for="sub"><input type="submit" id="sub" value="完成注册"></label></li>
                    <li class="agree"><input type="checkbox">我已阅读并同意 <a href="#">《用户协议》</a>和 <a
                            href="#">《隐私政策》</a>，未注册的手机号将在验证成功后自动注册。</li>
                </ul>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'loginIndex'
}
</script>

<style scoped>
/* 状态栏*/
.status_bar {
    background-color: transparent;
}

/*导航栏*/
.nav {
    background-color:transparent;
}
.bg {
    background: transparent url(@/assets/images/import2.png) no-repeat 0 0 fixed;
    background-size: cover;
    font-size: .373rem;
    color: #919191;
    position: fixed;
}
.main {
    margin-top: 5.333rem;
}
.bg_white {
    height: 1.92rem;
    background-color: #ffffff;
    text-align: center;
}
.bg_white label {
    display: inline-block;
    margin-top: .32rem;
    width: 8.72rem;
    height: 1.333rem;
    border-radius: .667rem;
    background-color: #f8f8f8;
    text-align: left;
}
.bg_white label em {
    height: 1.333rem;
    line-height: 1.333rem;
    margin-left: .267rem;
    padding-right: .16rem;
}
.bg_white label input {
    width: 4rem;
    background-color: #f8f8f8;
}
.bg_white button {
    color: #fff;
    background-color: #E7166B;
    width: 2.507rem;
    height: .827rem;
    border-radius: .4rem;
    margin-left: .267rem;
}
.btn {
    text-align: center;
    color: #fff;
    background-color: #E7166B;
    width: 3.253rem;
    height: 1.093rem;
    line-height: 1.093rem;
    border-radius: .533rem;
    margin-top: .693rem;
    margin-left: 3.387rem;
    font-size: .533rem;
}
#sub {
    border-radius: .533rem;
    background-color: transparent;
}
</style>
