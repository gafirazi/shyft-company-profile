<template>
  <section ref="caseStudiesSection" class="section-padding bg-[#010319]">
    <div class="max-w-[1200px] mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">
        <span class="case-studies-title-white">See Our </span><span class="case-studies-title-gradient">Work in Action</span>
      </h2>
      <div class="case-studies-list">
        <div class="case-study-card">
          <div class="case-study-left">
            <div class="case-study-label">[ 01 ]</div>
            <div class="case-study-title">AI-Powered Project Accounting - Construction Company</div>
            <div class="case-study-desc">An intelligent accounting system with a built-in AI agent helped an electrical construction company reduce manual workload and boost reporting accuracy — improving cash flow tracking and enabling faster project insights.</div>
            <div class="case-study-tags">
              <span class="case-study-tag">Construction</span>
              <span class="case-study-tag">AI-automation</span>
            </div>
          </div>
          <div class="case-study-right">
            <div class="case-study-image-wrap">
              <img class="case-study-image" src="https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case Study 1" />
            </div>
          </div>
        </div>
        <div class="case-study-card">
          <div class="case-study-left">
            <div class="case-study-label">[ 02 ]</div>
            <div class="case-study-title">Back Office System - Sharia Housing Developer</div>
            <div class="case-study-desc">A tailored back-office system streamlined unit sales, customer management, and progress tracking for a fast-growing Sharia-compliant housing developer, saving hours of administrative work each week.</div>
            <div class="case-study-tags">
              <span class="case-study-tag">Real Estate</span>
              <span class="case-study-tag">Proptech</span>
            </div>
          </div>
          <div class="case-study-right">
            <div class="case-study-image-wrap">
              <img class="case-study-image" src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case Study 2" />
            </div>
          </div>
        </div>
        <div class="case-study-card">
          <div class="case-study-left">
            <div class="case-study-label">[ 03 ]</div>
            <div class="case-study-title">Real-Time Staff Reporting System - Biopharma Company</div>
            <div class="case-study-desc">Internal reporting system for Biotis employees to log daily work activities in real time. The system enforces live photo capture via camera only to ensure authenticity and prevent fraud from gallery uploads — improving transparency and accountability across operations.</div>
            <div class="case-study-tags">
              <span class="case-study-tag">Internal Tools</span>
              <span class="case-study-tag">Real-Time Reporting</span>
            </div>
          </div>
          <div class="case-study-right">
            <div class="case-study-image-wrap">
              <img class="case-study-image" src="https://images.unsplash.com/photo-1656407410275-e63e689bcd90?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case Study 3" />
            </div>
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
import ibmImage from '~/assets/images/home-ibm.png'

const caseStudiesSection = ref(null)

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the main title
    gsap.from(caseStudiesSection.value.querySelector('h2'), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: caseStudiesSection.value.querySelector('h2'),
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    // Animate each case study card individually
    const caseStudyCards = caseStudiesSection.value.querySelectorAll('.case-study-card')
    caseStudyCards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%', // Trigger when the top of the card is 85% from the top of the viewport
          toggleActions: 'play none none reverse',
        },
      })
    })
  }
})
</script>

<style scoped>
.case-studies-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.case-study-card {
  display: flex;
  align-items: stretch;
  gap: 48px;
  background: linear-gradient(180deg, rgb(25, 28, 48), rgb(18, 22, 53) 0%, rgb(11, 14, 35), rgb(11, 14, 35) 100%);
  border-radius: 24px;
  border: 1.5px solid rgba(255,255,255,0.15);
  box-shadow: 0 0px 19px 0 #a18aff33;
  padding: 56px;
  min-height: 480px;
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  color: #fff;
  position: relative;
  overflow: hidden;
}
.case-study-left {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.case-study-label {
  font-size: 18px;
  color: #7c8192;
  font-weight: 500;
  margin-bottom: 24px;
  letter-spacing: 2px;
}
.case-study-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 32px;
}
.case-study-desc {
  font-size: 16px;
  color: #b0b3c6;
  margin-bottom: 32px;
}
.case-study-desc b {
  color: #fff;
  font-weight: 700;
}
.case-study-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}
.case-study-tag {
  border: 1.2px solid rgba(255,255,255,0.15);
  background: linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 9999px;
  padding: 6px 22px;
  margin-right: 12px;
  margin-bottom: 4px;
  display: inline-block;
}
.case-study-right {
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}
.case-study-image-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.case-study-image {
  width: 100%;
  max-width: 520px;
  height: 340px;
  object-fit: cover;
  object-position: left;
  border-radius: 16px;
  box-shadow: 0 2px 24px 0 rgba(0,0,0,0.18);
}
@media (max-width: 1200px) {
  .case-study-title {
    font-size: 32px;
  }
  .case-study-card {
    padding: 32px;
  }
}
@media (max-width: 900px) {
  .case-study-card {
    flex-direction: column;
    padding: 24px;
    min-height: 0;
    gap: 32px;
  }
  .case-study-image {
    max-width: 100%;
    height: 220px;
  }
  .case-study-title {
    font-size: 22px;
  }
  .case-study-desc {
    font-size: 14px;
  }
  .case-study-tag {
    font-size: 12px;
    padding: 4px 14px;
    margin-right: 6px;
  }
}
.case-studies-title-white {
  color: #fff;
}
.case-studies-title-gradient {
  background: linear-gradient(90deg, #a18fff 0%, #6ec3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>

