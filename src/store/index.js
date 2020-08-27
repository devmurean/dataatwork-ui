import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobDetailVisibility: false
  },
  mutations: {
    toggleJobDetailVisibility(state) {
      state.jobDetailVisibility = !state.jobDetailVisibility
    }
  },
  getters: {
    jobDetailVisibility: state => state.jobDetailVisibility
  },
  actions: {
  },
  modules: {
  }
})
