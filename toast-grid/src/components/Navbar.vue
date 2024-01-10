<template>
    <nav id="vue">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"><router-link to="/about">About</router-link></div>
        <div class="menu-item"><router-link to="/helloWorld">HelloWorld</router-link></div>
        <Services title="Services" /> 
    </nav>
</template>

<script>
import Services from '../components/Services'
export default {
  name: 'navbar',
  components: {
    Services
  }, 
}
</script>
<style>
</style>