
<script>
	import DatePicker from 'vuejs-datepicker'
	import ModalFilter from './ModalFilter.vue'

	export default {
		data(){
			return {
				filters: false,
				dateStart: '',
				dateEnd: '',
				items:[{
					scroll: true,
				},
				{
					scroll: false,
				}
				]
			}
		},
		components:{
			DatePicker,
			ModalFilter
		},
		computed:{
			watchEnvios(){
				return this.$store.getters.watchEnvios
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			changeView(value){
				this.$store.dispatch('setEnvios', value)
			},
			toggleScroll(place){
				this.items[place].scroll = !this.items[place].scroll
			}
		}
	}
</script>

<template>
	<section class="height100vh back-white">
		<ModalFilter v-if="filters" @closeModal="filters = false"></ModalFilter>
		<article class="back-hannah  margin-bottom20">
			<article class="my-container">
				<div class="padding15" style="padding-bottom:0; padding-top:20px;">
					<h2 class="color-white font1-5em">Cobros</h2>
				</div>
			</article>
			
			<div class="flex my-container">
				<article class="width100 padding10 margin-right30 color-white pointer" :class="{'border3bottom-white' : watchEnvios == 0}" style="border-bottom:3px solid transparent; margin-bottom:2px;" @click="changeView(0)">
					<h3 class="color-white font-normal font1em">Envios Programados</h3>
				</article>

				<article class="width100 padding10  color-white  pointer" :class="{'border3bottom-white' : watchEnvios == 1}" style="border-bottom:3px solid transparent; margin-bottom:2px;" @click="changeView(1)">
					<h3 class="color-white font-normal font1em">Envios y cobros</h3>
				</article>
			</div>
		</article>

		<div v-show="watchEnvios== 0">
			<article class="my-container padding10">
				<div class="width100 flex relative">
					<input placeholder="Buscar..."type="text" class="my-input" style="padding:10px; border-width:1px; background:white;">
					<span class="ion-search absolute font23 color-gray" style="top:10px; right:15px;"></span>
				</div>
			</article>

			<article class="my-container padding10">
				<h3>Paginator here</h3>
			</article>

			<section class="my-container">
				<article class="flex flex-right" style="padding-top:20px;">
					<h4 class="font1-5em padding-right10">$ 3,478.89</h4>
				</article>
				<div class="padding10 margin-bottom10" v-for="(i, index) in items" @click="toggleScroll(index)">
					<section class="flex flex-between flex-middle back-lightgray padding15  relative pointer" >
						<article class="flex">
							<div class=" "  style="margin-right:10px; width:190px; " >
								<p class="font1em font-bold margin-bottom5">13/OCT/18</p>
								<p class="font1em font-bold">11:30 Hrs.</p>
							</div>
							<div class=" "  >
								<p class="font1em font-bold margin-bottom5">Juan Manuel Perez Rosales</p>
								<p class="font1em">juan@gmail.com</p>
							</div>
						</article>
						 
						<div class=" " style="right: 20px; top: 22px;">
							<span class="ion-chevron-down" v-show="!i.scroll"></span>
							<span class="ion-chevron-up" v-show="i.scroll"></span>

						</div>
					</section>
					<section class="flex-middle back-lightgray padding15  relative pointer" v-show="i.scroll">
						<article class="flex">
							<div class=" "  style="margin-right:10px; width:190px;  " >
								<p class="font1em font-bold margin-bottom5">Cant: $850</p>
								<p class="font1em font-bold">Usuario: Pablo Preciado </p>
							</div>
						</article>
						<article class="padding-top5 flex flex-right">
							<div class="font1em flex">
								<p class="margin-right15 anchor flex flex-middle color-darkblue"><span class="ion-edit" style="margin-right:2px;"></span>Editar</p>
								<p class="anchor flex flex-middle color-darkblue"><span class="ion-close" style="margin-right:2px;"></span>Eliminar</p>

							</div>
						</article>
						 
					</section>
					 
				</div>
			</section>
			<article class="my-container padding10">
				<h3>Paginator here</h3>
			</article>
		</div>
		

		<div v-show="watchEnvios == 1">
			<article class="my-container padding10">
				<div class="width100 flex relative">
					<input placeholder="Buscar..."type="text" class="my-input" style="padding:10px; border-width:1px; background:white;">
					<span class="ion-search absolute font23 color-gray" style="top:10px; right:10px;"></span>
				</div>
			</article>
			<section class="padding20-0 back-white">
				<article class="my-container flex flex-center ">
					 <button class="my-btn back-darkblue flex text-center flex-center flex-middle" @click="filters = true" style="width:80%; padding:.6em;">
					 	<h3 class="color-white margin-right10 text-uppercase font1em">Abrir Filtros</h3>
					 	<span class="color-white">
					 		<i class="fa fa-filter"></i>
					 	</span>
					 </button>
				</article>
			</section>

			<article class="my-container padding10">
				<h3>Paginator here</h3>
			</article>

			<section class="my-container">
				<article class="flex flex-right " style="padding-top:20px;">
					<h4 class="font1-5em padding-right10">$ 3,478.89</h4>
				</article>
				<div class="padding10 margin-bottom10" v-for="(i, index) in items" @click="toggleScroll(index)">
					<section class="flex flex-between flex-middle back-lightgray padding15  relative pointer" >
						<article class="flex">
							<div class=" "  style="margin-right:10px; width:190px; " >
								<p class="font1em font-bold margin-bottom5">13/OCT/18</p>
								<p class="font1em font-bold">11:30 Hrs.</p>
							</div>
							<div class=" "  >
								<p class="font1em font-bold margin-bottom5">Juan Manuel Perez Rosales</p>
								<p class="font1em">juan@gmail.com</p>
							</div>
						</article>
						 
						<div class=" " style="right: 20px; top: 22px;">
							<span class="ion-chevron-down" v-show="!i.scroll"></span>
							<span class="ion-chevron-up" v-show="i.scroll"></span>
						</div>
					</section>
					<section class="flex-middle back-lightgray padding15  relative pointer" v-show="i.scroll" >
						<article class="flex">
							<div class=" "  style="margin-right:10px; width:190px;  " >
								<p class="font1em font-bold margin-bottom5">Cobro: $850</p>
								<p class="font1em font-bold">Costo: $20</p>
							</div>
							<div class=" "  >
								<p class="font1em font-bold margin-bottom5"><span class="margin-right15">Pagado: 12/NOV/18</span> <span>9:20 hrs.</span></p>
								<p class="font1em"> <span >Status:</span> <span class="color-green font-bold">PAGADO</span></p>
							</div>
						</article>
						<article class="padding-top10">
							<h3 class="font1em">Usuario: Pablo Preciado </h3>
						</article>
						 
					</section>
					 
				</div>
			</section>

			<article class="my-container padding10">
				<h3>Paginator here</h3>
			</article>
		</div>
		
 
	</section>
</template>