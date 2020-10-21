<template>
  <div>
    <div class="fly-panel fly-column">
      <div class="layui-container">
        <ul class="layui-clear">
          <router-link tag="li" to="/" class="layui-hide-xs">
            <a href="/">首页</a>
          </router-link>
          <router-link v-for="(item,index) in lists" :key="'panel'+ index" tag="li" :to="item.path">
            <a href="jie/index.html">
              {{item.name}}
              <span class="layui-badge-dot" v-if="item.isNew"></span>
            </a>
          </router-link>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
            <span class="line"></span>
          </li>
          <template v-if="isLogin">
            <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
              <a href></a>我发表的贴
            </li>
            <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
              <a href></a>我收藏的贴
            </li>
          </template>
        </ul>
        <div class="right layui-hide-xs">
          <span class="layui-icon layui-icon-search"></span>
          <a href class="layui-btn">发表新贴</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pannel',
  components: {

  },
  data () {
    return {
      lists: [
        {
          name: '提问',
          path: '/index/ask',
          isNew: false
        },
        {
          name: '分享',
          path: '/index/share',
          isNew: true
        },
        {
          name: '讨论',
          path: '/index/discuss',
          isNew: false
        },
        {
          name: '建议',
          path: '/index/advise',
          isNew: false
        },
        {
          name: '公告',
          path: '/index/notice',
          isNew: false
        },
        {
          name: '动态',
          path: '/index/logs',
          isNew: false
        }
      ],
      isLogin: this.$store.state.isLogin
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 786px) {
  .panel {
    height: auto !important;
  }
  ul {
    li {
      width: 33.3%;
    }
  }
}
.panel {
  height: 50px;
  line-height: 50px;
  margin-bottom: 15px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba($color: #000000, $alpha: 0.05);
}

ul {
  li {
    display: inline-block;
    a {
      padding: 0 20px;
    }
    .line {
      display: inline-block;
      height: 10px;
      width: 1px;
      background: #e2e2e2;
      margin: 0 20px;
      vertical-align: middle;
    }
  }
}
.right {
  position: absolute;
  right: 0;
  top: 0;
  .layui-icon-search {
    margin-right: 10px;
    font-size: 20px;
    &:hove {
      color: #501235;
    }
  }
}
</style>
