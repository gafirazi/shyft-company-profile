<template>
  <section ref="trustSection" class="section-padding bg-[#010319]">
    <div class="max-w-[1200px] mx-auto">
      <div class="container-max text-center">
        <h2 class="text-5xl md:text-6xl font-bold mb-2 text-white">
          {{ $t('trust.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <!-- Card 1 -->
          <div class="trust-card">
            <div class="trust-icon-wrap">
              <img :src="homeTrust1" alt="Proven Results Icon" class="trust-icon" />
            </div>
            <div class="trust-label">{{ $t('trust.cards.needs.label') }}</div>
            <div class="trust-title">{{ $t('trust.cards.needs.title') }}</div>
          </div>
          <!-- Card 2 -->
          <div class="trust-card">
            <div class="trust-icon-wrap">
              <img :src="homeTrust2" alt="Seamless Integration Icon" class="trust-icon" />
            </div>
            <div class="trust-label">{{ $t('trust.cards.tailored.label') }}</div>
            <div class="trust-title">{{ $t('trust.cards.tailored.title') }}</div>
          </div>
          <!-- Card 3 -->
          <div class="trust-card">
            <div class="trust-icon-wrap">
              <img :src="homeTrust3" alt="Custom AI Solutions Icon" class="trust-icon" />
            </div>
            <div class="trust-label">{{ $t('trust.cards.support.label') }}</div>
            <div class="trust-title">{{ $t('trust.cards.support.title') }}</div>
          </div>
          <!-- Card 4 -->
          <div class="trust-card">
            <div class="trust-icon-wrap">
              <img :src="homeTrust4" alt="Ongoing Support Icon" class="trust-icon" />
            </div>
            <div class="trust-label">{{ $t('trust.cards.execution.label') }}</div>
            <div class="trust-title">{{ $t('trust.cards.execution.title') }}</div>
          </div>
        </div>
        <!-- Caption and Logos -->
        <div class="mt-16">
          <div class="text-gray-400 text-base mb-8">
            {{ $t('trust.caption') }}
          </div>
          <div class="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            <img :src="homeTrustLogo1" alt="ibm" class="h-8" />
            <img :src="homeTrustLogo2" alt="mmc" class="h-8" />
            <img :src="homeTrustLogo3" alt="biotis" class="h-8" />
            <img :src="homeTrustLogo4" alt="kolegium-orthodonti" class="h-8" />
            <img :src="homeTrustLogo5" alt="seniun-hadafa" class="h-8" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import homeTrust1 from '~/assets/images/home-trust-1.svg'
import homeTrust2 from '~/assets/images/home-trust-2.svg'
import homeTrust3 from '~/assets/images/home-trust-3.svg'
import homeTrust4 from '~/assets/images/home-trust-4.svg'
import homeTrustLogo1 from '~/assets/images/ibm.png'
import homeTrustLogo2 from '~/assets/images/mmc.svg'
import homeTrustLogo3 from '~/assets/images/biotis.png'
import homeTrustLogo4 from '~/assets/images/logo-kolesium-orthodonti.png'
import homeTrustLogo5 from '~/assets/images/logo-seniun-hadafa.png'

const trustSection = ref(null)

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trustSection.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from(trustSection.value.querySelector('h2'), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(
        trustSection.value.querySelectorAll('.trust-card'),
        {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        trustSection.value.querySelectorAll('.flex-wrap.justify-center.items-center'),
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
  }
})
</script>

<style scoped>
.trust-gradient {
  background: linear-gradient(90deg, #a18fff 0%, #6ec3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.trust-card {
  background: linear-gradient(180deg, rgb(25, 28, 48), rgb(18, 22, 53) 0%, rgb(11, 14, 35), rgb(11, 14, 35) 100%);
  border-radius: 24px;
  border: 1.5px solid rgba(255,255,255,0.15);
  padding: 56px 24px 40px 24px;
  min-height: 370px;
  box-shadow: 0 6px 36px 0 #a18aff33;
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.trust-icon-wrap {
  margin-bottom: 28px;
}
.trust-icon {
  width: 96px;
  height: 96px;
  object-fit: contain;
  filter: drop-shadow(0 4px 24px #a18fff55);
}
.trust-label {
  color: #b0b3c6;
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
}
.trust-title {
  color: #fff;
  font-size: 1.35rem;
  font-weight: 700;
  text-align: center;
}
@media (max-width: 900px) {
  .trust-card {
    min-height: 320px;
    padding: 36px 10px 28px 10px;
  }
  .trust-icon {
    width: 72px;
    height: 72px;
  }
}
</style>

