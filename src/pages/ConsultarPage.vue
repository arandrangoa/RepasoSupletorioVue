<template>
  <lista-productos @selectProd="consultar"/>
  <visualizar-producto :producto="this.producto" v-if="this.producto" />
</template>

<script>
import ListaProductos from '@/components/ListaProductos.vue'
import {buscarPorCodigoFachada} from "../clientes/cliente.js";
import VisualizarProducto from '@/components/VisualizarProducto.vue';
export default {
  components: { ListaProductos, VisualizarProducto },

  data(){
    return{
      producto:null,
    }
  },
  methods:{
    async consultar(url){
      const data=await buscarPorCodigoFachada(url);
      this.producto={
        codigoBarras:data.codigoBarras,
        nombre:data.nombre,
        fechaCaducidad:data.fechaCaducidad
      }
    }
  }

}
</script>

<style>

</style>