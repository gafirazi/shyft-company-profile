<template>
  <div class="min-h-screen flex flex-col w-full overflow-x-hidden">
    <Header />
    <main class="flex-1 w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script> 