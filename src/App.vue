<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 18:04:33
 * @FilePath: \vue3-system-test\src\App.vue
 * @LastEditTime: 2023-03-04 09:48:02
-->
<template>
  <!-- key意义在于用完整路径判重，这样就会带上后面的id，比如http://localhost:8080/userprofile/65/ -->
  <router-view :key="$route.fullPath">

  </router-view>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'


export default {
  name: 'App',


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
