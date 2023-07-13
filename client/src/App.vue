<script setup>
import Home from './views/Home.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>

  <v-app class="bg-background">
    <v-main>
      <Navbar />
      <Home />
    </v-main>
  </v-app>

</template>