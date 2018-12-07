import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectFoods: [], // {count: 1, name: '皮蛋瘦肉粥', price: 10}
    price: 0
  },
  mutations: {
    foodesClocke: function (ctx, data) {
      let foodIndex = ctx.selectFoods.findIndex(food => food.name === data.name)
      if (foodIndex === -1) {
        ctx.selectFoods.push({
          name: data.name,
          price: data.price,
          count: 1
        })
        // foodIndex存在 ,更新数据
      } else {
        ctx.selectFoods[foodIndex].count++
      }
      console.log(ctx.selectFoods)
    },
    foodesDecrease: function (ctx, data) {
      let foodIndex = ctx.selectFoods.findIndex(food => food.name === data.name)
      if (foodIndex === -1) {
        // ctx.selectFoods.push({
        //   name: data.name,
        //   price: data.price,
        //   count: 1
        // })
        // foodIndex存在 ,更新数据
      } else {
        ctx.selectFoods[foodIndex].count--
      }
      console.log(ctx.selectFoods)
    },
    foodesPrice: function (ctx) {
      let total = 0
      ctx.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      ctx.price = total
    }
  }
})
