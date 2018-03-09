<script>

	export default {
		data(){
			return {
				showMenu: false,
			}
		},
		components:{
		},
		methods:{
			toggleShowMenu(){
				this.showMenu = !this.showMenu
			},
			ring(){
				 var audio = document.getElementById("audio");
			      audio.play();
			},
			go(route, bell){
				this.$router.push(route)
				if(bell){
					return false
				}
				this.toggleShowMenu()
			},
			goEnviosProgramados(){
				this.toggleShowMenu()

				this.$router.push('/cobros-envios')
				this.$store.dispatch('setEnvios', 0)
			}
			,
			goEnviosCobros(){
				this.toggleShowMenu()

				this.$router.push('/cobros-envios')
				this.$store.dispatch('setEnvios', 1)
			},
			closeSesion(){
				this.$router.replace('/login')
				this.$store.dispatch('setLogged', false)
				localStorage.removeItem('tokenHH')
			}
		}
	}
</script>

<style>
	.my-badge{
		position: absolute;
		background: red;
		width:20px;
		height: 20px;
		top:-9px;
		right: -9px;
		border:1px solid white;
	}
</style>


<template>

	<section class="my-header back-white">
		
		<header class="flex flex-middle transition30 relative" :class="{'back-hannah' : showMenu}" style="border-bottom:1px solid #aebfc6">
			<div class="padding15 pointer" @click="toggleShowMenu" style="border-right:1px solid #d2d2d2">
				<span class="font30 color-hannah" v-if="!showMenu">
					<i class="ion-navicon-round" aria-hidden="true"></i>
				</span>
			
				<span class="font30 color-white" v-if="showMenu">
					<i class="ion-close-round" aria-hidden="true"></i>
				</span>
			
			</div>
			<figure class="padding10-15" style="width:130px">
				<img src="./dist/img/hannah-logo.png" alt="Hannah logo" v-show="!showMenu" class="width100">
				<img src="./dist/img/hannah-logo-bco.png" alt="Hannah logo blanco" v-show="showMenu" class="width100">
			</figure>
			<div class="my-header-notification flex flex-center flex-middle relative"  @click="go('notificaciones', true)" style="border:1px solid white;">
				<figure class="relative hvr-buzz-out" style="width:31px; left: 1px; top:1px; padding-left:5px;  padding-top:2px;">
					<img src="./dist/img/notification-bell.png" alt="notification bell" style="width:80%">
				</figure>
				<span class="my-badge flex flex-center flex-middle">2</span>
			</div>
		</header>

		<article class="my-header-menu height100vh" :class="{left0 : showMenu}" style="background:#ebeef0; overflow-y:auto;">
			<ul  class="padding20-0 margin0">
				<li class="flex flex-middle flex-between margin0 padding-left20 font20">
					<p class="margin-right5 text-uppercase font-bold color-black">Configuración de empresa</p>
					<div class=" " style="height:1px; background: #bfbcbc; width:32%;"></div>
				</li>

				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc" @click="go('/empresa')">
					<p class="padding10-20 margin-left10">Administrar Empresa</p>
				</li>

				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc" @click="go('/usuarios')">
					<p class="padding10-20 margin-left10">Administrar Usuarios</p>
				</li>
<!-- 
				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc">
					<p class="padding10-20 margin-left10">Historial de envíos realizados</p>
				</li> -->

				<li class="flex flex-middle padding-top20 padding-left10 font20">
					<p class="margin-right10 text-uppercase font-bold color-black">Citas</p>
					<div class=" width100" style="height:1px; background: #bfbcbc"></div>
				</li>

				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc"  @click="goEnviosProgramados">
					<p class="padding10-20 margin-left10">Envíos programados</p>
				</li>

				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc">
					<p class="padding10-20 margin-left10" @click="go('cita')">Programar/enviar cita</p>
				</li>

				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc"  @click="go('/cobros-envios')">
					<p class="padding10-20 margin-left10">Historial de envíos realizados</p>
				</li>


				<li class="flex flex-middle padding-top20 padding-left10 font20">
					<p class="margin-right10 text-uppercase font-bold color-black">Cobros</p>
					<div class=" width100" style="height:1px; background: #bfbcbc"></div>
				</li>

				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc"  @click="goEnviosProgramados">
					<p class="padding10-20 margin-left10">Envíos programados</p>
				</li>

				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc">
					<p class="padding10-20 margin-left10" @click="go('/cobrar')">Programar/enviar cobro</p>
				</li>

				<li class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc"  @click="go('/cobros-envios')">
					<p class="padding10-20 margin-left10">Historial de envíos y cobros</p>
				</li>


				<li class="flex flex-middle margin0 font-bold font20 pointer" style="border-bottom: 1px solid #bfbcbc" @click="go('configuracion-openpay')">
					<p class="padding10-20 margin-left10 color-black">Configuración de openpay </p>
				</li>


				<li class="flex flex-middle margin0 font-bold font20 pointer" style="border-bottom: 1px solid #bfbcbc" @click="go('/notificaciones')">
					<p class="padding10-20 margin-left10 color-black">Notificaciones</p>
				</li>

				<li class="flex flex-middle margin0 font-bold font20 pointer" @click="closeSesion" style="border-bottom: 1px solid #bfbcbc">
					<p class="padding10-20 margin-left10 color-black">Cerrar sesión <span class="color-gray font-normal">-</span> <span class="color-gray font-normal">Carlos Cerda Urrea</span></p>
				</li>
			</ul>
			<br>
			<br>
		</article>

	</section>
</template>