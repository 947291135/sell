<template>
    <div class="header">
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
            <div class="header_bottom"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'heade',
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
        &::before
            content: ""
            background url('~@/assets/img/lujiao.jpg') no-repeat center top
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
                box-sizing border-box
                padding 0 .24rm

</style>
