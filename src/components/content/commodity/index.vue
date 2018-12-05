<template>
    <div class="commodity">
       <div class="list">
          <List :commodity='commodity' @listClick='listClick' :scrollItem='scrollItem'></List>
       </div>
       <div class="content">
          <Content :foodes='commodity' :listdata='listdata' @scrollitem='scrollitem'></Content>
       </div>
    </div>
</template>

<script>
import List from './component/list.vue'
import Content from './component/content.vue'
import axios from 'axios'
export default {
  name: 'Commodity',
  data () {
    return {
      commodity: [],
      listdata: '',
      scrollItem: 0
    }
  },
  methods: {
    listClick: function (data) {
      this.listdata = data
    },
    scrollitem: function (data) {
      this.scrollItem = data
    }
  },
  components: {
    List,
    Content
  },
  created () {
    var _this = this
    axios.get('/static/json/data.json', {
      id: '123'
    }).then(function (res) {
      _this.commodity = res.data.goods
    })
  }
}
</script>

<style lang="stylus" scoped>
  .commodity
    position absolute
    top 3.47rem
    bottom .96rem
    left 0
    width 100%
    display flex
    overflow hidden
    .list
      flex 0 1 1.6rem
      background #f3f5f7
      position relative
      overflow hidden
    .content
      position relative
      flex 1
</style>
