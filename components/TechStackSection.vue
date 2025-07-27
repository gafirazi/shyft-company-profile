<template>
  <section ref="techStackSection" class="section-padding bg-[#010319] overflow-hidden py-24 sm:py-32">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="container-max text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-24 text-white">
          <span class="trust-gradient">{{ $t('tech_stack.title') }}</span>
        </h2>

        <div class="tech-stack-container" :class="{ expanded: isExpanded }">
          <div
            v-for="(tech, index) in techStack"
            :key="tech.name"
            class="tech-card-wrapper"
            :class="{ 'is-hovered': hoveredIndex === index }"
            :style="{
              'transform': `translateY(-${index * 20}px)`,
              'z-index': hoveredIndex === index ? 10 : techStack.length - index
            }"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
          >
            <div class="tech-card">
              <div class="card-content">
                <div class="card-header">[0{{ index + 1 }}]</div>
                <div class="logo-container">
                  <img :src="tech.logo" :alt="tech.name" class="w-100 h-100 object-contain logo-img" />
                </div>
                <span class="tech-name trust-gradient">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Define your tech stack here.
// Make sure to add the correct paths to your logo files.
const techStack = ref([
  { name: 'OPEN AI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'ZAPIER', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg' },
  { name: 'AIRTABLE', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg' },
  { name: 'VUE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png' },
  { name: 'PYTHON', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
]);

const isExpanded = ref(false);
const hoveredIndex = ref(null);
const techStackSection = ref(null);

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: techStackSection.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(techStackSection.value.querySelector('h2'), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });
  }

  const section = document.querySelector('.tech-stack-container');
  if (!section) return;

  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isExpanded.value = true;
        observer.disconnect();
      }
    },
    { threshold: 1 }
  );
  observer.observe(section);
});
</script>

<style scoped>
.tech-stack-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  perspective: 1500px;
  margin-top: 150px;
  transform-style: preserve-3d;
  position: relative;
  height: 350px;
}

.tech-stack-container .tech-card-wrapper:not(:first-child) {
  margin-left: -220px; /* Squeezed state */
  transition: margin-left 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.tech-stack-container.expanded .tech-card-wrapper:not(:first-child) {
  margin-left: -80px; /* Expanded state */
}

.tech-card-wrapper {
  position: relative;
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: center center;
}

.tech-card-wrapper.is-hovered {
  transform: translateY(var(--translate-y-offset, 0px)) translateZ(80px) scale(1.05);
}

.tech-card {
  width: 240px;
  height: 300px;
  background: linear-gradient(180deg, rgb(25, 28, 48), rgb(18, 22, 53) 0%, rgb(11, 14, 35), rgb(11, 14, 35) 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  transform: rotateX(10deg) rotateY(30deg); /* Apply a uniform tilt to all cards */
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: rgba(255, 255, 255, 0.8);
}

.tech-card-wrapper.is-hovered .tech-card {
  transform: rotateX(0deg) rotateY(0deg);
  border-color: rgba(255, 255, 255, 0.3);
  background: linear-gradient(180deg, rgb(45, 48, 68), rgb(38, 42, 73) 0%, rgb(31, 34, 55), rgb(31, 34, 55) 100%);
}

.card-content {
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-header {
  text-align: left;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.875rem;
}

.logo-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem; /* Add some padding */
}

.logo-img {
  max-height: 100px;
}

/* 
  The logos in the image are desaturated and semi-transparent.
  You may need to apply similar filter styles to your actual logos.
*/
.logo-container > * {
  filter: grayscale(1) brightness(1.2);
  opacity: 0.5;
  transition: all 0.4s ease;
}

.tech-card-wrapper:hover .logo-container > * {
  filter: grayscale(0) brightness(1);
  opacity: 1;
}

.tech-name {
  text-align: right;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
}

.trust-gradient {
  background: linear-gradient(90deg, #a18fff 0%, #6ec3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>

