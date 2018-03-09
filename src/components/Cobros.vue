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
			 setPago(way){
			 	if(way == 'whats'){
			 		this.$router.push('/cobrar-whatsapp')
			 	}

			 	if(way == 'email'){
			 		this.$router.push('/cobrar-email')
			 	}
			 }
		}
	}
</script>



<template>
	<transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
		<div class="back-white height100vh flex flex-middle" >
			<section class="my-container">
				<article class="padding20">
					<h2 class="text-uppercase font-bold font1-5em text-center">Cobros</h2>
				</article>

				<article class="padding10 flex flex-center">
					 <p class="font1-3em text-center" style="line-height:30px; width:350px;">
						¿Cómo deseas enviar el cobro a tu cliente?
					</p>
				</article>


				<article class="padding20">

					<div class="flex width100 margin-bottom20">
						<button class="my-btn width100 text-center text-uppercase color-white" style="background:#2ecc71;" @click="setPago('whats')">
							Whatsapp/ chat
						</button>
					</div>

					<div class="flex width100 margin-bottom20">
						<button class="my-btn width100 text-center text-uppercase back-darkblue color-white"  @click="setPago('email')">
							E-mail
						</button>
					</div>
					<!-- <div class="flex width100 margin-bottom20">
						<button class="my-btn width100 text-center text-uppercase back-green color-white">
							SMS
						</button>
					</div>
	 -->
					
				</article>

				<br><br>
				<br><br>

				
			</section>
		</div>
	</transition>
</template>