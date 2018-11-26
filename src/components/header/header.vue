<template>
    <div class="header">
        <img :src="seller.avatar" alt="" class="background">
        <div class="content">
            <div class="header_infor">
                <img class="header_infor_img" :src="seller.avatar" alt="">
                <div class="header_infor_txt">
                    <div>
                        <span class="infor_brand"></span>
                        <span class="infor_name">{{seller.name}}</span>
                    </div>

                    <div class="infor_description">
                        {{seller.description}}/{{seller.deliveryTime}}分钟送达
                    </div>
                    <div class="infor_support">
                        <span class="infor_icon" :class="classMap[seller.supports[0].type]"></span>
                        <span class="infor_text">{{seller.supports[0].description}}</span>
                    </div>
                </div>
            </div>
            <div class="header_bottom" @click="detail_show">
                <span class="header_bottom_title"></span>
                <span class="header_bottom_text">{{seller.bulletin}}</span>
                <span class="iconfont icon">&#xe6a3;</span>
            </div>
            <div v-if="seller.supports.length" class="header_icon" @click="detail_show">
                <span class="header_icon_txt">{{seller.supports.length}}个</span>
                <span class="iconfont icon">&#xe6a3;</span>
            </div>
        </div>
        <div v-show="detail" class="detail">
            <div class="detail_wrapper">
                <div class="detail_main">
                    {{seller.bulletin}}
                    {{seller.bulletin}}
                </div>
            </div>
            <div class="detail_close" @click="detail_close">
                <i class="iconfont icon">&#xe6e9;</i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'heade',
  data () {
    return {
      detail: false
    }
  },
  methods: {
    detail_show: function () {
      this.detail = true
    },
    detail_close: function () {
      this.detail = false
    }
  },
  props: {
    seller: {
      type: Object,
      default: function () {
        return {
          supports: [{
            description: ''
          }]
        }
      }
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    console.log(this.classMap[0])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/stylus/mixin.styl'
    .header
        position relative
        height  2.68rem
        width 100%
        .background
            content: ""
            filter: blur(5px)
            z-index: -1
            width: 100%
            height: 100%
            top: 0px;
            left: 0px;
            background-size: cover
            overflow:hidden
            position absolute
        .content
            left 0
            top 0
            width: 100%
            height 100%
            position absolute
            background rgba(7,17,27,.5)
            box-sizing border-box
            padding .48rem .24rem .36rem .48rem
            .header_infor
                width 100%
                height 100%
                overflow hidden
                .header_infor_img
                    height 1.28rem
                    width 1.28rem
                    border-radius .04rem
                    margin-right .32rem
                    float left
                .header_infor_txt
                    float left
                    color #fff
                    padding .04rem 0
                    overflow hidden
                    .infor_brand
                        display inline-block
                        width .6rem
                        height .36rem
                        bg-image('~@/assets/img/brand')
                        background-size .6rem .36rem
                        margin-right .12rem
                    .infor_name
                        font-size .32rem
                        font-weight bold
                        line-height .36rem
                        display inline-block
                        max-width 4rem
                        overflow hidden
                        white-space: nowrap
                        text-overflow: ellipsis
                    .infor_description
                        font-size .24rem
                        font-weight 200
                        line-height .24rem
                        margin-top .16rem
                    .infor_support
                        margin-top .2rem
                        display block
                        line-height .24rem
                        .infor_icon
                            width .24rem
                            height .24rem
                            display inline-block
                            margin-right .08rem
                            background-size .24rem .24rem
                            background-repeat no-repeat
                            &.decrease
                                bg-image('~@/assets/img/decrease_1')
                            &.discount
                                bg-image('~@/assets/img/discount_1')
                            &.guarantee
                                bg-image('~@/assets/img/guarantee_1')
                            &.invoice
                                bg-image('~@/assets/img/invoice_1')
                            &.special
                                bg-image('~@/assets/img/special_1')
                        .infor_text
                            vertical-align top
                            font-size .2rem
                            font-weight 200
                            display inline-block
                            padding 0
                            margin 0
            .header_bottom
                width 100%
                height .56rem
                background rgba(7,17,27,.2);
                position absolute
                bottom 0
                left 0
                color #fff
                font-size .2rem
                line-height .56rem
                padding 0 .44rem 0 .24rem
                box-sizing border-box
                overflow hidden
                white-space: nowrap
                text-overflow: ellipsis
                .header_bottom_title
                    width .44rem
                    height .24rem
                    bg-image('~@/assets/img/bulletin')
                    background-repeat no-repeat
                    background-size .44rem .24rem
                    display inline-block
                    line-height .56rem
                    vertical-align top
                    margin-top .15rem
                .header_bottom_text
                    height .56rem
                    margin 0 .08rem
                    vertical-align top
                .icon
                    position absolute
                    right .24rem
                    font-size .2rem
            .header_icon
                position absolute
                right .24rem
                bottom .92rem
                background-color rgba(0,0,0,.2)
                padding .14rem .16rem
                color #fff
                border-radius .4rem
                font-size .2rem
                line-height .24rem
                font-weight 200
                .icon
                    font-size .2rem
                    line-height .24rem
        .detail
            width 100%
            height 100%
            z-index 100
            position fixed
            overflow auto
            background rgba(7,17,27,.8)
            .detail_wrapper
                // min-height 100%
                &:after
                    display block
                    content ''
                    height 0
                    line-height 0
                    clear both
                    visibility hidden
                .detail_main
                    margin-top 1.18rem
                    padding-bottom  1.28rem
                    padding-right .72rem
                    padding-left .72rem
            .detail_close
                position relative
                margin -.64rem auto 0 auto
                width .64rem
                height .64rem
                clear both
                color rgba(255,255,255,.5)
                font-weight 500
                .icon
                    font-size .64rem
</style>
