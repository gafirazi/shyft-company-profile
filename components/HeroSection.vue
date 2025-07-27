<template>
  <section ref="heroSection" class="relative min-h-screen flex items-center justify-center bg-[#010319] overflow-hidden text-center hero-section">
    <!-- Spotlight effect -->
    <div class="absolute inset-0 w-full h-full pointer-events-none z-0">
      <div class="w-full h-full bg-gradient-to-br from-[#fff2] via-transparent to-transparent rounded-full blur-3xl opacity-40"></div>
    </div>
    <div class="container-max relative z-10">
      <!-- Content -->
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {{ $t('hero.subtitle') }}
        </p>
        <div class="flex justify-center">
          <button class="hero-cta flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-lg shadow-xl bg-gradient-to-r from-[#6ec3f4] via-[#a18fff] to-[#f9d423] hover:scale-105 transition-transform">
            {{ $t('hero.cta') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
