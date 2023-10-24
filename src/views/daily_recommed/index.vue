<template>
  <div class="bg">
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
                <button onclick="javascript:window.history.go(-1)"></button>
            <em class="title1">每日推荐</em>
        </div>
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
  name: 'daliyIndex',
  computed: {
    ...mapState('home', ['workList'])
  }
}
</script>

<style scoped>
/*work_body样式*/
.work_body {
    padding-top: 2.347rem;
}
</style>
