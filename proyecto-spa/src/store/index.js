import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showClient: false,
    clientesArreglo: [{
      id: 1,
      nom: "Albert",
      cognom: "Einstein",
      prime: true
      },
      {
      id: 2,
      nom: "Sonia",
      cognom: "Perez",
      prime: false
      },
      {
      id: 3,
      nom: "Mark",
      cognom: "Lin",
      prime: true
      },
      {
      id: 4,
      nom: "Peter",
      cognom: "Pan",
      prime: false
      }
    ]
  },
  mutations: {
    ShowClients(state, value){
      state.showClient = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
