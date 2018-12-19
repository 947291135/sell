<template>
  <div id="app">
    <Header :seller='sellen.seller'></Header>
    <tab></tab>
    <Shopcart :deliveryPrice='seller.deliveryPrice' :minPrice='seller.minPrice'></Shopcart>
    <router-view :seller='seller' :ratings='ratings'/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Shopcart from './components/shopcart.vue'
import tab from './components/tab/Tab'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      sellen: {},
      commodity: [],
      seller: {},
      ratings: []
    }
  },
  components: {
    Header,
    tab,
    Shopcart
  },
  created () {
    var _this = this
    axios.get('/static/json/data.json', {
      id: '123'
    }).then(function (res) {
      _this.sellen = res.data
      _this.seller = _this.sellen.seller
      _this.ratings = res.data.ratings
      // console.log(_this.seller)
      _this.commodity = res.data.goods
    })
  }

}
</script>

<style lang="stylus">
*
  touch-action: none
body
  margin 0
  padding 0
  border 0
</style>
