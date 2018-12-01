<template>
    <div class="commodity">
       <div class="list">
          <List :commodity='commodity'></List>
       </div>
       <div class="content">
          <Content :foodes='commodity'></Content>
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
      commodity: []
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
    bottom 1.16rem
    left 0
    width 100%
    display flex
    overflow hidden
    .list
      flex 0 1 1.6rem
      background #f3f5f7
      position relative
    .content
      position relative
      flex 1
</style>
