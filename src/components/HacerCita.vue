<script>

import ModalProgramLater from './ModalProgramLater.vue'
	export default {
		data(){
			return {
				showModal: true,
				repeatSend: true,
			}
		},
		components:{
			ModalProgramLater
		},
		methods:{
			forgotPassword(){
				this.$router.push('olvide-contrasena')
			},
			setRepeat(value){
				this.repeatSend = value
			}
		}
	}
</script>



<template>
	<section class="back-white">
		<article class="my-container padding15">
			<div class="padding15">
				<h2 class="text-uppercase text-center font25 font-bold">Cita</h2>
			</div>

			<div class="padding15 margin-bottom20">
				<p class="font25 text-center">Indica el Nombre completo y número celular del citado</p>
			</div>

			<div class="center-block margin-bottom20" style="width: 80%">
				<article class="">
					<h3 class="font-normal font20">Nombre completo</h3>
					<div class="margin-top10 relative">
						<input type="text" class="my-input">
						<span class="absolute font30 color-gplus" style="top:20px; left:-20px">*</span>
					</div>
				</article>
			</div>


			<div class="center-block margin-bottom30" style="width: 80%">
				<article class="">
					<h3 class="font-normal font20">Número Celular</h3>
					<div class="margin-top10 relative">
						<input type="text" class="my-input">
						<span class="absolute font30 color-gplus" style="top:20px; left:-20px">*</span>
					</div>
				</article>
			</div>

			<div class=" width100 margin-bottom30">
				<button class="my-btn width100 text-center text-uppercase back-green color-white">
					<h3 class="margin0 text-uppercase">Continuar</h3>
				</button>
			</div>

			<article>

				<div>
					<article class="">
						<p class="font23 ">¿Deseas programar para que se   repita el envío?</p>
					</article>
					

					<article class="flex padding20">
						<div class="flex flex-middle margin-right30">
							<div class="square20 rounded padding5 pointer" style="background: #ccc" >
								<div class="back-green width100 height100 flex rounded" v-if="repeatSend" ></div>
							</div>
							<p class="font20 margin-left10" @click="setRepeat(true)">Si</p>
						</div>

						<div class="flex flex-middle">
							<div class="square20 rounded padding5 pointer" style="background: #ccc" @click="setRepeat(false)">
								<div class="back-green width100 height100 flex rounded" v-if="!repeatSend" ></div>
							</div>
							<p class="font20 margin-left10"  @click="setRepeat(false)">No</p>
						</div>
					</article>
					
				</div>
				<button class="my-btn width100 text-center text-uppercase back-green color-white">
					<h3 class="margin0 text-uppercase">Enviar ahora y guardar</h3>
				</button>
				<button class="my-btn width100 text-center text-uppercase color-white" style="background: #2ecc71;">
					<h3 class="margin0 text-uppercase">Programar para después</h3>
				</button>
			</article>

			<div class=" width100 padding20-0">
				 <p class="text-center color-gray font20 margin-bottom10">Usuario: Maria del socorro ramirez</p>
				 <p class="text-center color-gray font20">Sucursal: Plaza del sol</p>
			</div>
			
			
		</article>
	</section>
</template>