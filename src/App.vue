<template>
  <div id="app">
    <Header :seller='sellen.seller'></Header>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import tab from './components/tab/Tab'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      sellen: {}
    }
  },
  components: {
    Header,
    tab
  },
  created () {
    var _this = this
    axios.get('/static/json/data.json', {
      id: '123'
    }).then(function (res) {
      _this.sellen = res.data
      console.log(res.data)
    })
  }

}
</script>

<style lang="stylus">
body
  margin 0
  padding 0
  border 0
</style>
