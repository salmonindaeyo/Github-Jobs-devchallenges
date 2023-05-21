
import _ from 'lodash'

const jobStoreState = {
  jobData: null
}

const jobStore = {
  namespaced: true,
  state: () => (_.cloneDeep(jobStoreState)),
  actions: {
    async getData ({ commit, rootState }) {
      try {
        const res = await fetch("https://apis.camillerakoto.fr/fakejobs/jobs");
        const data = await res.json();
        console.log(data)
      } catch (err) {
        console.log(err.message);
      }
    }
  },
  mutations: {
    SET_JOB_DATA (state, payload) {
      state.jobData = payload
    }
  }
}

export default jobStore
