<template>
  <div class="container">
    <h3 v-if="mostrarMensaje">{{mensaje}}</h3>

    <div class="formulario">
        <h1>Formulario producto</h1>

        <div class="grupoFormulario">
            <label for="codigoBarras">Codigo de barras</label>
            <input type="text"
            v-model="codigoBarras"
            @click="ocultarMensaje"
            />
        </div>
        <div class="grupoFormulario">
            <label for="nombre">Nombre</label>
            <input type="text"
            v-model="nombre"
            @click="ocultarMensaje"
            />
        </div>
        <div class="grupoFormulario">
            <label for="fechaCaducidad">Fecha de caducidad</label>
            <input type="date"
            v-model="fechaCaducidad"
            @click="ocultarMensaje"
            />
        </div>

        <button @click="guardar">Guardar</button>

    </div>
  </div>
</template>

<script>
import {guardarFachada} from "../clientes/cliente.js"
export default {
    data(){
        return{
            codigoBarras:null,
            nombre:null,
            fechaCaducidad:null,
            mostrarMensaje:false,
            mensaje:"Producto guardado con exito"
        }
    },
    methods:{
        async guardar(){
            const producto={
                codigoBarras:this.codigoBarras,
                nombre:this.nombre,
                fechaCaducidad:this.fechaCaducidad,
            }
            const data= await guardarFachada(producto);
            this.mostrarMensaje=true;
            this.reset();

        },

        reset(){
            this.codigoBarras=null;
            this.nombre=null;
            this.fechaCaducidad=null;
        },

        ocultarMensaje(){
            this.mostrarMensaje=false;
        }

        

    }

}
</script>

<style>

</style>