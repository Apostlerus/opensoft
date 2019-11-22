import Vue from 'vue';
import Vuex from 'vuex';
import jsonItems from '../data/items.json';
import numberOfLicenses from '../data/numberOfLicenses.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: {
      items: [],
      numberOfLicenses: [],
    },
  },
  mutations: {
    updateItems(state, items) {
      state.shoppingCart.items = items;
    },
    loadNumberOfLicenses(state, licenses) {
      state.shoppingCart.numberOfLicenses = licenses;
    },
  },
  actions: {
    updateItems({ commit }, items) {
      commit('updateItems', items);
    },
    loadItems({ commit }) {
      const { items } = jsonItems;
      if (!items) {
        return;
      }
      commit('updateItems', items);
    },
    loadNumberOfLicenses({ commit }) {
      console.log(numberOfLicenses);
      const { licenses } = numberOfLicenses;
      commit('loadNumberOfLicenses', licenses);
    },
  },
  modules: {
  },
  getters: {
    items: state => state.shoppingCart.items,
    licenses: state => state.shoppingCart.numberOfLicenses,
  },
});
