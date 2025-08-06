<template>
  <section class="bg-[#010319] text-white py-20">
    <div class="container mx-auto px-4 max-w-[1200px]">
      <div class="flex justify-between items-center mb-8">
        <div>
          <p class="text-sm font-normal tracking-widest text-gray-400">
            {{ typewriterText }}<span v-if="showCursor" class="animate-pulse">|</span>
          </p>
          <h2 class="text-4xl md:text-5xl font-normal mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">What Our Clients Say</h2>
        </div>
        <div class="hidden md:flex space-x-4">
          <button class="swiper-button-prev-custom p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50">
            <ArrowLeftIcon class="h-6 w-6 text-white" />
          </button>
          <button class="swiper-button-next-custom p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50">
            <ArrowRightIcon class="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      <swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :navigation="{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }"
        class="testimonial-carousel"
      >
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.name">
          <div class="testimonial-item text-center md:text-left pt-8">
            <p class="text-2xl md:text-4xl font-light text-white mb-8">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex items-center justify-center md:justify-start">
              <img :src="testimonial.image" alt="" class="w-16 h-16 rounded-full mr-4">
              <div>
                <p class="font-normal text-lg">{{ testimonial.name }}</p>
                <p class="text-gray-400">{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import { ref, onMounted } from 'vue';

const testimonials = [
  {
    quote: "Our AI chatbot reduced response times from 10 minutes to just 2 seconds. Customer satisfaction skyrocketed, and we saved over 400 hours per month on support.",
    name: 'Mila S.',
    title: 'COO, Finance Firm',
    image: 'https://i.pravatar.cc/150?u=mila'
  },
  {
    quote: "Doubling our conversion rate in 3 months! This is incredible.",
    name: 'Sarah M.',
    title: 'Marketing Manager, Mandala',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    quote: "50% reduction in operational costs! The efficiency gains are massive.",
    name: 'John D.',
    title: 'CEO, AI Agent',
    image: 'https://i.pravatar.cc/150?u=john'
  }
];

const fullText = '[ TESTIMONIALS ]';
const typewriterText = ref('');
const showCursor = ref(true);

onMounted(() => {
  let i = 0;
  function type() {
    if (i <= fullText.length) {
      typewriterText.value = fullText.slice(0, i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
});
</script>

<style>
/* We are using custom navigation, but Swiper's default nav styles might still be useful for base functionality */
/* The custom buttons are styled with TailwindCSS utility classes directly in the template. */
</style>

