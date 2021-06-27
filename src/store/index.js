import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    user: {},
  },
  mutations: {
    async setToken(state, payload) {
      state.token = payload;
    },
    async setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getToken: (state) => state.token,
    getUser: (state) => state.user,
  },
});
