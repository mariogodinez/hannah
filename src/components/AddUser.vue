<script>
  export default {
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>


<template>

  <transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
  	<section class="height100vh back-white">
  		 <article class="my-container padding20">
  			<section class="padding20-0 flex flex-between flex-middle">
            <div>
              <h3 class="text-uppercase font1em">Agregar usuario</h3>
            </div>
        </section>

        <section class="padding10-0 ">
          <div class="flex padding5 width100">
            <p class="color-black font20 color-darkblue text-uppercase">Nombre</p>
          </div>
          <div class="flex width100 ">
            <input type="text" class="my-input width100" style="padding:10px;">
          </div>
        </section>

        <section class="padding10-0 ">
          <div class="flex padding5 width100">
            <p class="color-black font20 color-darkblue text-uppercase">Correo Electrónico</p>
          </div>
          <div class="flex width100 ">
            <input type="text" class="my-input width100" style="padding:10px;">
          </div>
        </section>

        <section class="padding10-0 margin-bottom20">
          <div class="flex padding5 width100">
            <p class="color-black font20 color-darkblue text-uppercase">Rol</p>
          </div>
          <div class="flex width100 ">
            <div class="my-select font1em  width100 color-white  " style=" background:#2f4154;">
                    <select name="" id="">
                      <option value="month">-</option>

                      <option value="month">Administrador</option>
                      <option value="month">Usuario</option>

                    </select>
                    <div class="my-select-icon color-black">
                      <span class="ion-arrow-down-b"></span>
                    </div>
                 </div>
          </div>
        </section>
          <section class="padding10-0 ">
            <div class="flex padding5 width100">
              <p class="color-black font20 color-darkblue text-uppercase">Contraseña</p>
            </div>
            <div class="flex width100 ">
              <input type="password" class="my-input width100 " style="padding:10px;">
            </div>
          </section>

          <section class="padding10-0 ">
            <div class="flex padding5 width100">
              <p class="color-black font20 color-darkblue text-uppercase">Confirmar Contraseña</p>
            </div>
            <div class="flex width100 ">
              <input type="password" class="my-input width100 " style="padding:10px;">
            </div>
          </section>
         <article class="  padding20" >
         </article>



         <div class="flex flex-center width100 margin-bottom30" >
          <button class="my-btn width100 text-center text-uppercase back-green color-white"style="width:60%;">
            Agregar
          </button>
        </div>

        <div class="flex flex-center width100 margin-bottom30" >
          <p class="text-uppercase font1em color-darkblue anchor" @click="goBack">Cancelar</p>
        </div>


        
      </article>
  	</section>
  </transition>
</template>