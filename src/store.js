
// Se importa vue
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	logged: localStorage.getItem('tokenHH') ? true : false,
	user: {},
	watchEnvios: 0
}

const mutations = {
	SET_LOGGED(state, value){
		state.logged = value
	},
	SET_WATCH_ENVIOS(state, value){
		state.watchEnvios = value
	}
	 
}

const getters = {
	userInfo(state){
		return state.user
	},
	logged(state){
		return state.logged
	},
	watchEnvios(state){
		return state.watchEnvios
	}
}


const actions = {
	 setLogged({commit}, value){
	 	commit('SET_LOGGED', value)
	 },
	 setEnvios({commit}, value){
	 	commit('SET_WATCH_ENVIOS', value)
	 }
}



export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});
