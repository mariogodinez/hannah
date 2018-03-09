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
			 
		}
	}
</script>



<template>
	<div class="back-white height100vh flex flex-middle" >
		<section class="my-container">
			<article class="padding20">
				<h2 class="text-uppercase font-bold font25 text-center">Bienvenido</h2>
			</article>

			<article class="padding10 flex flex-center">
				 <p class="font20 text-center" style="line-height:30px; width:310px;">
					Selecciona para crear una nueva cita o un nuevo cobro.
				</p>
			</article>


			<article class="padding20">
				<div class="flex width100 margin-bottom20">
					<button class="my-btn width100 text-center text-uppercase back-green color-white">
						Cita
					</button>
				</div>

				<div class="flex width100 margin-bottom20">
					<button class="my-btn width100 text-center text-uppercase back-darkblue color-white">
						Cobro
					</button>
				</div>
			</article>

			<br><br>
			<br><br>

			
		</section>
	</div>
</template>