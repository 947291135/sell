<template>
  <div id="app">
    <Header></Header>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import tab from './components/tab/Tab'
export default {
  name: 'App',
  components: {
    Header,
    tab
  }
}
</script>

<style lang="stylus">
body
  margin 0
  padding 0
  border 0
</style>
