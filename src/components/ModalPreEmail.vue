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

.closeFixer{
  max-width: 380px;
  margin: 0px auto;
}

.modal-container {
  max-width: 360px;
  margin: 0px auto;
  max-height: 80vh;
  overflow: auto;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
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
      <div class="modal-wrapper relative">

        
        <section class="closeFixer relative">

          <div class="absolute pointer  rounded flex flex-middle flex-center" style="top:-40px;right:2px; border:2px solid white; width:30px; height:30px;"  @click="$emit('closeModal')">
            <span class="ion-close-round color-white font20"></span>
          </div>
          <div class="modal-container relative">
            

          <div class="modal-header flex flex-center">
            <div class="flex flex-center flex-middle text-center margin-bottom20">
              <h4 class="color-black text-center  font-bold font20">Previsualizacion de e-mail:</h4>
            </div>
          </div>
          <article class="margin-bottom30" style="border: 2px solid #aaa;"  >
            <div class="flex flex-center flex-middle margin-top20" style="border-radius:2px; min-height:110px;">
              <span class="color-green" style="font-weight:bold; font-size:28px;">Logo</span>


            </div>
            <figure class="" style="width: 2vw" v-if="logo">
              <img src="sdsd.cd" alt="">
            </figure>
            <div class="padding-bottom20">
              <p class="text-center font1em text-uppercase" style="padding:0 5px;">Pablo preciado de unexpect te ha enviado una solicitud de cobro.</p>
            </div>
             
          </article>



          <article class="modal-body margin0 text-center ">
            <div class=" margin-bottom20">
              <h3 class="font1em">¡Hola Juan! te mando el cobro correspondiente a este mes. ¡Saludos!</h3>
            </div>
            <article class=" margin-bottom20">
              <div class="back-darkgray flex">
                <article class="padding15 text-center" style="border-right:1px solid white; min-width:150px;">
                  <h3 class="color-white text-uppercase font-normal font1em">Total a cobrar</h3>
                </article>
                <article class="padding15">
                  <h3 class="color-white"><span style="margin-right:3px;">$</span><span>1,000.00</span></h3>
                </article>
              </div>
            </article>

            <div class=" margin-bottom30">
              <h3 class="font1em">Para pagar da click en el siguiente boton.</h3>
            </div>

            <div class="flex flex-center width100 margin-bottom30">
              <button class="my-btn width100 text-center text-uppercase back-green color-white" style="width:70%;">
                Pagar
              </button>
            </div>

            <div class="margin-bottom10">
              <p class="anchor color-blue">Ya he realizado este pago</p>
            </div>

            <div>
              <p class="anchor color-blue">Ya no quiero recibir estos correos nunca más</p>
            </div>

 
          </article>
       <!--   

          <div class="modal-footer ">
           

             
          </div> -->
        </div>
        </section>
        
      </div>
    </div>
  </transition>
</template>
