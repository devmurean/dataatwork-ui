import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobDetailVisibility: false,
    jobs: []
  },
  mutations: {
    toggleJobDetailVisibility(state) {
      state.jobDetailVisibility = !state.jobDetailVisibility
    },
    storeJobs(state, jobs) {
      state.jobs = jobs
    }
  },
  getters: {
    jobDetailVisibility: state => state.jobDetailVisibility,
    jobList: state => state.jobs
  },
  actions: {
    async storeJobs({ commit }, jobs) {
      commit('storeJobs', jobs)
    }
  },
  modules: {
  }
})
