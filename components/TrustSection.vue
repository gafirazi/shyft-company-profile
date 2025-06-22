<template>
  <section class="section-padding bg-[#010319]">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="container-max text-center">
        <h2 class="text-5xl md:text-6xl font-bold mb-2 text-white">
          Why Top Brands <span class="trust-gradient">Trust Us</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <!-- Card 1 -->
          <div class="trust-card">
            <div class="trust-icon-wrap">
              <img src="https://cdn.jsdelivr.net/gh/3dicons/3dicons/png/512/box-01.png" alt="Proven Results Icon" class="trust-icon" />
            </div>
            <div class="trust-label">[ PROVEN RESULTS ]</div>
            <div class="trust-title">200+ businesses automated</div>
          </div>
          <!-- Card 2 -->
          <div class="trust-card">
            <div class="trust-icon-wrap">
              <img src="https://cdn.jsdelivr.net/gh/3dicons/3dicons/png/512/puzzle-01.png" alt="Seamless Integration Icon" class="trust-icon" />
            </div>
            <div class="trust-label">[ SEAMLESS AI INTEGRATION ]</div>
            <div class="trust-title">Works with your existing tools</div>
          </div>
          <!-- Card 3 -->
          <div class="trust-card">
            <div class="trust-icon-wrap">
              <img src="https://cdn.jsdelivr.net/gh/3dicons/3dicons/png/512/cpu-01.png" alt="Custom AI Solutions Icon" class="trust-icon" />
            </div>
            <div class="trust-label">[ TAILORED FOR YOU ]</div>
            <div class="trust-title">Custom AI solutions</div>
          </div>
          <!-- Card 4 -->
          <div class="trust-card">
            <div class="trust-icon-wrap">
              <img src="https://cdn.jsdelivr.net/gh/3dicons/3dicons/png/512/message-chat-01.png" alt="Ongoing Support Icon" class="trust-icon" />
            </div>
            <div class="trust-label">[ ONGOING SUPPORT ]</div>
            <div class="trust-title">We ensure your AI runs smoothly</div>
          </div>
        </div>
        <!-- Caption and Logos -->
        <div class="mt-16">
          <div class="text-gray-400 text-base mb-8">
            Trusted by leading companies in tech, finance and e-commerce
          </div>
          <div class="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" class="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" class="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" class="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" class="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" class="h-8" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
  font-size: 1.05rem;
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

