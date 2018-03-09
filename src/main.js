// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import store from './store.js'

import App from './App.vue'
import Hello from './components/Hello.vue'
import Login from './components/Login.vue'
import ResetPassword from './components/ResetPassword.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import Alerts from './components/Alerts.vue'
import Profile from './components/Profile.vue'
import ElegirTipoCita from './components/ElegirTipoCita.vue'
import HacerCita from './components/HacerCita.vue'
import AccesoEnviado from './components/AccesoEnviado.vue'
import Home from './components/Home.vue'
import Cobros from './components/Cobros.vue'
import ConfigOpen from './components/ConfigOpen.vue'
import CobrarEmail from './components/CobrarEmail.vue'
import CobrarSMS from './components/CobrarSMS.vue'
import CobrosEnvios from './components/CobrosEnvios.vue'
import AddBankData from './components/AddBankData.vue'
import Users from './components/Users.vue'
import EditOpen from './components/EditOpen.vue'
import EditUser from './components/EditUser.vue'
import AddUser from './components/AddUser.vue'
import ConfigEmpresa from './components/ConfigEmpresa.vue'
import Empresa from './components/Empresa.vue'
import CobrosWhats from './components/CobrarWhatsapp.vue'


function scrollTop (to,from,next){
  let body = document.querySelector('body')
  let html = document.querySelector('html')
  body.scrollTop = 0
  html.scrollTop = 0
  next()
}


import VueRouter from 'vue-router'

Vue.use(VueRouter)


let routes = [
	{path: '/cita', component: Home, beforeEnter: scrollTop},
	{path: '/login', component: Login, beforeEnter: scrollTop},
	{path: '/cobrar', component: Cobros, beforeEnter: scrollTop},
	{path: '/configuracion-openpay', component: ConfigOpen, beforeEnter: scrollTop},
	{path: '/editar-openpay', component: EditOpen, beforeEnter: scrollTop},

	{path: '/cobrar-email', component: CobrarEmail, beforeEnter: scrollTop},
	{path: '/cobrar-sms', component: CobrarSMS, beforeEnter: scrollTop},
	{path: '/cobros-envios', name: 'envios', component: CobrosEnvios, beforeEnter: scrollTop},
	{path: '/datos-bancarios' , component: AddBankData, beforeEnter: scrollTop},
	{path: '/usuarios' , component: Users, beforeEnter: scrollTop},
	{path: '/editar-usuario' , component: EditUser, beforeEnter: scrollTop},
	{path: '/agregar-usuario' , component: AddUser, beforeEnter: scrollTop},
	{path: '/configuracion-empresa' , component: ConfigEmpresa, beforeEnter: scrollTop},
	{path: '/empresa' , component:Empresa, beforeEnter: scrollTop},
	{path: '/cobrar-whatsapp' , component:CobrosWhats, beforeEnter: scrollTop},


	{path: '/olvide-contrasena', component: ForgotPassword, beforeEnter: scrollTop},
	{path: '/reestablecer-contrasena', component: ResetPassword, beforeEnter: scrollTop},
	{path: '/notificaciones', component: Alerts, beforeEnter: scrollTop},
	{path: '/perfil', component: Profile, beforeEnter: scrollTop},
	{path: '/elegir-recordatorio', component: ElegirTipoCita, beforeEnter: scrollTop},
	{path: '/hacer-cita', component: HacerCita, beforeEnter: scrollTop},
	{path: '/acceso-enviado', component: AccesoEnviado, beforeEnter: scrollTop},



]

let router = new VueRouter({
	routes
})

let VueApp = new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  router,
  render: (h) => h(App),
  created(){
  	if(!localStorage.getItem('tokenHH')){
  		this.$router.replace('/login')
  	}
  }
})
