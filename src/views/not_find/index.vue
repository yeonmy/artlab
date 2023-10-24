<template>
  <div class="bg">
    <div class="status_bar">
      <img src="@/assets/images/status_Bar.png" alt="" />
    </div>
    <div class="nav">
      <button onclick="javascript:window.history.go(-1)"></button>
      <em class="title1">提示</em>
    </div>
    <img class="bgimg" src="@/assets/images/import3.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'notFindIndex'
}
</script>

<style scoped>
.status_bar {
    background-color: #fff;
}
.nav {
    background-color: #fff;
}
.bgimg {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
