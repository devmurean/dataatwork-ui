import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobDetailVisibility: false,
    jobs: [],
    selectedJob: {},
    relatedSkills: []
  },
  mutations: {
    toggleJobDetailVisibility(state) {
      state.jobDetailVisibility = !state.jobDetailVisibility
      state.selectedJob = {},
        state.relatedSkills = []
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
    relatedSkills: state => state.relatedSkills
  },
  actions: {
    async storeJobs({ commit }, jobs) {
      commit('storeJobs', jobs)
    },
    async storeRelatedSkills({ commit }, skills) {
      commit('storeRelatedSkills', skills)
    }
  },
  modules: {
  }
})
