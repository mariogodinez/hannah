<script>

import datepicker from 'vuejs-datepicker'
	export default{
		data(){
			return {
        date: '',
			}
		},
    components:{
      datepicker
    },
		props:['error']
	}
</script>
<style>
  .modal-mask {
  position: fixed;
  z-index: 999543657658;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 360px;
  margin: 0px auto;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  text-align:center;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header flex flex-center">
            <div class="flex flex-center flex-middle text-center">
              <h2 class="color-black text-center text-uppercase font-bold">Programar para después</h2>
    	  		</div>
          </div>

          <article class="modal-body margin-bottom0 text-center padding20">
           <div class="flex flex-center margin-bottom20">
             <p class="font20 text-center">
                ¿Qué día quieres que se envíe el correo con el cobro?
              </p>
            </div>

            <div class="relative">
              <datepicker language="es" v-model="date" class="width100 pointer text-center" placeholder="DD/MM/AAAA" style="text-align:center !important;"></datepicker>
              <span class="ion-chevron-down absolute color-white" style="top:18px; right:10px;"></span>
            </div>


          </article>

         

          <div class="modal-footer ">
	          <div class="flex flex-center margin-bottom20">
	            <button class="my-btn text-uppercase back-green center-block pointer" style="width:80%" >
	                <h3 class="margin0 color-white text-uppercase">Programar envío</h3>
	            </button>

              
	          </div>

            <div class="flex flex-center">
              <p class="anchor font20 " @click="$emit('closeModal')">
                Cancelar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
