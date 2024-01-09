<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  },
})
</script>
