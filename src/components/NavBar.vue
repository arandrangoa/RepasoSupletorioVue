<template>
  <div class="navbar">
    <router-link to="/crear">Crear Producto</router-link>
    <router-link to="/consultar">Consultar Producto</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.navbar{
    display: flex;
    background: blue;
    padding: 10px;
}

.navbar a{
    color: white;
    padding: 20px;
    font-size: 20px;
    text-decoration: none;
}

</style>