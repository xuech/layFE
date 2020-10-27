<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinHelp">说明</a>
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinTop">
        活跃榜<span class="layui-badge-dot"></span>
      </a>
      <span class="fly-signin-days" v-show="isSign || isLogin">
        已连续签到<cite>{{ count }}</cite>天
      </span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <template v-if="!isSign">
        <button class="layui-btn layui-btn-danger" id="LAY_signin" @click="signEvent()">今日签到</button>
        <span>
          可获得
          <cite>{{favs}}</cite>飞吻
        </span>
      </template>
      <!-- 已签到状态 -->
      <template v-else>
        <button class="layui-btn layui-btn-disabled">{{msg}}</button>
        <span>
          获得了
          <cite>{{favs}}</cite>飞吻
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import { userSign } from '@/api/user'

export default {
  name: 'sign',
  data () {
    return {
      isSign: false,
      msg: '今日已签到'
    }
  },
  methods: {
    signEvent () {
      //1、如果未登录先登录
      if (!this.isLogin) {
        this.$pop('shake', '请先登录')
        return
      }
      userSign().then((res) => {
        if (res.code === 200) {
          this.isSign = true
          this.updateUserInfo(res)
          this.$pop('', '签到成功！')
        } else {
          this.$pop('', '您已经签到！')
        }
      })
    },
    updateUserInfo (data) {
      let user = this.$store.state.userInfo
      user.favs = data.favs
      user.count = data.count
      user.isSign = true
      this.$store.commit('setUserInfo', user)
    }

  },
  mounted () {
    this.isSign = this.$store.state.userInfo.isSign
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    ///连续签到天数
    count () {
      if (this.$store.state.userInfo !== {}) {
        if (typeof this.$store.state.userInfo.count !== 'undefined') {
          return this.$store.state.userInfo.count
        } else {
          return 0
        }
      } else {
        return 0
      }
    },
    ///飞吻数
    favs () {
      let count = parseInt(this.count)
      let result = 0
      if (count < 5) {
        result = 5
      } else if (count >= 5 && count < 15) {
        result = 10
      } else if (count >= 15 && count < 30) {
        result = 15
      } else if (count >= 30 && count < 100) {
        result = 20
      } else if (count >= 100 && count < 365) {
        result = 30
      } else if (count >= 365) {
        result = 50
      }
      return result
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
