import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectFoods: [],
    price: 0
  },
  mutations: {
    foodesClocke: function (ctx, data) {
      ctx.selectFoods.push(data)
    },
    foodesPrice: function (ctx, data) {
      let total = 0
      ctx.selectFoods.forEach((food) => {
        total += food.price
      })
      ctx.price = total
    }
  }
})
