<template>
  <div>
    <div class="fly-panel">
      <div class="fly-panel-title fly-filter">
        <a>置顶</a>
        <a
          href="#signin"
          class="layui-hide-sm layui-show-xs-block fly-right"
          id="LAY_goSignin"
          style="color: #FF5722;"
        >去签到</a>
      </div>
    </div>
    <ul class="fly-list">
      <li>
        <list-item />
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from './LayListItem'
export default {
  name: 'top',
  components: {
    ListItem
  },
  data () {
    return {
      isTop: 1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
