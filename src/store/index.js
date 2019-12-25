import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      inputObject:{
          name:'',
          value: ''
      }
  },
  mutations: {
      updateName(state, value) {
         state.inputObject.name = value 
      },
      updateValue(state, value) {
         state.inputObject.value = value 
      }
  },
  actions: {
      updateName({commit}, value) {
        commit('updateName', value)
      },
      updatevalue({commit}, value) {
        commit('updateValue', value)
      },
  },
  getters:{
      getName: state => state.inputObject.name,
      getvalue: state => state.inputObject.value
  },
  modules: {
  }
})
