<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex h-16 items-center justify-between">

        <!-- Logo -->
        <RouterLink
          to="/"
          class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          ComplyBean
        </RouterLink>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in menu"
            :key="item.name"
            :to="item.path"
            class="text-slate-600 hover:text-blue-600 transition font-medium"
            active-class="text-blue-600 font-semibold"
          >
            {{ item.name }}
          </RouterLink>
        </nav>

        <!-- Mobile Button -->
        <button
          class="md:hidden p-2 rounded hover:bg-slate-100"
          @click="mobileMenu = !mobileMenu"
        >
          ☰
        </button>

      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenu"
        class="md:hidden pb-4 flex flex-col space-y-3"
      >
        <RouterLink
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          @click="mobileMenu = false"
          class="text-slate-700 hover:text-blue-600"
        >
          {{ item.name }}
        </RouterLink>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenu = ref(false)

const menu = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>