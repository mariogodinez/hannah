
<script>
	export default {
		data(){
			return {
				showIcon: false,
				showText: false
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		},
		mounted(){
			let self = this
			setTimeout(function(){
				self.showIcon = true
			},400)

			setTimeout(function(){
				self.showText = true
			},800)
		}
	}
</script>

<template>
	<transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
		<section class="flex flex-center flex-middle" >
			<article class="flex flex-center flex-column flex-middle relative height100vh" style="top:-10px; width: 320px; overflow:hidden;">
				<div class="margin-bottom30">
					<figure style="width:190px">
						<img src="./dist/img/hannah-logo.png" class="width100" alt="Hannah logo">
					</figure>
				</div>
				
				<div class="margin-bottom20" style="height:110px;">
					 <transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">
					<figure style="width:100px;" v-if="showIcon">
						<img src="./dist/img/tick-inside-circle.svg" class="width100" alt="check mark">
					</figure>

				</transition>
				</div>

				<div class="flex margin-bottom15 width100 margin-bottom30" style="height:80px;">
					<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">
						<p class="font20 text-center" style="line-height:30px;" v-if="showText">
							Se ha enviado al correo electrónico el acceso para recuperar contraseña.
						</p>
					 
					</transition>
				</div>


			</article>
		</section>
	</transition>
</template>