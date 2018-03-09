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
	<transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
		<div class="back-white height100vh" >
			<section class="my-container">
			 	<article class="padding10-20 margin20-0 back-lightgray flex flex-between" >
			 		<div>
			 			<p class="font20 font-bold">Total</p>
			 		</div>

			 		<div>
			 			<p class="font20 font-bold">$1,000.00</p>
			 		</div>
			 	</article>

			 	<article class="padding20-0" style="padding-top:0;">
			 		<h2 class="font20 margin-bottom5">Nombre del tarjeta habiente</h2>
			 		<div class="flex">
			 			<input type="text" class="my-input font1em" >
			 		</div>
			 	</article>

			 	<article class="padding10-0">
			 		<h2 class="font20 margin-bottom5">Número de tarjeta</h2>
			 		<div class="flex">
			 			<input type="text" class="my-input font1em" >
			 		</div>
			 	</article>

			 	<article class="padding10-0">
			 		<h2 class="font20 margin-bottom5">Código de seguridad</h2>
			 		<div class="flex">
			 			<input type="text" class="my-input font1em" >
			 		</div>
			 	</article>

			 	<article class="padding10-0">
			 		<h2 class="font20 margin-bottom5">Expira en:</h2>
			 		<div class="flex">
			 			<div class="my-select font1em  width100 color-white margin-right20" style=" background:#2f4154;">
				            <select name="" id="">
				              <option value="month">MM</option>
				            </select>
				            <div class="my-select-icon color-black">
				              <span class="ion-arrow-down-b"></span>
				            </div>
				         </div>

				         <div class="my-select font1em width100   color-white" style="background:#2f4154;">
				            <select name="" id="">
				              <option value="month">AAAA</option>
				            </select>
				            <div class="my-select-icon color-black">
				              <span class="ion-arrow-down-b"></span>
				            </div>
				         </div>
			 		</div>
			 	</article>

			 	<article class="padding20-0">
			 		<h2 class="font20 margin-bottom5">¿A que correo electrónico te enviaremos tu ticket de pago?</h2>
			 		<div class="flex">
			 			<input type="text" class="my-input font1em" >
			 		</div>
			 	</article>

			 	

				<article class="padding20-0">
			 		<div class="flex width100 margin-bottom20">
						<button class="my-btn width100 text-center text-uppercase back-green color-white">
							PAGAR
						</button>
					</div>
			 	</article>


			 	
			</section>
			 

		</div>
	</transition>
</template>