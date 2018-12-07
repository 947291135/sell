<template>
    <div class="cartcontrol">
      <transition>
        <div class="cart_decrease" v-show='item>0' @click="decrease">
          <span class="iconfont">&#xe712;</span>
        </div>
      </transition>
      <transition>
        <div class="cart_count" v-show='item>0'>{{item}}</div>
      </transition>
      <div class="cart_add" @click="add"  transition='move'>
        <span class="iconfont">&#xe6e0;</span>
      </div>
    </div>
</template>

<script>
// 产品加减号组件
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Cartcontrol',
  data () {
    return {
      item: 0
    }
  },
  props: {
    foods: {
      type: Object
    }
  },
  mounted () {
    for (const iterator of this.selectFoods) {
      if (iterator.name === this.foods.name) {
        this.item = iterator.count
      }
    }
  },
  methods: {
    add: function () {
      this.foodesClocke({name: this.foods.name, price: this.foods.price})
      this.foodesPrice({name: this.foods.name, price: this.foods.price})
      this.item++
    },
    decrease: function () {
      this.foodesDecrease({name: this.foods.name, price: this.foods.price})
      this.foodesPrice()
      this.item--
    },
    ...mapMutations(['foodesClocke', 'foodesPrice', 'foodesDecrease'])
  },
  watch: {
  },
  computed: {
    ...mapState(['selectFoods'])
  }
}
</script>

<style lang="stylus" scoped>
  .cartcontrol
    font-size 0
    .cart_decrease
      display inline-block
      padding .12rem
      line-height .32rem
      font-size .32rem
      color rgb(0,160,220)
      &.v-enter-active,&.v-leave-active
        transition: all .3s linear
      &.v-enter,&.v-leave-to
        transform translate3d(0,0,0)
        opacity 0
    .cart_count
      display inline-block
      width .24rem
      padding-top .12rem
      line-height: 0.32rem;
      font-size: 0.2rem;
      vertical-align top
      text-align center
      color  rgb(147,153,159)
      &.v-enter-active,&.v-leave-active
        transition: all .3s linear
      &.v-enter,&.v-leave-to
        transform translate3d(0,0,0)
        opacity 0
    .cart_add
      display inline-block
      padding .12rem
      line-height .32rem
      font-size .32rem
      color rgb(0,160,220)
</style>
