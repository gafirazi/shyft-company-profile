<template>
  <section ref="heroSection" class="relative min-h-screen flex items-center bg-[#010319] overflow-hidden pt-32 hero-section">
    <!-- Spotlight effect -->
    <div class="absolute left-0 top-0 w-2/3 h-full pointer-events-none z-0">
      <div class="w-full h-full bg-gradient-to-br from-[#fff2] via-transparent to-transparent rounded-full blur-3xl opacity-40"></div>
    </div>
    <div class="container-max relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
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
            <!-- <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Mila S." class="w-8 h-8 rounded-full border-2 border-white shadow" /> -->
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
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '~/assets/images/home-hero.webp'

const heroSection = ref(null)

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from(heroSection.value.querySelector('h1'), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(
        heroSection.value.querySelector('p'),
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        heroSection.value.querySelector('.hero-cta'),
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        heroSection.value.querySelector('img'),
        {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6'
      )
  }
})
</script>

<style scoped>
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/assets/images/raylight.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  opacity: 0.1; /* You can adjust this value from 0 (transparent) to 1 (opaque) */
  z-index: 1;
}
</style>
