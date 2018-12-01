<template>
    <div class="list">
        <ul class="list_ul">
            <li class="list_item" v-for="(item,index) of commodity" :key="index">
                <span class="list_item_text border-bottom">
                    <span class="list_item_icon" v-if="item.type>0" :class="classMap[item.type]"></span>
                    {{item.name}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    commodity: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin.styl'
    .list
        position absolute
        top 0
        bottom 0
        left 0
        overflow hidden
        height 100%
        width 100%
        .list_ul
            list-style-type none
            padding 0
            margin 0
            height 100%
            overflow auto
            .list_item
                width 100%
                height  1.08rem
                font-size .24rem
                color rgb(24,2,2)
                font-weight 500
                line-height .28rem
                box-sizing border-box
                padding 0 .24rem
                display table
                cursor pointer
                .list_item_text
                    display: table-cell
                    vertical-align: middle;
                    .list_item_icon
                        width .24rem
                        height .24rem
                        display inline-block
                        background-size .24rem .24rem
                        background-repeat no-repeat
                        &.decrease
                            bg-image('~@/assets/img/decrease_3')
                        &.discount
                            bg-image('~@/assets/img/discount_3')
                        &.guarantee
                            bg-image('~@/assets/img/guarantee_3')
                        &.invoice
                            bg-image('~@/assets/img/invoice_3')
                        &.special
                            bg-image('~@/assets/img/special_3')
</style>
