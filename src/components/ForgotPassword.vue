
<script>
	export default {
		data(){
			return {

			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			sendEmail(){
				this.$router.replace('/acceso-enviado')
			}
		}
	}
</script>

<template>
	<transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
		<section class="flex flex-center flex-middle" >
			<article class="flex flex-center flex-column flex-middle relative height100vh" style="top:0px; width: 340px; overflow:hidden;">
				<div class="margin-bottom50">
					<figure style="width:250px">
						<img src="./dist/img/hannah-logo.png" class="width100" alt="Hannah logo">
					</figure>
				</div>
				<div class="flex margin-bottom15 width100 margin-bottom30">
					<p class="font1-3em" style="line-height:30px;">
						Ingresa el correo electrónico al que deseas reestablecer tu contraseña:
					</p>
				</div>

				<div class="flex padding10 width100">
					<p class="color-black font1-3em">Correo electrónico</p>
				</div>
				<div class="flex width100 margin-bottom50">

					<input type="email" class="my-input width100 text-center">
				</div>

				<div class="flex width100 margin-bottom30">
					<button class="my-btn width100 text-center text-uppercase back-green color-white" @click="sendEmail">
						Enviar
					</button>
				</div>


				<div class="flex flex-middle width100 flex-center">
					<span class="ion-ios-arrow-back margin-right5 relative color-darkblue" style="font-size:30px; top:2px;"></span>
					<p class="anchor margin0 font1-3em text-center color-darkblue" @click="goBack">
						
						Regresar
					</p>
				</div>

			</article>
		</section>
	</transition>
</template>