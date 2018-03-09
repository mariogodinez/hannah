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
			},
			editEmpresa(){
				this.$router.push('/configuracion-empresa')
			},
			goGack(){
				this.$router.go(-1)
			}
		}
	}
</script>



<template>
	<div class="back-white height100vh" >
		<section class="my-container padding10">
			<article class="padding-top20 flex flex-between">
				<h2 class="text-uppercase font1-5em">Empresa</h2>
				<p class="font1-3em flex flex-middle" @click="editEmpresa"><span class="fa fa-edit"></span> <span class="anchor ">Editar</span></p>
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
				<h3 class="color-darkblue font-normal text-uppercase font1em">Compañía</h3>
				<h3 class="color-black font-normal font1-5em">Nombre de la compañía</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">Domicilio</h3>
				<h3 class="color-black font-normal line-height30 font1-5em">Juan de la Barrera 211, col. Lomas Altas <br>
Guadalajara Jalisco, MX. C.P. 45023</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">Teléfono</h3>
				<h3 class="color-black font-normal font1-5em">01 (33) 38220912</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">Correo</h3>
				<h3 class="color-black font-normal font1-5em">altamir43@gmail.com</h3>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em">RFC</h3>
				<h3 class="color-black font-normal font1-5em">GDLRRTR125465er56</h3>
			</article>

			 
		</section>

		 
		<br>
		<br>
		<br>
	</div>
</template>