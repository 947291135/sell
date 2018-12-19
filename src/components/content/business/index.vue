<template>
    <div class="business">
        <div class="business_content">
            <div class="header">
                <div class="header_top">
                    <h1 class="titele">{{seller.name}}</h1>
                    <div class="desc">
                        <star :starSize='36' :starLength='seller.score'></star>
                        <span class="text" style="margin-right:.24rem;padding-left:.16rem">({{seller.ratingCount}})</span>
                        <span class="text">月售{{seller.sellCount}}单</span>
                    </div>
                </div>
                <div class="header_bottom">
                    <div class="info_item">
                        <h3>起送价</h3>
                        <span>{{seller.minPrice}}<i class="item_i">元</i></span>
                    </div>
                    <div class="info_item">
                         <h3>商家配送</h3>
                        <span>{{seller.deliveryPrice}}<i class="item_i">元</i></span>
                    </div>
                    <div class="info_item">
                         <h3>平均配送时间</h3>
                        <span>{{seller.deliveryTime}}<i class="item_i">分钟</i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import star from '@/components/header/star'
export default {
  name: 'Business',
  components: {
    star
  },
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    },
    ratings: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.business
    position absolute
    top 3.47rem
    bottom .96rem
    left 0
    width 100%
    overflow hidden
    background  #f3f5f7
    .header
        position relative
        width 100%
        padding .36rem
        box-sizing border-box
        background #ffffff
        &:before
            content ''
            position absolute
            width 100%
            bottom 0
            left 0
            border-top  1px solid rgba(7,17,27,.2)
            transform  scaleY(0.5)
        .header_top
            position relative
            overflow hidden
            padding-bottom .36rem
            &:before
                content ''
                position absolute
                width 100%
                bottom 0
                left 0
                border-top  1px solid rgba(7,17,27,.2)
                transform  scaleY(0.5)
            .titele
                font-size .28rem
                color rgb(7,17,27)
                line-height .28rem
                font-weight 700
            .desc
                float left
                font-size 0
                .text
                    font-size .2rem
                    color rgb(77,85,93)
                    line-height .36rem
        .header_bottom
            position relative
            display flex
            padding-top .36rem
            width 100%
            .info_item
                flex 1
                text-align center
                position relative
                overflow hidden
                &:before
                    content ''
                    position absolute
                    height  100%
                    bottom 0
                    right 0
                    border-right  1px solid rgba(7,17,27,.2)
                    transform  scaleX(0.5)
                &:last-child
                    &:before
                        border-right none
                h3
                    margin 0
                    font-size .27rem
                    color rgb(147,153,159)
                    line-height .27rem
                    font-weight normal
                span
                    display block
                    margin-top .08rem
                    font-size .48rem
                    font-weight 200
                    color rgb(7,17,27)
                    line-height .48rem
                    .item_i
                        font-size .20rem
                        font-style normal
</style>
