import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobDetailVisibility: false,
    jobs: [],
    selectedJob: {},
    relatedSkills: [],
    errorBoxVisibility: false,
    errorBoxMessage: '',
    loadingLayerVisibility: false
  },
  mutations: {
    toggleJobDetailVisibility(state) {
      state.jobDetailVisibility = !state.jobDetailVisibility
      state.selectedJob = {}
      state.relatedSkills = []
    },
    showErrorBox(state, message) {
      state.errorBoxVisibility = true
      state.errorBoxMessage = message
    },
    hideErrorBox(state) {
      state.errorBoxVisibility = false
      state.errorBoxMessage = ''
    },
    toggleLoadingLayerVisibility(state) {
      state.loadingLayerVisibility = !state.loadingLayerVisibility
    },
    storeJobs(state, jobs) {
      state.jobs = jobs
    },
    selectJob(state, jobUUID) {
      let job = state.jobs.find(({ uuid }) => uuid === jobUUID)
      state.selectedJob = job
    },
    storeRelatedSkills(state, skills) {
      state.relatedSkills = skills
    }
  },
  getters: {
    jobDetailVisibility: state => state.jobDetailVisibility,
    jobList: state => state.jobs,
    selectedJob: state => state.selectedJob,
    relatedSkills: state => state.relatedSkills,
    errorBoxVisibility: state => state.errorBoxVisibility,
    loadingLayerVisibility: state => state.loadingLayerVisibility,
    errorBoxMessage: state => state.errorBoxMessage
  },
  actions: {
    async storeJobs({ commit }, jobs) {
      commit('storeJobs', jobs)
    },
    async storeRelatedSkills({ commit }, skills) {
      commit('storeRelatedSkills', skills)
    },
    async showErrorBox({ commit }, message = '') {
      commit('showErrorBox', message)

      setTimeout(() => {
        commit('hideErrorBox')
      }, 3000)
    },
    async toggleLoadingLayerVisibility({ commit }) {
      commit('toggleLoadingLayerVisibility')
    }
  },
  modules: {
  }
})
