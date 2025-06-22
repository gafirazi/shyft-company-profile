<template>
  <section class="section-padding bg-[#010319] py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
      
      <!-- Left Column: Text Content -->
      <div class="text-white">
        <p class="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">[ Contact Us ]</p>
        <h2 class="text-5xl font-bold mb-6 leading-tight">
          Ready to <span class="text-purple-400">Automate</span><br>
          Your Business?
        </h2>
        <p class="text-lg text-gray-300 max-w-lg">
          Let AI handle the hard work while you focus on growth. Book a free AI strategy session today.
        </p>
      </div>

      <!-- Right Column: Form -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-white text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Jane Smith"
              class="w-full bg-[#181A2F] text-white px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
          </div>
          <div>
            <label for="email" class="block text-white text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="mail@site.com"
              class="w-full bg-[#181A2F] text-white px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
          </div>
          <div>
            <label for="message" class="block text-white text-sm font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              placeholder="Your message"
              class="w-full bg-[#181A2F] text-white px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
          </div>
          
          <div class="flex flex-wrap items-center justify-between gap-4 pt-4">
            <p class="text-xs text-gray-400">
              By submitting, you agree to our 
              <a href="#" class="text-white underline hover:text-purple-300 transition">Terms</a> and 
              <a href="#" class="text-white underline hover:text-purple-300 transition">Privacy Policy</a>.
            </p>
            <button 
              type="submit" 
              class="bg-[#2C2B54] hover:bg-purple-700 text-white font-semibold py-3 px-10 rounded-full transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
// Basic script setup for form handling
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  // You can add your form submission logic here
  console.log('Form submitted:', form.value);
  // Example: Reset form after submission
  // form.value.name = '';
  // form.value.email = '';
  // form.value.message = '';
};
</script>

