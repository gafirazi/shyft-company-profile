<template>
  <div class="fixed top-6 left-0 right-0 z-50 flex justify-center w-fit m-auto">
    <header 
      :class="[
        'transition-all duration-300 overflow-hidden rounded-full',
        { 'py-3 shadow-lg shadow-black/20': isScrolled, 'py-4': !isScrolled }
      ]"
    >
      <div class="relative px-6">
        <nav class="flex justify-between items-center gap-6">
          <div class="flex items-center">
            <span 
              class="text-2xl font-bold bg-gradient-to-r from-[#9245FC] to-purple-500 bg-clip-text text-transparent"
            >
              Shyft
            </span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a 
              v-for="item in navItems" 
              :key="item.name"
              :href="item.href" 
              @click.prevent="handleScrollToSection(item.href.substring(1))"
              class="text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              {{ item.name }}
            </a>
          </div>

          <!-- Contact Button -->
          <div class="hidden md:block">
            <button 
              @click.prevent="handleScrollToSection('contact')"
              class="px-6 py-2 rounded-full bg-gradient-to-r from-[#A250F7] to-[#1e93d7] text-white hover:opacity-90 transition-all whitespace-nowrap"
            >
              Get Started
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen">
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </nav>

        <!-- Mobile Menu -->
        <Transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-200"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="isMenuOpen" class="md:hidden mt-4 overflow-hidden">
            <div class="p-4 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
              <div class="flex flex-col space-y-3">
                <a 
                  v-for="item in navItems"
                  :key="item.name"
                  :href="item.href" 
                  @click.prevent="handleScrollToSection(item.href.substring(1))"
                  class="text-white/80 hover:text-white transition-colors py-2 text-center"
                >
                  {{ item.name }}
                </a>
                <button 
                  @click.prevent="handleScrollToSection('contact')"
                  class="w-full py-2 rounded-full bg-gradient-to-r from-[#A250F7] to-[#1e93d7] text-white hover:opacity-90 transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Background Blur -->
      <div 
        :class="[
          'absolute inset-0 -z-10 backdrop-blur-xl transition-all duration-300 rounded-full',
          { 'bg-white/10': isScrolled, 'bg-white/5': !isScrolled }
        ]"
      />
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 0; // Adjust if you have a different header height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: 'smooth',
    });
  }
  isMenuOpen.value = false; // Close mobile menu after clicking a link
};
</script> 