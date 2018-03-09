<script>
  import Spinner from './Spinner.vue'

  export default {
    data(){
      return {
        changePass: false,
        userInput: false,
        userModel: 'Carlos cerda',
        spinner: false
      }
    },
    components:{
      Spinner
    },
    methods:{
      toggleChangePass(){
        this.changePass = !this.changePass
      },
      addUser(){
        this.$router.push('/agregar-usuario')
      },
      editUserInputs(){
        this.$router.push('/editar-usuario')
      },
      editUser(){
         
         this.userInput = true
      },
      editUserAjax(){
        let self = this
         this.spinner = true

         setTimeout(function(){
            self.userInput = false
            self.spinner = false
           },2000)
      },
      editEmpresa(){
        this.$router.push('/configuracion-empresa')
      }
    }
  }
</script>


<template>
	<section class="height100vh back-white">
    <Spinner v-if="spinner"></Spinner>
		 <article class="my-container">
          <section class="padding20-10 flex flex-between flex-middle">
            <div>
              <h3 class="text-uppercase font1-5em">Tu usuario</h3>
            </div>
            
          </section>


          <section class="padding10">
            <div class="margin-bottom5 flex flex-between flex-middle">
              <h4 class="color-darkblue font1em text-uppercase">Usuario</h4>
              <div v-show="!userInput">
                <p class="flex flex-middle">
                  <span class="fa fa-edit font1em color-darkblue"></span>
                  <span class="anchor color-darkblue font1em" @click="editUser()">Editar Usuario</span>
                </p>
              </div>
            </div>

            <div>
              <h4 class="color-black font1-3em" v-show="!userInput">{{userModel}}</h4>
            </div>
          </section>




          <section v-show="userInput">
            <article class="padding0-10" >
              <input type="text" class="my-input" v-model="userModel">
            </article>
            <div class="flex flex-center padding10">
              <button class="my-btn color-white back-green" @click="editUserAjax">
                Guardar Cambios
              </button>
            </div>
          </section>


          <section class="padding10">
            <div class="margin-bottom5">
              <h4 class="color-darkblue font1em text-uppercase">Rol</h4>
            </div>

            <div>
              <h4 class="color-black font1-3em">Administrador</h4>
            </div>
          </section>

          <section class="padding10">
            <div class="margin-bottom5">
              <h4 class="color-darkblue font1em text-uppercase">Correo</h4>
            </div>
            <div>
              <h4 class="color-black font1-3em">
                carlos.cerdau@unexpect.mx
              </h4>
            </div>
          </section>

           <article class="padding10 flex flex-between flex-middle" >
            <div >
              <h4 class="color-darkblue text-uppercase font1em">Contraseña</h4>
              <h3 class="color-black font-normal font1-3em" v-show="!changePass">**********</h3>
            </div>

            <div class="flex flex-middle padding-bottom20">
               <p class="anchor color-blue margin-right5 font1em flex flex-middle" @click="toggleChangePass">Cambiar contraseña</p>
               <span class=" font1em color-blue relative" style="top:2px;" v-if="!changePass">
                <i class="fa fa-angle-double-down"></i>
               </span>
               <span class=" font1em color-blue relative" style="top:2px;" v-else>
                <i class="fa fa-angle-double-up"></i>
               </span>
            </div>
          </article>

          <section>
            <transition appe name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <article class="my-container padding20" v-if="changePass">
              <div class="flex padding5 width100">
                <p class="color-black font1em">Contraseña actual</p>
              </div>
              <div class="flex width100 margin-bottom20">
                <input type="password" class="my-input width100 ">
              </div>

              <div class="flex padding5 width100">
                <p class="color-black font1em">Nueva contraseña</p>
              </div>
              <div class="flex width100 margin-bottom20">
                <input type="password" class="my-input width100 ">
              </div>

              <div class="flex padding5 width100">
                <p class="color-black font1em">Confirmar nueva contraseña</p>
              </div>
              <div class="flex width100 margin-bottom30">
                <input type="password" class="my-input width100 ">
              </div>

              <div class="flex flex-center width100 margin-bottom30" >
                <button class="my-btn width100 text-center text-uppercase back-green color-white"style="width:60%;">
                  Guardar
                </button>
              </div>
            </article>

            </transition>
        </section>


         
        
     
     </article>

     <div class="my-container padding10" >
      <article class="margin-bottom20  padding0">
         <div>
          <h3 class="text-uppercase font1em">Otros usuarios</h3>
        </div>
      </article>
     
       <article class="margin-bottom20">
         <div class="relative flex">
           <input placeholder="Buscar..." type="text" class="my-input" style="padding:10px; background:white; border-width:1px;">
           <span class="fa fa-search absolute font1em color-gray" style="right:10px; top:10px;"></span>
         </div>
       </article>

       <article class="padding-left10 padding-bottom10 padding-top20 padding0-20" v-for="(i, index) in 3">
         <div class="flex flex-middle flex-between">
          <h3 class="font1-3em">{{index +1}}. Juan manuel Prez</h3>
          <span class="fa fa-edit font1-3em color-blue pointer" @click="editUserInputs"></span>
        </div>
        <div class="padding5 margin-left15">
          <h4 class="color-gray font1em">Administrador</h4>
        </div>
       </article>

       <article class="padding20">
         <p class="color-blue font1-3em anchor" @click="addUser()"><span class="fa fa-plus-circle"></span> Agregar nuevo usuario</p>
       </article>

       <article class="padding20">
        
         
       </article>
    </div>
	</section>
</template>