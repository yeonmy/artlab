<template>
  <div class="bg">
    <!--路由出口-->
    <router-view></router-view>
    <div class="toolbar">
            <div class="index_bar"><router-link to="/home" ><div class="img"></div>
                    <p>首页</p>
            </router-link></div>
            <div class="category_bar"><router-link to="/category" ><div class="img"></div>
                    <p>分类</p>
                </router-link></div>
            <div class="create"><router-link to="/create" ><img src="@/assets/images/create.png" alt="">
                    <p>创建</p>
                </router-link></div>
            <div class="message"><router-link to="/messages" ><div class="img"></div>
                    <p>消息</p>
                </router-link></div>
            <div class="user"><router-link to="/user" ><div class="img"></div>
                    <p>我的</p>
                </router-link></div>
        </div>
        <div class="toolbar_bg"></div>
  </div>
</template>

<script>
export default {
  name: 'layoutIndex'
}
</script>

<style>

</style>
