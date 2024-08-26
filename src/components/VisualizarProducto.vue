<template>
  <div class="container">
    <h3 v-if="mostrarMensaje">{{mensaje}}</h3>

    <div class="formulario">
        <h1>Actualizar Producto</h1>

        <div class="grupoFormulario">
            <label for="codigoBarras">Codigo de barras</label>
            <input type="text"
            v-model="codigoBarras"
            disabled
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

        <button @click="actualizar">Actualizar</button>

    </div>
  </div>
</template>

<script>
import {actualizarFachada} from "../clientes/cliente";
export default {
    props:{
        producto:Object,
    },
    data(){
        return{
            codigoBarras:this.producto.codigoBarras,
            nombre:this.producto.nombre,
            fechaCaducidad:this.producto.fechaCaducidad,
            mostrarMensaje:false,
            mensaje:"Producto actualizado",
        }
    },
    methods:{
        async actualizar(){
            const producto={
                nombre:this.nombre,
                fechaCaducidad:this.fechaCaducidad,
            }
            await actualizarFachada(producto,this.codigoBarras);
            this.mostrarMensaje=true;
        }
    }

}
</script>

<style>

</style>