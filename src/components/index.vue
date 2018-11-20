<template>
  <div class="hello">
      <Header></Header>
  </div>
</template>

<script>
import Header from './header/header'
export default {
  name: 'HelloWorld',
  components: {
    Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
a
  color: #42b983;
</style>
