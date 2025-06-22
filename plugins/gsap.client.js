// plugins/gsap.client.ts

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import any other GSAP plugins you want to use here

export default defineNuxtPlugin((nuxtApp) => {
  // Only register plugins if they are available (which they should be on the client)
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    // Register other plugins here
    // gsap.registerPlugin(Draggable)
  }

  // Make GSAP available as a global helper '$gsap'
  // You can then use it in your components as useNuxtApp().$gsap
  return {
    provide: {
      gsap,
      ScrollTrigger, // Optionally provide ScrollTrigger as well
    },
  }
})