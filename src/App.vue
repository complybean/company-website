<template>
  <div class="min-h-screen flex flex-col bg-slate-50">

    <Navbar />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
</style>