import Vue from 'vue'
import Vuex from 'vuex'
import { module as status } from './status'
import { API } from '../lib/api'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		api: API('http://10.84.114.120:5000')
	},
	modules: {
		status
	}
})