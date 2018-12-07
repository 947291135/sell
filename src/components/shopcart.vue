<template>
  <div class="shopcart">
    <div class="content">
      <div class="content_left">
        <div class="logo_wrapper" :class="{active:this.selectFoods.length }">
          <div class="logo">
            <span class="iconfont">&#xe746;</span>
          </div>
          <i class="iconNumber">{{this.selectFoods.length}}</i>
        </div>
        <div class="price">{{this.price}}￥</div><div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content_right" :class="{active:this.price>=this.minPrice}">{{payDesc}}</div>
    </div>
  </div>
</template>

<script>
// 底部购物篮组件
import { mapState } from 'vuex'
export default {
  name: 'Shopcart',
  computed: {
    payDesc: function () {
      if (this.price === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.price < this.minPrice) {
        let diff = this.minPrice - this.price
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    ...mapState({
      selectFoods: 'selectFoods',
      price: 'price'
    })
  },
  props: {
    deliveryPrice: {
      type: Number,
      default: function () {
        return 0
      }
    },
    minPrice: {
      type: Number,
      default: function () {
        return 0
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shopcart
    position fixed
    bottom 0
    left 0
    width 100%
    height .96rem
    z-index 50
    background-color #141d27
    .content
      display flex
      position relative
      width 100%
      height 100%
      .content_left
        flex 1
        position relative
        .logo_wrapper
          float left
          width 1rem
          height 1rem
          border-radius 50%
          background-color #141d27
          margin -.16rem .36rem  0 .36rem
          box-sizing border-box
          padding .12rem
          display inline-block
          .logo
            width 100%
            height 100%
            border-radius 50%
            background-color rgba(255,255,255,.4)
            text-align center
            position relative
            .iconfont
              display inline-block
              font-size .48rem
              color rgba(255,255,255,.4)
              margin-top 50%
              transform translateY(-50%)
          .iconNumber
            position absolute
            top 0
            right -.28rem
            width .48rem
            height .38rem
            font-style normal
            font-size .28rem
            line-height .38rem
            background rgb(240,20,20)
            color #ffffff
            font-weight 700
            padding 0 .12rem
            text-align center
            vertical-align middle
            border-radius .38rem
            box-shadow 0 .08rem .16rem 0 rgba(0,0,0,.4)
            display none
          &.active
            position relative
            .logo
              background rgb(0,160,200)
              position relative
              .iconfont
                color #ffffff
            .iconNumber
              display inline-block
        .price
          display inline-block
          line-height .48rem
          vertical-align top
          padding-right .24rem
          box-sizing border-box
          border-right 1px solid rgba(255,255,255,.1)
          font-size .38rem
          font-weight 700
          color rgba(255,255,255,.4)
          margin-top .24rem
        .desc
          display inline-block
          vertical-align top
          margin-left  .24rem
          line-height .96rem
          color rgba(255,255,255,.4)
          font-size .2rem
          max-width 2.2rem
          overflow hidden
          white-space: nowrap
          text-overflow: ellipsis
      .content_right
        width 2.1rem
        height 100%
        color  rgba(255,255,255,0.4)
        font-size .24rem
        line-height .96rem
        display: table-cell;
        vertical-align: middle;
        text-align center
        font-weight 700
        padding 0 .16rem
        box-sizing border-box
        background rgb(43,51,59)
        &.active
          background #00b43c
          color #fff
</style>
