<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="bg">
    <div class="status_bar">
      <img src="@/assets/images/status_Bar.png" alt="" />
    </div>
    <div class="nav">
      <form action="" target="">
        <label for="search"
          ><button type="button" @click="goSearch()"></button
          ><input type="text" id="search" placeholder="搜索作者或画作"
        /></label>
      </form>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#e7166b">
      <van-swipe-item><img src="@/assets/banner/banner1.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner/banner2.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner/banner3.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner/banner4.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner/banner5.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner/banner6.png" alt=""></van-swipe-item>
    </van-swipe>
    <div class="head">
      <ul>
        <li class="before">
          <router-link to="/daily_recommed"
            ><img src="@/assets/images/like.png" alt="" />
            <p>每日推荐</p>
          </router-link>
        </li>
        <li>
          <router-link to="/hot"
            ><img src="@/assets/images/hot.png" alt="" />
            <p>热榜</p>
          </router-link>
        </li>
        <li>
          <a href=""
            ><img src="@/assets/images/new.png" alt="" />
            <p>新作榜</p>
          </a>
        </li>
        <li>
          <a href=""
            ><img src="@/assets/images/collect.png" alt="" />
            <p>收藏榜</p>
          </a>
        </li>
        <li class="after">
          <a href=""
            ><img src="@/assets/images/cooperate.png" alt="" />
            <p>交友广场</p>
          </a>
        </li>
      </ul>
    </div>
    <hr />
    <div class="work_body">
        <li v-for="item in workList" :key="item.id">
            <a href="">
              <img :src="item.imgUrl" alt="" />
              <div class="title">
                {{ item.workName }}
                <div class="like">
                <img src="@/assets/images/love.png" alt="" />{{ item.likes }}
              </div>
            </div>
          </a>
        </li>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'messagesIndex',
  data () {
    return {
    }
  },
  methods: {
    goDaily () {
      this.$router.push({
        path: '/daily_recommed'
      })
    },
    goSearch () {
      this.$router.push({
        path: '/search'
      })
    }
  },
  computed: {
    ...mapState('home', ['workList'])
  }
}
</script>

<style lang="less" scoped>
/*导航栏样式*/
.nav label {
  display: inline-block;
  width: 8.72rem;
  height: 1.067rem;
  border-radius: 0.533rem;
  background-color: #e3e3ec;
  font-size: 0.373rem;
}
.nav label button {
  background: transparent;
  width: 0.427rem;
  margin-left: 0.64rem;
  line-height: 1.067rem;
}
.nav label input {
  height: 1.067rem;
  width: 7.333rem;
  float: right;
  border-radius: 0 0.533rem 0.533rem 0;
  background-color: transparent;
}
/* 轮播图 */
.my-swipe {
  height: 4.8rem;
  margin: 2.347rem 0 1.867rem 0;
}
.my-swipe .van-swipe-item {
  height: 4.8rem;
  text-align: center;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
/*head样式*/
.head {
  width: 8.72rem;
  height: 2rem;
  background-color: #ffffff;
  margin-top: -2.1rem;
  margin-left: 0.64rem;
  border-radius: 0.267rem;
}
.head ul li {
  display: inline-block;
  margin: 0.107rem 0;
  text-align: center;
  width: 1.72rem;
}
.head ul .before {
  margin-left: 0;
}
.head ul .after {
  margin-right: 0;
}
.head ul li img {
  width: 1.28rem;
}
.head ul li p {
  font-size: 0.373rem;
  color: #111118;
}

/*hr*/
hr {
  width: 8.72rem;
  margin: 0.213rem 0.64rem;
}
</style>
