<template>
    <div class="bg">
    <div class="status_bar">
      <img src="@/assets/images/status_Bar.png" alt="" />
    </div>
    <div class="create_main">
      <ul>
        <li style="font-size: 1.6rem; font-family: Arial; font-weight: bolder">
          create
        </li>
        <li>
          <router-link to="/upload_works"><button>上传作品</button></router-link>
        </li>
        <li>
          <router-link to="/post_updates"><button>发表动态</button></router-link>
        </li>
      </ul>
    </div>
    <div class="create_bg1"></div>
    <div class="create_bg2"></div>
  </div>
</template>

<script>
export default {
  name: 'createIndex'
}
</script>

<style scoped>
.bg {
  background: transparent url(@/assets/images/create1.png) no-repeat 0 0 fixed;
  background-size: cover;
  color: #919191;
  position: fixed;
}

.status_bar {
  background-color: #fff;
}

/*create主体样式*/
.create_main {
  margin: auto;
  margin-top: 8rem;
  height: 7.733rem;
  width: 7.093rem;
  text-align: center;
  border-radius: 1.067rem;
  background-color: #38383825;
  box-shadow: -0.267rem -0.267rem 40px 2px rgba(24, 41, 52, 0.758);
}

.create_main li {
  height: 2.293rem;
  color: #fff;
}

.create_main li a button {
  margin-top: 0.533rem;
  width: 5.2rem;
  height: 1.253rem;
  background-color: #ffffff;
  border-radius: 0.627rem;
  font-size: 0.533rem;
  color: #686872;
}

.create_bg1 {
  width: 1.333rem;
  height: 1.333rem;
  border-radius: 0.667rem;
  background-color: transparent;
  box-shadow: -0.133rem -0.133rem 20px 1px rgba(24, 41, 52, 0.721);
  margin-top: 0.4rem;
  margin-left: 2.933rem;
}
.create_bg2 {
  width: 0.533rem;
  height: 0.533rem;
  border-radius: 0.267rem;
  background-color: transparent;
  box-shadow: -0.133rem -0.133rem 20px 1px rgba(24, 41, 52, 0.792);
  margin: 0.267rem 4rem;
}
</style>
