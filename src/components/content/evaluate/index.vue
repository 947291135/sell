<template>
    <div class="evaluate">
        <div class="evaluate_content">
            <div class="overview">
                <div class="overview_left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="title">综合评分</div>
                    <div class="rank">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="overview_right">
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <star class="star" :starSize='36' :starLength='seller.serviceScore'></star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">商品评分</span>
                        <star :starSize='36' :starLength='seller.foodScore'></star>
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                    <div class="delivery-wrapper">
                        <span class="title">送达时间</span>
                        <span class="score">{{seller.deliveryTime}}分钟</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import star from '@/components/header/star'
export default {
  name: 'Evaluate',
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    star
  },
  methods: {
    sellers: function () {
      console.log(this.seller)
    }
  }
}
</script>

<style lang="stylus" scoped>
.evaluate
    position absolute
    top 3.47rem
    bottom .96rem
    left 0
    width 100%
    overflow hidden
    background  #f3f5f7
    .overview
        display flex
        padding .36rem 0
        background #ffffff
        border-bottom  1px solid rgba(7,17,27,.2)
        .overview_left
            flex 0 0 2.75rem
            width 2.75rem
            border-right  1px solid rgba(7,17,27,.2)
            text-align center
            padding .12rem 0
            .score
                font-size .48rem
                color rgb(255,153,0)
                line-height .56rem
                margin 0 0 .12rem 0
            .title
                font-size .24rem
                color rgb(7,17,27)
                line-height .24rem
                margin-bottom .16rem
            .rank
                font-size .2rem
                color rgb(147,153,159)
                line-height .2rem
        .overview_right
            flex 1
            padding-left .48rem
            padding-top .12rem
            padding-bottom .12rem
            .score-wrapper
                font-size 0
                margin-bottom .16rem
                .title
                    font-size .24rem
                    color rgb(7,17,27)
                    line-height .36rem
                    vertical-align top
                    padding-right .24rem
                .score
                    padding-left .24rem
                    line-height .36rem
                    font-size .24rem
                    vertical-align top
                    color rgb(255,153,0)
            .delivery-wrapper
                font-size 0
                .title
                    font-size .24rem
                    color rgb(7,17,27)
                    line-height .36rem
                    vertical-align top
                    padding-right .24rem
                .score
                    line-height .36rem
                    font-size .24rem
                    vertical-align top
                    color rgb(147,153,159)

</style>
