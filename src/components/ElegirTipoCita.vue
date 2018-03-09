<script>

import ModalProgramLater from './ModalProgramLater.vue'
	export default {
		data(){
			return {
				showModal: true
			}
		},
		components:{
			ModalProgramLater
		},
		methods:{
			forgotPassword(){
				this.$router.push('olvide-contrasena')
			}
		}
	}
</script>



<template>
	<section class="back-white">
		<article class="my-container padding15">
			<div class="padding15">
				<h2 class="text-uppercase text-center font25 font-bold">Citas</h2>
			</div>

			<div class="padding15 margin-bottom30">
				<p class="font25 text-center">¿Cómo deseas enviar tu recordatorio de cita?</p>
			</div>

			<div class=" width100 margin-bottom30">
				<button class="my-btn width100 text-center text-uppercase back-green color-white">
					<h3 class="margin0 text-uppercase">SMS</h3>
				</button>
			</div>

			<div class="width100 margin-bottom30">
				<button class="my-btn width100 text-center text-uppercase back-darkblue color-white">
					<h3 class="margin0 text-uppercase">E-Mail</h3>
				</button>
			</div>
			
		</article>
	</section>
</template>