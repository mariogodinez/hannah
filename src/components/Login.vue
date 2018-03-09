<script>

import Spinner from './Spinner.vue'
	export default {
		data(){
			return {
				showModal: true,
				spin: false,
				userInfo:{
					user: 'mariogodinez',
					pass: 'mgodinez7'
				}
			}
		},
		components:{
			Spinner
		},
		computed:{
			logged(){
				return this.$store.getters.logged
			}
		},
		methods:{
			forgotPassword(){
				this.$router.push('olvide-contrasena')
			},
			login(){
				let self = this
				this.spin = true
				setTimeout(function(){
					self.spin = false
					localStorage.setItem('tokenHH', 'nr3d434334rfd')
					self.$store.dispatch('setLogged', true)
					self.$router.replace('/cobrar')
				},2000)
			}
		}
	}
</script>



<template>
	<transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
		<section class="flex flex-center flex-middle padding0-10" >
			<Spinner v-if="spin"></Spinner>
			<article class="flex flex-center  flex-column flex-middle relative height100vh" style="top:-20px; width: 340px; overflow:hidden;">
				<div class="margin-bottom50">
					<figure style="width:250px">
						<img src="./dist/img/hannah-logo.png" class="width100" alt="Hannah logo">
					</figure>
				</div>
				<div class="flex margin-bottom15 width100 ">
					<input type="email" class="my-input width100 text-center" placeholder="Correo" v-model="userInfo.user">
				</div>

				<div class="flex width100 margin-bottom30">
					<input type="password" class="my-input width100 text-center" placeholder="Contraseña" v-model="userInfo.pass">
				</div>

				<div class="flex width100 margin-bottom30">
					<button class="my-btn width100 text-center text-uppercase back-hannah color-white" @click="login">
						Iniciar Sesión
					</button>
				</div>

				<div class="flex width100 flex-center">
					<p class="anchor margin0 font1-3em text-center color-darkblue" @click="forgotPassword">Olvidé mi contraseña</p>
				</div>
			</article>
		</section>
	</transition>
</template>