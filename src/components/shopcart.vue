<template>
  <div class="shopcart">
    <div class="content">
      <div class="content_left">
        <div class="logo_wrapper">
          <div class="logo">
            <span class="iconfont">&#xe746;</span>
          </div>
        </div>
        <div class="price"></div>
        <div class="desc"></div>
      </div>
      <div class="content_right">￥20起送</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shopcart'
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
          .logo
            width 100%
            height 100%
            border-radius 50%
            background-color rgba(255,255,255,.4)
            text-align center
            .iconfont
              display inline-block
              font-size .48rem
              color rgba(255,255,255,.4)
              margin-top 50%
              transform translateY(-50%)
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
</style>
