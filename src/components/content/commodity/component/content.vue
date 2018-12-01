<template>
    <div class="content">
        <ul class="content_ul">
            <li class="foods_list" v-for="(list,index) of foodes" :key="index">
                <h1 class="foods_title">{{list.name}}</h1>
                <ul class="foods_list_ul">
                    <li class="foods_item" v-for="(items,i) of list.foods" :key="i">
                        <img class="foods_img"  :src="items.icon" :alt="items.name">
                        <div class="foods_content">
                            <h2 class="foods_name">{{items.name}}</h2>
                            <p class="foods_desc">{{items.description}}</p>
                            <div class="foods_extra">
                                <span class="foods_extra_mon">月售{{items.sellCount}}份</span>
                                <span class="foods_extra_P">好评率{{items.rating}}%</span>
                            </div>
                            <div class="foods_price">
                                <span>￥{{items.price}}</span>
                                <span v-show="items.oldPrice" class="foods_olprice">￥{{items.oldPrice}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    foodes: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  watch: {
    foodes: function () {
      console.log(this.foodes)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .content
        position relative
        width 100%
        height 100%
        .content_ul
            overflow auto
            height 100%
            margin 0
            padding 0
            .foods_list
                position relative
                list-style-type none
                .foods_title
                    margin 0
                    height .52rem
                    font-size .24rem
                    color rgb(147,153,159)
                    line-height .52rem
                    padding-left .28rem
                    background #f3f5f7
                .foods_list_ul
                    padding 0 .36rem
                    .foods_item
                        list-style-type none
                        padding .36rem 0
                        display flex
                        position relative
                        border-bottom 0.01rem solid rgba(7,17,27,.1)
                        .foods_img
                            width 1.14rem
                            height 1.14rem
                            display inline-block
                            flex 0 0 1.14rem
                            margin-right .2rem
                        .foods_content
                            flex 1
                            position relative
                            overflow hidden
                            .foods_name
                                margin 0
                                font-size .28rem
                                color rgb(77,85,93)
                                line-height .28rem
                            .foods_desc
                                font-size .2rem
                                color rgb(147,153,159)
                                line-height .2rem
                                margin .16rem 0
                            .foods_extra
                                font-size .2rem
                                color rgb(147,153,159)
                                .foods_extra_mon
                                    margin-right .24rem
                            .foods_price
                                font-size .28rem
                                color rgb(240,20,20)
                                font-weight 700
                                line-height .48rem
                                .foods_olprice
                                    font-size .2rem
                                    margin-left 0
                                    line-height .2rem
                                    text-align top
                                    color rgb(147,153,159)
                                    vertical-align auto
                                    position relative
                                    display inline-block
                                    &:after
                                        content ''
                                        width 100%
                                        height 1px
                                        background rgb(147,153,159)
                                        position absolute
                                        left .02rem
                                        top .1rem
</style>
