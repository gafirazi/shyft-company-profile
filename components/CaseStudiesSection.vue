<template>
  <section class="section-padding bg-[#010319]">
    <div class="max-w-[1200px] mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">
        <span class="case-studies-title-white">See Our </span><span class="case-studies-title-gradient">Work in Action</span>
      </h2>
      <div class="case-studies-list">
        <div class="case-study-card">
          <div class="case-study-left">
            <div class="case-study-label">[ 01 ]</div>
            <div class="case-study-title">AI for Lead Qualification - SaaS Company</div>
            <div class="case-study-desc">AI-driven lead scoring <b>boosted conversions by 40%</b> for a SaaS company, reducing wasted time and doubling recurring revenue.</div>
            <div class="case-study-tags">
              <span class="case-study-tag">Startup</span>
              <span class="case-study-tag">E-commerce</span>
            </div>
          </div>
          <div class="case-study-right">
            <div class="case-study-image-wrap">
              <img class="case-study-image" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Case Study 1" />
            </div>
          </div>
        </div>
        <div class="case-study-card">
          <div class="case-study-left">
            <div class="case-study-label">[ 02 ]</div>
            <div class="case-study-title">AI Workflow Automation – Finance Firm</div>
            <div class="case-study-desc">AI automation <b>cut data processing time by 80%</b> and sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.</div>
            <div class="case-study-tags">
              <span class="case-study-tag">Finance</span>
            </div>
          </div>
          <div class="case-study-right">
            <div class="case-study-image-wrap">
              <img class="case-study-image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Case Study 2" />
            </div>
          </div>
        </div>
        <div class="case-study-card">
          <div class="case-study-left">
            <div class="case-study-label">[ 03 ]</div>
            <div class="case-study-title">AI-Powered Customer Support for E-Commerce</div>
            <div class="case-study-desc">AI chatbot <b>reduced support costs by 60%</b> and tripled response speed for an e-commerce brand. See how automation improved customer experience.</div>
            <div class="case-study-tags">
              <span class="case-study-tag">E-commerce</span>
            </div>
          </div>
          <div class="case-study-right">
            <div class="case-study-image-wrap">
              <img class="case-study-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Case Study 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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

