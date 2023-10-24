<template>
  <div class="bg">
    <div class="status_bar" style="background-color: transparent">
      <img src="@/assets/images/status_Bar.png" alt="" />
    </div>
    <div class="nav" style="background-color: transparent; color: #fff">
      <em class="title1" style="margin-left: 2.133rem">我的</em>
      <a href=""><button></button></a>
    </div>
    <div class="user_main">
      <div class="portrait">
        <img src="@/assets/images/picture.png" alt="" />
      </div>
      <div class="user_name" style="font-size: 0.64rem; color: #111118">
        向野的野象
      </div>
      <div class="user_id">
        <img src="@/assets/images/female.png" alt="" style="width: 0.32rem" />
        ID:230010
      </div>
      <div class="item1">
        <li>
          <a href="">
            <div class="num">104</div>
            <div class="content">关注</div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="num">1.3k</div>
            <div class="content">粉丝</div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="num">37</div>
            <div class="content">作品</div>
          </a>
        </li>
      </div>
      <div class="item2">
        <li class="current">
          <a href="" class="item2_current"> 作品 </a>
        </li>
        <li>
          <a href=""> 作品集 </a>
        </li>
        <li>
          <a href=""> 动态 </a>
        </li>
      </div>
      <div class="work_body">
        <li v-for="item in workList" :key="item.id">
          <router-link :to="`/prodetail?id=${item.id}`" active-class="active">
            <img :src="item.imgUrl" alt="" />
            <div class="title">
              {{ item.workName }}
              <div class="like">
                <img src="@/assets/images/love.png" alt="" />{{ item.likes }}
              </div>
            </div>
          </router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'userIndex',
  computed: {
    ...mapState('user', ['workList'])
  }
}
</script>

<style scoped>
/*body背景图片样式*/
.bg {
  background: transparent url(@/assets/images/user_bg.png) no-repeat 0 0 fixed;
  background-size: cover;
  font-size: 0.373rem;
  color: #919191;
  padding-top: 0.0625rem;
}
/*nav样式*/
.nav a {
  float: right;
  font-size: 0.427rem;
  font-family: "icomoon";
  color: #fff;
  margin-right: 0.64rem;
}

/*message主体样式*/
.user_main {
  margin: auto;
  margin-top: 3.467rem;
  border-radius: 0.8rem;
  background-color: #fff;
  height: 37.333rem;
  text-align: center;
}

.user_main .portrait img {
  width: 3.307rem;
  margin-top: -1.067rem;
}

.user_main .item1 {
  width: 8.72rem;
  margin: 0.267rem auto;
}
.user_main .item1 li {
  display: inline-block;
  width: 2.8rem;
  height: 1.6rem;
}
.user_main .item1 li .num {
  font-size: 0.587rem;
  color: #686872;
}
.user_main .item1 li .content {
  font-size: 0.427rem;
  color: #686872;
}

.user_main .item2 {
  width: 8.72rem;
  height: 1.067rem;
  margin: 0.133rem auto;
}
.user_main .item2 li {
  float: left;
  width: 1.6rem;
  height: 1.067rem;
}
.user_main .item2 li a {
  color: #686872;
  height: 1.067rem;
  line-height: 1.067rem;
}
.user_main .item2 .current {
  border-bottom: 3px solid #e7166b;
}
.user_main .item2 .item2_current {
  font-size: 0.533rem;
  color: #e7166b;
  font-weight: bold;
}
</style>
