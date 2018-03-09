<script>

import datepicker from 'vuejs-datepicker'
	export default{
		data(){
			return {
        date: '',
        dateStart: ''
			}
		},
    components:{
      datepicker
    },
		props:['error'],
    methods:{
      close(){
        this.$emit('closeModal')
      }
    }
	}
</script>
<style scoped>
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
  padding: 20px 20px;
  /*background-color: #fff;*/
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
    <div class="modal-mask" style="background-color:rgba(182, 197, 204, .98);">
      <div class="modal-wrapper">
        <div class="modal-container relative" style=" background-color: transparent; box-shadow:0 0 0 transparent;">
            
            <div class="margin-bottom20 relative">
              <p class="margin-bottom5 color-white font1em">Fecha desde</p>
              <datepicker placeholder="--/--/--" v-model="dateStart"></datepicker>
              <span class="ion-chevron-down absolute color-white" style="top:46px; right:10px;"></span>
            </div>

            <div class="margin-bottom20 relative">
              <p class="margin-bottom5 color-white font1em">Fecha hasta</p>
              <datepicker placeholder="--/--/--" v-model="dateStart"></datepicker>
              <span class="ion-chevron-down absolute color-white" style="top:46px; right:10px;"></span>
            </div>

            <div class="padding10"></div>

            <div class="margin-bottom20 relative" style="padding-bottom: 30px;">
              <p class="margin-bottom5 color-white font1em">Status</p>
               <div class="my-select font1em  width100 color-white margin-right20" style=" background:#2f4154; border:2px solid white; font-size:.9em;">
                  <select name="" id="" style="font-size:.9em;">
                    <option  >-</option>
                  </select>
                  <div class="my-select-icon color-black">
                  </div>
               </div>
              <span class="ion-chevron-down absolute color-white" style="top:48px; right:10px;"></span>
            </div>
          </article>
          
          <section >
            <div class="flex flex-center padding10">
              <button class="my-btn color-white back-green text-uppercase" style="padding:11px 50px;" >
                Filtrar
              </button>
            </div>

            <div class="flex flex-center padding10">
               <p class="color-white text-center anchor font20 text-uppercase" @click="close">Cancelar</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>
