<script>
	import Spinner from './Spinner.vue'
	export default {
		data(){
			return {
				showModal: true,
				changePass: false,
				showIcon: false,
				showText: false,
				copied: false,
				linkCreated: false
			}
		},
		components:{
			Spinner
		},
		methods:{
			 copyLink(){
			 	let self = this
			 	this.copied = true
				setTimeout(function(){
					self.showIcon = true
				},400)

				setTimeout(function(){
					self.showText = true
				},800)
			 }
		},
		mounted(){
			
		}
	}
</script>



<template>
	<div class="back-white height100vh" >
			<br><br>
		<Spinner v-if="loader"></Spinner>
		<section class="my-container" v-show="!linkCreated" >
			<article class="padding20">
				<h2 class="text-uppercase font-bold font25 text-center">Cobros</h2>
			</article>

			<article class="padding10 flex flex-center">
				 <p class="font20 text-center" style="line-height:30px; width:350px;">
					Indica el nombre completo y correo electrónico del destinatario.
				</p>
			</article>


			<article class="padding10-20 ">


				<div class="width100 padding-left10 ">
					<h3>Nombre completo</h3>
				</div>
				
				<div class="flex relative padding10">
					<span class="absolute color-red font30" style="top:30px; left:-8px;">*</span>
					<input type="text" class="my-input" style="background:white;">
				</div>
				
			</article>

			<article class="padding10-20 margin-bottom30">
				<div class="width100 padding-left10 ">
					<h3>Número celular</h3>
				</div>
				
				<div class="flex relative padding10">
					<span class="absolute color-red font30" style="top:30px; left:-8px;">*</span>
					<input type="text" class="my-input" style="background:white;">
				</div>
			</article>

			<article class="padding10" style="border-top:4px solid #ccc;">
			</article>
		</section>

		<section class="my-container">
			<article class="padding20"  >
				<div class="flex width100 margin-bottom20">
					<button class="my-btn width100 text-center back-green text-uppercase color-white">
						Continuar
					</button>
				</div>

				<div class="text-center">
					<p class="color-gray margin-bottom10">Usuario: Maria elena bonilla</p>
					<p class="color-gray">Sucursal: Américas</p>

				</div>
			</article>
		</section>
		


		<section class="my-container" >
			 <article class="padding10 flex flex-center">
				 <p class="font20 text-center" style="line-height:30px; width:350px;">
					Agrega un mensaje y/o describe el objetivo del cobro.
				</p>
			</article>

			<article class="padding10-20 margin-bottom30">
				<div class="width100 padding-left10 ">
					<h3>Mensaje</h3>
				</div>
				<div class="flex relative padding10">
					<span class="absolute color-red font30" style="top:10px; left:-8px;">*</span>
					<textarea type="text" class="my-input" cols="30" rows="4" style="background:white; padding-top:5px;"></textarea>
				</div>
			</article>
		</section>


		<section class="my-container" >
			 <article class="padding20 back-lightgray margin-bottom20">
				<div class="width100 padding-left10 ">
					<h3>Total a cobrar</h3>
				</div>
				
				<div class="flex relative padding10">
					<span class="absolute color-red font30" style="top:30px; left:-8px;">*</span>
					<input type="text" class="my-input" style="background:white;">
				</div>
				<div class="padding-left10">
					<em class="color-gray" style="">* Precio con I.V.A. incluido</em>
				</div>
				
			</article>

			<div class=" " style="border-bottom:4px solid #ccc; padding-bottom:40px;">
				<p class="color-blue text-center font20 anchor">Pre-visualizar E-mail</p>
			</div>
		</section>


		<section class="my-container ">
			<article class="  flex flex-center " style="padding-top:40px;">

				<div class="flex width100 margin-bottom20" style="width:80%;">
					<button class="my-btn width100 text-center text-uppercase back-green color-white">
						Enviar Ahora
					</button>
				</div>
				
			</article>
 
		</section>
		<br> <br>
	</div>
</template>