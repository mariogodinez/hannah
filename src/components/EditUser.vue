<script>
  export default {
    data(){
      return {
        changePass: false
      }
    }
  }
</script>

<template>
	<section class="height100vh back-white">
		 <article class="my-container padding20">
			<section class="padding20-0 flex flex-between flex-middle">
          <div>
            <h3 class="text-uppercase font1em">Editar usuario</h3>
          </div>
      </section>

      <section class="padding10-0 ">
        <div class="flex padding5 width100">
          <p class="color-black font20 color-darkblue text-uppercase">Nombre</p>
        </div>
        <div class="flex width100 ">
          <input type="text" class="my-input width100 " style="padding:10px;">
        </div>
      </section>

      <section class="padding10-0 ">
        <div class="flex padding5 width100">
          <p class="color-black font20 color-darkblue text-uppercase">Correo Electrónico</p>
        </div>
        <div class="flex width100 ">
          <input type="text" class="my-input width100 " style="padding:10px;">
        </div>
      </section>

      <section class="padding10-0 margin-bottom20">
        <div class="flex padding5 width100">
          <p class="color-black font20 color-darkblue text-uppercase">Rol</p>
        </div>
        <div class="flex width100 ">
          <div class="my-select font1em  width100 color-white  " style=" background:#2f4154;">
                  <select name="" id="">
                    <option value="month">Administrador</option>
                  </select>
                  <div class="my-select-icon color-black">
                    <span class="ion-chevron-down"></span>
                  </div>
               </div>
        </div>
      </section>
      <article class="padding20-0 margin-bottom0 flex flex-between ">
        <div style="height:50px;">
          <h3 class="color-darkblue font-normal text-uppercase font1em">Contraseña</h3>
          <h3 class="color-black font-normal font20" v-show="!changePass">**********</h3>
        </div>

        <div class="flex">
           <p class="anchor color-darkblue margin-right5 font1em " @click="changePass = !changePass">Cambiar contraseña</p> <span class="   color-darkblue" v-show="!changePass">
              <i class="fa fa-angle-double-right font1em" ></i>
           </span>

           <span class="   color-darkblue" v-show="changePass">
              <i class="fa fa-angle-double-down font1em"  ></i>
           </span>
        
        </div>
      </article>

      <section>
      <article class=" " v-show="changePass">
        <div class="flex padding5 width100">
          <p class="color-black font20">Contraseña actual</p>
        </div>
        <div class="flex width100 margin-bottom20">
          <input type="password" class="my-input width100 ">
        </div>

        <div class="flex padding5 width100">
          <p class="color-black font20">Nueva contraseña</p>
        </div>
        <div class="flex width100 margin-bottom20">
          <input type="password" class="my-input width100">
        </div>

        <div class="flex padding5 width100">
          <p class="color-black font20">Confirmar nueva contraseña</p>
        </div>
        <div class="flex width100 margin-bottom30">
          <input type="password" class="my-input width100">
        </div>

        <div class="flex flex-center width100 margin-bottom30" >
          <button class="my-btn width100 text-center text-uppercase back-green color-white"style="width:60%;">
            Guardar
          </button>
        </div>
      </article>
    </section>

        <article class="margin-bottom20" >
         <p class="color-red font1em anchor"><span class="fa fa-trash"></span> Eliminar usuario</p>
       </article>
       <article class="  padding20" >
       </article>


       <div class="flex flex-center width100 margin-bottom30" >
          <button class="my-btn width100 text-center text-uppercase back-green color-white"style="width:60%;">
            Guardar cambios
          </button>
        </div>

      <div class="flex flex-center width100 margin-bottom30" >
        <p class="text-uppercase font1em color-darkblue anchor">Cancelar</p>
      </div>


      
    </article>
	</section>
</template>