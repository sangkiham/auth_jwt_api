import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    logined : false
  },
  getters: {
    getLogined(state){
      return state.logined;
    }
  },
  mutations: {
    setLogined(state, logined){
      state.logined = logined;
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({})
  ],
});
