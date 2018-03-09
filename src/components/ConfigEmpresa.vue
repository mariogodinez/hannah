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
			toggleChangePass(){
				this.changePass = !this.changePass
			},
			goGack(){
				this.$router.go(-1)
			},
			saveChanges(){


				// cuando se guarden cambios que se  redirirecciones para atras y hacer scrollup en la otra vista
				// this.goGack()
			}
		}
	}
</script>



<template>
	<div class="back-white height100vh" >
		<section class="my-container padding10">
			<article class="padding-top20">
				<h2 class="text-uppercase font1-5em">Editar Empresa</h2>
			</article>

			<article class="margin-bottom30">
				<div class="flex flex-center flex-middle margin-top20 relative" style="border-radius:2px;border: 1px solid #aaa; width:190px; min-height:120px;">
					<span class="color-green" style="font-weight:bold; font-size:28px;">Logo</span>
					<div class="absolute  pointer"   style="bottom:0px; right:0; background:rgba(224, 224, 224, 0.75);">
							<div class="pointer flex flex-center " >
					            <div   class=" pointer flex  text-center font-bold  pointer   "  >
					              <input class="width100 pointer" type="file" style="opacity:0;position:absolute;" id="myFile" name="file">
					              <label class="flex padding5-15 pointer" for="myFile" style="  width:100%;  " >
					                  <span class="ion-camera font25 pointer color-gray"></span>
					              </label>
					            </div>
					        </div>
						</div>
				</div>
				<figure class="" style="width: 2vw" v-if="logo">
					<img src="sdsd.cd" alt="">
				</figure>
			</article>
			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em margin-bottom5">Compañia</h3>
				<div class="flex">
					<input type="text" class="my-input">
				</div>
			</article>

			 
			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em margin-bottom10">Domicilio</h3>
				<h3 class="color-black font-normal line-height30 font20 margin-bottom5">Calle</h3>

				<div class="flex">
					<input type="text" class="my-input">
				</div>
			</article>

			<article class="margin-bottom30 flex">
				<section class="flex" >
					<div class=" margin-right10 ">
						<h3 class="color-black font-normal line-height30 font1em margin-bottom5">No. Ext.</h3>
						<div class="flex">
							<input type="text" class="my-input">
						</div>
					</div>
					<div class=" margin-right10" >
						<h3 class="color-black font-normal line-height30 font1em margin-bottom5">No. Int.</h3>
						<div class="flex">
							<input type="text" class="my-input">
						</div>
					</div>
				</section>
				
				<div class="">
					<h3 class="color-black font-normal line-height30 font1em margin-bottom5">Colonia</h3>
					<div  class="flex">
						<input type="text" class="my-input">
					</div>
				</div>
			</article>



			<article class="margin-bottom30 flex">
				<section class="flex width100" >
					<div class=" margin-right10 width100">
						<h3 class="color-black font-normal line-height30 font1em margin-bottom5">Cuidad</h3>
						<div class="flex">
							<input type="text" class="my-input">
						</div>
					</div>
					 
				</section>
				
				<div class=" ">
					<h3 class="color-black font-normal line-height30 font1em margin-bottom5">C.P.</h3>
					<div class="flex">
						<input type="text" class="my-input">
					</div>
				</div>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em margin-bottom5">Teléfono</h3>
				<div class="flex">
					<input type="text" class="my-input">
				</div>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em margin-bottom5">Correo</h3>
				<div class="flex">
					<input type="text" class="my-input">
				</div>
			</article>

			<article class="margin-bottom30">
				<h3 class="color-darkblue font-normal text-uppercase font1em margin-bottom5">R.F.C.</h3>
				<div class="flex">
					<input type="text" class="my-input">
				</div>
			</article>


			 
 
		</section>

		<section>
			<article class="my-container padding20 flex flex-center" >
				 <button class="back-green my-btn font1em" style="width:75%;">
				 	<h3 class="color-white font1em text-uppercase">
				 		Guardar Cambios
				 	</h3>
				 </button>
			</article>

			<article class="my-container padding10 flex flex-center" >
				 <p class="anchor font1-5em font-bold" @click="goGack">Cancelar</p>
			</article>
		</section>
		 
		<br>
		<br>
		<br>
	</div>
</template>