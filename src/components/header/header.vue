<template>
    <div class="header">
        <div class="content">
            <div class="header_infor">
                <img class="header_infor_img" src="~@/assets/img/lujiao.jpg" alt="">
                <div class="header_infor_txt">

                </div>
            </div>
            <div class="header_bottom"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'heade'
}
</script>

<style lang="stylus" scoped>
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
