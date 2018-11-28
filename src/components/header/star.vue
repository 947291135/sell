<template>
    <div class="star">
        <span v-for="(itemClass , index) in itemClasses" class="star_item" :class="itemClass" :key="index"></span>
    </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
export default {
  // 评分星星组件
  name: 'Star',
  props: {
    starLength: {
      type: Number,
      default: 0
    }
  },
  computed: {
    itemClasses () {
      let arr = [] // 建立空数组
      let integer = Math.floor(this.starLength)
      for (let i = 0; i <= LENGTH; i++) {
        if (i < integer) {
          arr.push(CLS_ON)
        } else if (i > integer && i === integer + 1 && this.starLength % 1 !== 0) {
          arr.push(CLS_HALF)
        } else if (i > integer && arr.length < LENGTH) {
          arr.push(CLS_OFF)
        }
      }
      //   if (this.starLength % 1 !== 0) {
      //     arr.push(CLS_HALF)
      //   }

      //   while (arr.length < LENGTH) {
      //     arr.push(CLS_OFF)
      //   }
      return arr
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/stylus/mixin.styl'
    .star
        font-size 0
        .star_item
            display inline-block
            background-repeat no-repeat
            width .4rem
            height .4rem
            background-size .4rem .4rem
            margin-right .44rem
            &:last-child
                margin-right 0
            &.on
                bg-image('~@/assets/img/star48_on')
            &.half
                bg-image('~@/assets/img/star48_half')
            &.off
                bg-image('~@/assets/img/star48_off')
</style>
