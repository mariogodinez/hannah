
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

<template>
	<section class="flex flex-center flex-middle" >
		<article class="flex flex-center flex-column flex-middle relative height100vh" style="top:0px; width: 320px; overflow:hidden;">
			<div class="margin-bottom50">
				<figure style="width:190px">
					<img src="./dist/img/hannah-logo.png" class="width100" alt="Hannah logo">
				</figure>
			</div>
			<div class="flex margin-bottom15 width100 margin-bottom30">
				<p class="font20" style="line-height:30px;">
					Ingresa tu nueva contraseña para reestablecerla.
				</p>
			</div>

			<div class="flex padding5 width100">
				<p class="color-black font20">Nueva contraseña</p>
			</div>
			<div class="flex width100 margin-bottom20">
				<input type="password" class="my-input width100 text-center">
			</div>

			<div class="flex padding5 width100">
				<p class="color-black font20">Confirmar nueva contraseña</p>
			</div>
			<div class="flex width100 margin-bottom30">
				<input type="password" class="my-input width100 text-center">
			</div>

			<div class="flex width100 margin-bottom30">
				<button class="my-btn width100 text-center text-uppercase back-green color-white">
					Guardar
				</button>
			</div>

		</article>
	</section>
</template>