<template>
  <div class="bg">
        <div class="status_bar">
            <img src="@/assets/images/status_Bar.png" alt="">
        </div>
        <div class="nav">
        <em class="title1" style="margin-left: 2.133rem;">分类</em>
        <a href="">添加标签</a>
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
  name: 'categoryIndex',
  computed: {
    ...mapState('home', ['workList'])
  }
}
</script>

<style scoped>
/*nav样式*/
.nav a{
    float: right;
    height: 1.173rem;
    line-height: 1.173rem;
    font-size: .427rem;
    color: #919191;
}
.nav a::after {
    font-family: 'icomoon';
    content:"\e90f";
}

/* work_body样式 */
.work_body {
    margin-top: 2.347rem;
}
</style>
