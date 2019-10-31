import Vuex from 'vuex'
import Vue from 'vue'
import { gameSheet } from './gameSheet'
import { State } from './state'

Vue.use(Vuex)

export default new Vuex.Store<State>({
  modules: {
    gameSheet,
  },
})
