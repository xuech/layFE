<template>
  <div>
    <div class="fly-panel" style="margin-bottom:0">
      <div class="fly-panel-title fly-filter">
      <a :class="{'layui-this': status ==='' && tag === ''}" @click.prevent="search()">综合</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '0'}" @click.prevent="search(0)">未结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '1'}" @click.prevent="search(1)">已结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '' && tag === '精华'}" @click.prevent="search(2)">精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a :class="{'layui-this': sort === 'created'}" @click.prevent="search(3)">按最新</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': sort === 'answer'}" @click.prevent="search(4)">按热议</a>
      </span>
      </div>
      <list-item :lists="lists" :isEnd="isEnd" @nextpage="nextPage()"></list-item>
    </div>
  </div>
</template>

<script>
import ListItem from './LayListItem'
import { getList } from '@/api/content'

export default {
  name: 'list',
  components: {
    ListItem
  },
  data () {
    return {
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: '',
      isEnd: false,
      isRepeat: false,
      current: '',
      lists: [{
        uid: 'xuech',
        isVip:1,
        title:'tititiit',
        content: 'ksdad',
        created: '2020-10-24 10:21:23',
        fav: 40,
        isEnd: 0,
        reads: 10,
        answer: 3,
        status: 0,
        isTop: 0,
        tags: [{
          name:'精华',
          class: 'layui-bg-red'
        },{
          name:'冷门',
          class: 'layui-bg-blue'
        }]
      }]
    }
  },
  methods: {
    _getLists () {
      if (this.isEnd) {
        return
      }
      if (this.isRepeat) {
        return
      }
      this.isRepeat = true
      let options = {
        catalog: this.catalog,
        isTop: this.isTop,
        page: this.page,
        limit: this.limit,
        sort: this.sort,
        tag: this.tag,
        status: this.status
      }
      getList(options).then((res) =>{
        // 加入一个请求锁，防止用户多次点击，等待数据返回后，再打开
        this.isRepeat = false
        // 对于异常的判断，res.code 非200，我们给用户一个提示
        // 判断是否lists长度为0，如果为零即可以直接赋值
        // 当Lists长度不为0，后面请求的数据，加入到Lists里面来
        if (res.code === 200) {
          // 判断res.data的长度，如果小于20条，则是最后页
          if (res.data.length < this.limit) {
            this.isEnd = true
          }
          if (this.lists.length === 0) {
            this.lists = res.data
          } else {
            this.lists = this.lists.concat(res.data)
          }
          this.page++
        }
      }).catch((err) => {
        this.isRepeat = false
        if (err) {
          this.$alert(err.message)
        }
      })
    },
    nextPage() {
      this._getLists()
    },
    search (val) {
      if (typeof val === 'undefined' && this.current === '') {
        return
      }
      this.current = val
      switch (val) {
        // 未结贴
        case 0:
          this.status = '0'
          this.tag = ''
          break
        // 已结贴
        case 1:
          this.status = '1'
          this.tag = ''
          break
        // 查询"精华"标签
        case 2:
          this.status = ''
          this.tag = '精华'
          break
        // 按照时间去查询
        case 3:
          this.sort = 'created'
          break
        // 按照评论数去查询
        case 4:
          this.sort = 'answer'
          break
        // 综合查询
        default:
          this.status = ''
          this.tag = ''
          this.current = ''
      }
    }
  },
  mounted() {
    this._getLists()
  }
}
</script>

<style lang="sass" scoped>
</style>