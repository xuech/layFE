<template>
  <div class="layui-container flex">
<<<<<<< HEAD
    <img src="../../src/assets/img/icon-404.png" width="100px" alt />
=======
    <img src="../assets/img/icon-404.png" width="100px" alt />
>>>>>>> bd17cc6341c18399f9ce555cada5dfd8bce9b3e6
    <p>找不到页面了</p>
    <router-link class="layui-btn" to="/">回到首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'notfound'
}
</script>

<style lang="scss" scoped>
.flex {
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

p {
  padding-bottom: 15px;
  padding-top: 10px;
  color: #ddd;
}
</style>
