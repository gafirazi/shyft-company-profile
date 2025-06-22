<template>
  <section class="relative min-h-screen flex items-center bg-[#010319] overflow-hidden pt-32">
    <!-- Spotlight effect -->
    <div class="absolute left-0 top-0 w-2/3 h-full pointer-events-none z-0">
      <div class="w-full h-full bg-gradient-to-br from-[#fff2] via-transparent to-transparent rounded-full blur-3xl opacity-40"></div>
    </div>
    <div class="container-max relative z-10 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      <!-- Left: Content -->
      <div class="flex-1 w-full max-w-2xl">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8">
          Turning Business into<br />
          <span class="bg-gradient-to-r from-[#a18fff] via-[#6ec3f4] to-[#f9d423] bg-clip-text text-transparent">AI-Powered Machine.</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
          A result-focused design partner to help you <span class="font-semibold text-white">automate workflows</span>, <span class="font-semibold text-white">optimize operations</span>, and scale faster with <span class="font-semibold text-white">AI solutions</span>.
        </p>
        <div class="flex items-center gap-6 flex-wrap">
          <button class="hero-cta flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white text-base shadow-xl bg-gradient-to-r from-[#6ec3f4] via-[#a18fff] to-[#f9d423] hover:scale-105 transition-transform">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Mila S." class="w-8 h-8 rounded-full border-2 border-white shadow" />
            Get a Free AI Strategy Session
          </button>
          <!-- <div class="hidden md:block text-sm text-gray-400 ml-2">
            <div class="mb-1">"Saved over 400 hours per month on support"</div>
            <div class="text-xs text-gray-500">Mila S. - COO, Finance Firm</div>
          </div> -->
        </div>
      </div>
      <!-- Right: 3D Ring Image -->
      <div class="flex-1 flex justify-center items-center relative w-full max-w-xl">
        <img
          :src="heroImage"
          alt="3D Ring"
          class="w-[420px] h-[420px] object-contain drop-shadow-2xl select-none pointer-events-none"
          style="filter: brightness(1.2) saturate(1.3) blur(0.5px);"
        />
      </div>
    </div>
    <!-- Testimonial for mobile -->
    <!-- <div class="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-gray-400 text-sm w-full px-4">
      <div class="mb-1">"Saved over 400 hours per month on support"</div>
      <div class="text-xs text-gray-500">Mila S. - COO, Finance Firm</div>
    </div> -->
  </section>
</template>

<script setup>
import heroImage from '~/assets/images/hero.png'
</script>

