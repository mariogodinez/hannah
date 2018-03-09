<script>

	export default {
		data(){
			return {
				showModal: true,
				changePass: false
			}
		},
		components:{
		},
		methods:{
			toggleChangePass(){
				this.changePass = !this.changePass
			}
		}
	}
</script>



<template>
	<div class="back-white height100vh" >
		<section class="my-container">
			<br>
			<article class="padding-top20">
				<h2 class="text-uppercase font25">Perfil</h2>
			</article>

			<article class="margin-bottom30">
				<div class="flex flex-center flex-middle margin-top20" style="border-radius:2px;border: 1px solid #aaa; width:190px; min-height:120px;">
					<span class="color-green" style="font-weight:bold; font-size:28px;">Logo</span>
				</div>
				<figure class="" style="width: 2vw" v-if="logo">
					<img src="sdsd.cd" alt="">
				</figure>
			</article>
			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">Usuario</h3>
				<h3 class="color-black font-normal font20">Javier rosales</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">Compañía</h3>
				<h3 class="color-black font-normal font20">Nombre de la compañía</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">Domicilio</h3>
				<h3 class="color-black font-normal line-height30 font20">Juan de la Barrera 211, col. Lomas Altas <br>
Guadalajara Jalisco, MX. C.P. 45023</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">Teléfono</h3>
				<h3 class="color-black font-normal font20">01 (33) 38220912</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">Correo</h3>
				<h3 class="color-black font-normal font20">altamir43@gmail.com</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">RFC</h3>
				<h3 class="color-black font-normal font20">GDLRRTR125465er56</h3>
			</article>

			<article class="margin-bottom20 flex flex-between ">
				<div style="height:50px;">
					<h3 class="color-darkblue font-normal text-uppercase font1em">Contraseña</h3>
					<h3 class="color-black font-normal font20" v-show="!changePass">**********</h3>
				</div>

				<div class="flex">
					 <p class="anchor color-blue margin-right5" @click="toggleChangePass">Cambiar contraseña</p> <span class="ion-arrow-down-b font20 color-blue" v-show="!changePass"></span><span class="ion-arrow-up-b font20 color-blue" v-show="changePass"></span>
				</div>
			</article>
		</section>

		<section>
			<article class="my-container padding20" v-show="changePass">
				<div class="flex padding5 width100">
					<p class="color-black font20">Contraseña actual</p>
				</div>
				<div class="flex width100 margin-bottom20">
					<input type="password" class="my-input width100 text-center">
				</div>

				<div class="flex padding5 width100">
					<p class="color-black font20">Nueva contraseña</p>
				</div>
				<div class="flex width100 margin-bottom20">
					<input type="password" class="my-input width100 text-center">
				</div>

				<div class="flex padding5 width100">
					<p class="color-black font20">Confirmar nueva contraseña</p>
				</div>
				<div class="flex width100 margin-bottom30">
					<input type="password" class="my-input width100 text-center">
				</div>

				<div class="flex flex-center width100 margin-bottom30" >
					<button class="my-btn width100 text-center text-uppercase back-green color-white"style="width:60%;">
						Guardar
					</button>
				</div>
			</article>
		</section>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>