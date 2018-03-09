
<script>
	export default {
		data(){
			return {

			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<template >
	<transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
		<div class="back-white">
			<article class="back-hannah padding15 margin-bottom20">
				<h2 class="color-white font1-5em">Notificaciones</h2>
			</article>
			<section class="height100vh back-white my-container">
			

				<article class="back-white padding15">
					<section class=" flex flex-center">
						<div class="back-lightgray padding10 text-center" style="width:150px; border-radius:20px;">
							<h4 class="text-uppercase font1em">HOY</h4>
						</div>
					</section>

					<div class="margin15-0" v-for="i in 2">
						<section class="back-lightgray padding20  relative pointer" >
							<div class="absolute" style="left: 15px; top: 21px;">
								<span class="ion-close"></span>
							</div>
							<div class="padding-left20" style="width:90%;">
								<p class="font1em">El cliente <span class="font-bold">Juan Ramos Ramirez </span> ha realizado el pago por $1,000.00</p>
							</div>
							<div class="absolute" style="right: 15px; top: 25px;">
								<span class="ion-chevron-down"></span>
							</div>
						</section>
						<section class="back-lightgray padding10" style="border-top:1px solid ;">
							<div class="paddin">
								<h3 class="font1em color-gray font-normal ">Fecha de cobro: 20/ENE/18</h3>
								<h3 class="font1em color-gray font-normal ">Fecha de pago: 26/ENE/18</h3>
								<h3 class="font1em color-gray font-normal ">Via: 20/ENE/18</h3>
							</div>
						</section>
					</div>
						
					
				</article>

				<article class="back-white padding15">
					<section class=" flex flex-center">
						<div class="back-lightgray padding10 text-center" style="width:150px; border-radius:20px;">
							<h4 class="text-uppercase font1em">Ayer</h4>
						</div>
					</section>

					<div class="margin15-0" v-for="i in 2">
						<section class="back-lightgray padding20  relative pointer" >
							<div class="absolute" style="left: 15px; top: 21px;">
								<span class="ion-close"></span>
							</div>
							<div class="padding-left20" style="width:90%;">
								<p class="font1em">El cliente <span class="font-bold">Juan Ramos Ramirez </span> ha realizado el pago por $1,000.00</p>
							</div>
							<div class="absolute" style="right: 15px; top: 25px;">
								<span class="ion-chevron-down"></span>
							</div>
						</section>
						<section class="back-lightgray padding10" style="border-top:1px solid ;">
							<div class="paddin">
								<h3 class="font1em color-gray font-normal ">Fecha de cobro: 20/ENE/18</h3>
								<h3 class="font1em color-gray font-normal ">Fecha de pago: 26/ENE/18</h3>
								<h3 class="font1em color-gray font-normal ">Via: 20/ENE/18</h3>
							</div>
						</section>
					</div>
						
					
				</article>

				<article class="back-white padding15">
					<section class=" flex flex-center">
						<div class="back-lightgray padding10 text-center" style="width:150px; border-radius:20px;">
							<h4 class="text-uppercase font1em">15/Ene/18</h4>
						</div>
					</section>

					<div class="margin15-0" v-for="i in 2">
						<section class="back-lightgray padding20  relative pointer" >
							<div class="absolute" style="left: 15px; top: 21px;">
								<span class="ion-close"></span>
							</div>
							<div class="padding-left20" style="width:90%;">
								<p class="font1em">El cliente <span class="font-bold">Juan Ramos Ramirez </span> ha realizado el pago por $1,000.00</p>
							</div>
							<div class="absolute" style="right: 15px; top: 25px;">
								<span class="ion-chevron-down"></span>
							</div>
						</section>
						<section class="back-lightgray padding10" style="border-top:1px solid ;">
							<div class="paddin">
								<h3 class="font1em color-gray font-normal ">Fecha de cobro: 20/ENE/18</h3>
								<h3 class="font1em color-gray font-normal ">Fecha de pago: 26/ENE/18</h3>
								<h3 class="font1em color-gray font-normal ">Via: 20/ENE/18</h3>
							</div>
						</section>
					</div>
				</article>
			</section>
		</div>
	</transition>
	
</template>