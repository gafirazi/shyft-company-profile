<template>
  <footer class="bg-[#010319] text-white">
    <div class="max-w-[1200px] mx-auto px-4 section-padding">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            :src="logoWhite"
            alt="logo"
            class="h-[28px] w-auto object-cover mb-[10px]"
          >
          <p class="text-gray-400">{{ $t('footer.company_description') }}</p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">{{ $t('footer.services.title') }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.services.workflow_automation') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.services.ai_chatbots') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.services.crm_automation') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.services.custom_integrations') }}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">{{ $t('footer.company.title') }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.company.case_studies') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.company.pricing') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.company.contact') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.company.blog') }}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">{{ $t('footer.contact.title') }}</h4>
          <div class="space-y-2 text-gray-400">
            <!-- <p>+1234 567 89</p> -->
            <p>shyftid@gmail.com</p>
          </div>
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">{{ $t('footer.social.twitter') }}</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">{{ $t('footer.social.instagram') }}</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">{{ $t('footer.social.linkedin') }}</a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template> 

<script setup>
  import logoWhite from '~/assets/images/logo-white.png'
</script>