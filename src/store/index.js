import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    area: '',
    limitCount: 0,
    count: 0,
  },
  getters:{
    getArea:state =>{
        return state.area;
    },
    getCount:state =>{
      return state.count;
    }
  },
  mutations: {
    MutationsUpdateArea(state,data){
      state.area = data
  }
  },
  actions: {
    ActionUpdateArea(store,data){
      store.commit("MutationsUpdateArea",data)
  }
  },
  modules: {
  }
})
