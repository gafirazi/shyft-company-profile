<template>
  <section ref="stickySection" class="relative min-h-screen flex items-center justify-center bg-[#010319] overflow-hidden" style="background: #010319; min-height: 100vh;">
    <div ref="bubble1" class="thought-bubble bubble-pos-1">
      <span>You need AI, but don't<br />know where to start</span>
    </div>
    <div ref="bubble2" class="thought-bubble bubble-pos-2">
      <span>Scaling is hard<br />without automation</span>
    </div>
    <div ref="bubble3" class="thought-bubble bubble-pos-3">
      <span>High operational<br />costs reduce profits</span>
    </div>
    <div ref="bubble4" class="thought-bubble bubble-pos-4">
      <span>Dummy thought bubble 1</span>
    </div>
    <div ref="bubble5" class="thought-bubble bubble-pos-5">
      <span>Dummy thought bubble 2</span>
    </div>
    <div ref="bubble6" class="thought-bubble bubble-pos-6">
      <span>Dummy thought bubble 3</span>
    </div>
    <div ref="centerText" class="is-this-you-center text-center">
      <h2 class="text-5xl md:text-7xl font-bold mb-0">
        <span class="text-white">Is This </span>
        <span class="bg-gradient-to-r from-[#a18fff] to-[#6ec3f4] bg-clip-text text-transparent">You?</span>
      </h2>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stickySection = ref(null)
const centerText = ref(null)
const bubble1 = ref(null)
const bubble2 = ref(null)
const bubble3 = ref(null)
const bubble4 = ref(null)
const bubble5 = ref(null)
const bubble6 = ref(null)

onMounted(() => {
  // Get the center position
  const getOffset = (bubbleRef) => {
    const centerRect = centerText.value.getBoundingClientRect();
    const bubbleRect = bubbleRef.value.getBoundingClientRect();
    const sectionRect = stickySection.value.getBoundingClientRect();
    // Calculate offset from center to bubble
    const x = (bubbleRect.left + bubbleRect.width / 2) - (centerRect.left + centerRect.width / 2);
    const y = (bubbleRect.top + bubbleRect.height / 2) - (centerRect.top + centerRect.height / 2);
    return { x, y };
  };

  // Wait for next tick to ensure DOM is rendered
  setTimeout(() => {
    const bubbles = [bubble1, bubble2, bubble3, bubble4, bubble5, bubble6];
    const offsets = bubbles.map(getOffset);

    // Set initial state: all bubbles at center, opacity 0
    bubbles.forEach((bubble, i) => {
      gsap.set(bubble.value, { x: -offsets[i].x, y: -offsets[i].y, opacity: 0 });
    });

    gsap.set(centerText.value, { scale: 1, opacity: 1 });

    // Pin the entire section and animate bubbles as user scrolls
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection.value,
        start: 'top top',
        end: '+=700',
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      }
    });

    bubbles.forEach((bubble, i) => {
      tl.to(bubble.value, { x: 0, y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, i * 0.1);
    });
  }, 0);
})
</script>

<style scoped>
.is-this-you-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.thought-bubble {
  position: absolute;
  width: 200px;
  min-height: 70px;
  background: linear-gradient(180deg, rgb(25, 28, 48), rgb(18, 22, 53) 0%, rgb(11, 14, 35), rgb(11, 14, 35) 100%);
  color: #fff;
  border-radius: 24px;
  border: 1.5px solid rgba(255,255,255,0.15);
  box-shadow: 0 0px 19px 0 #a18aff33;
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  padding: 1.2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 500;
  pointer-events: none;
  opacity: 0;
  z-index: 5;
}

/* Arrange 6 bubbles in a circle - tighter to the center */
.bubble-pos-1 { top: 23%; left: 50%; transform: translate(-50%, 0); }
.bubble-pos-2 { top: 38%; left: 63%; transform: translate(-50%, -50%); }
.bubble-pos-3 { top: 62%; left: 63%; transform: translate(-50%, -50%); }
.bubble-pos-4 { top: 72%; left: 50%; transform: translate(-50%, -100%); }
.bubble-pos-5 { top: 62%; left: 37%; transform: translate(-50%, -50%); }
.bubble-pos-6 { top: 38%; left: 37%; transform: translate(-50%, -50%); }
</style>

