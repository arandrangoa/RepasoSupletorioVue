<template>
  <div class="container">
    <div class="tabla">
        <h1>Lista de productos</h1>
        <div class="consultar">
            <button @click="consultar">Consultar</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Codigo de barras</th>
                    <th>Nombre</th>
                    <th>Accion</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productos" :key="producto.codigoBarras">
                    <td>{{producto.codigoBarras}}</td>
                    <td>{{producto.nombre}}</td>
                    <td>
                        <button @click="ver(producto.links[0].href)">Actualizar</button>
                    </td>
                    <td>
                        <button @click="borrar(producto.codigoBarras)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="mensajeBorrado" v-if="borrado">
            <h1>Producto borrado</h1>
        </div>

    </div>
  </div>
</template>

<script>
import {
    buscarTodosFachada,
    borrarFachada,
} from "../clientes/cliente.js"
export default {
    data(){
        return{
            productos:[],
            borrado:false,
        }
    },
    methods:{
        async consultar(){
            const data=await buscarTodosFachada();
            this.productos=data;
        },

        async borrar(codigoBarras){
            await borrarFachada(codigoBarras);
            this.borrado=true;
            this.consultar();
        },
        ver(url){
            this.$emit("selectProd",url);
            this.borrado=false;
        }
    }

}
</script>

<style>

</style>