import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "banana Skin", price: 20 },
      { name: "shiny Star", price: 40 },
      { name: "Green Sells", price: 60 },
      { name: "banana Shells", price: 80 }
    ]
  },
  getters: {
    saleproducts: state => {
      let saleProduct = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        };
      });

      return saleProduct;
    }
  },
  mutations: {
    reducePrice: (state,payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context,payload) => {
      // state.products.forEach(product => {
      //   product.price -= 1;
      // });
      context.commit('reducePrice',payload);
    }
  }
});
