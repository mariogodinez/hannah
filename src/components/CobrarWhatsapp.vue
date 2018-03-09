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
				linkCreated: false,
				showLogo: false,
				setCant: true,
				payment:{
					name:'',
					total:''
				}
			}
		},
		components:{
			Spinner
		},
		methods:{
			chooseOtherCant(){
				let self = this
				this.linkCreated = false
				setTimeout(function(){
					self.setCant = true
				},900)
			},
			createLink(){
				let self = this
				this.setCant = false

				setTimeout(function(){
					self.linkCreated = true
				},900)
			},
			 copyLink(){
			 	let self = this
			 	
			 		self.setCant = false
					self.copied = true

					setTimeout(function(){
						self.showLogo = true
					},1100)

				setTimeout(function(){
					self.showIcon = true
				},1500)

				setTimeout(function(){
					self.showText = true

				},2000)


				setTimeout(function(){
					self.copied = false
					self.showIcon = false
					self.showText = false
					self.showLogo = false
				},5500)
			 }
		},
		mounted(){
			
		}
	}
</script>



<template>
	<div class="back-white height100vh flex flex-middle" >
		<Spinner v-if="loader"></Spinner>

		<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated bounceOutUp">
		<section class="my-container" v-if="setCant" >
			<article class="padding15">
				<h2 class="text-uppercase font-bold font1-5em text-center">Cobros</h2>
			</article>

			<article class="padding10 flex flex-center">
				 <p class="font1-3em text-center" style="line-height:30px; width:350px;">
					Ingresa el monto a cobrar para generar el link de ingreso a pagar.
				</p>
			</article>

			<section class="padding0-10">
				<article class="padding20 back-lightgray margin-bottom50" style="padding-right:5px;">

					<div class="width100 padding-left10 ">
						<h3 class="font1-3em">Nombre del cliente:</h3>
					</div>

					<div class="flex relative padding10">
						<span class="absolute color-red font30" style="top:30px; left:-8px;">*</span>
						<input type="text" class="my-input" style="background:white;" v-model="payment.name">
					</div>


					<div class="width100 padding-left10 ">
						<h3 class="font1-3em">Total a cobrar:</h3>
					</div>
					
					<div class="flex relative padding10">
						<span class="absolute color-red font30" style="top:30px; left:-8px;">*</span>
						<input type="text" class="my-input" style="background:white;" v-model="payment.total">
					</div>
					<div class="padding-left10">
						<em class="color-gray" style="">* Precio con I.V.A. incluido</em>
					</div>
					
				</article>
			</section>

			

			<article class="padding10" style="border-top:4px solid #ccc;">
				 
			</article>

			<article class="padding20"  >
				<div class="flex width100 margin-bottom20">
					<button class="my-btn width100 text-center back-green text-uppercase color-white" @click="createLink" >
						crear link
					</button>
				</div>
			</article>
		</section>

	</transition>

		 <transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated bounceOutUp">
			<section class="my-container" v-show="linkCreated && !copied">
				
				<article class="">
					<div class="back-darkgray flex">
						<article class="padding20-0 text-center" style="border-right:1px solid white; width:37%; border-bottom:1px solid white">
							<h3 class="color-white  font1-3em">Cliente</h3>
						</article>
						<article class="padding20-0" style="border-bottom:1px solid white; width:63%;">
							<h3 class="color-white font1-3em padding-left10">{{payment.name}}</h3>
						</article>
					</div>
				</article>
				<article class=" margin-bottom20">
					<div class="back-darkgray flex">
						<article class="padding20-0 text-center" style="border-right:1px solid white; width:37%;">
							<h3 class="color-white">Total a cobrar</h3>
						</article>
						<article class="padding20-0" style=" width:63%;">
							<h3 class="color-white padding-left10">${{payment.total}}</h3>
						</article>
					</div>
				</article>
				<article class="padding20">
					<p class="text-center margin0">
						<p class="color-green text-center fontbold anchor font1-3em" @click="chooseOtherCant">Editar cantidad</p>
					</p>
				</article>


				<article class="padding10 flex flex-center">
					<p class="text-center font1-3em color-gray line-height30"  style="width:80%;">
						Asegúrate de pegar este link en la conversación de tu cliente.
					</p>
				</article>

				<article class="padding20"  >
					<p class="text-center margin-bottom30">
						<a href="" class="color-blue anchor font1-3em">http://hannah.com/empresa/002efr21</a>
					</p>
					<div class="flex width100 margin-bottom20">
						<button class="my-btn width100 text-center back-green text-uppercase color-white" @click="copyLink">
							Copiar link
						</button>
					</div>
				</article>
				
			</section>

		</transition>


		<section class="my-container relative" style="top:-20px;" v-show="copied">
			<div class="margin-bottom30 flex flex-center">
				<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">
					<figure style="width:190px" v-if="showLogo">
						<img src="./dist/img/hannah-logo.png" class="width100" alt="Hannah logo">
					</figure>
				</transition>
			</div>
			
			<div class="margin-bottom20 flex flex-center" style="height:110px;">

				 <transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">

				<figure style="width:100px;" v-if="showIcon">
					<img src="./dist/img/tick-inside-circle.svg" class="width100" alt="check mark">
				</figure>

			</transition>
			</div>

			<div class="flex flex-center width100">
				<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">
					<p class="font1-5em text-center" style="line-height:30px;" v-if="showText">
						Se ha copiado el link con éxito.
					</p>
				</transition>
			</div>

		</section>
	</div>
</template>