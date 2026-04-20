<template>
  <section class="citation-section">
    <div class="citation-bg" :style="{ backgroundImage: `url('${citationBg}')` }"></div>
    <div class="citation-overlay"></div>
    <div class="citation-content fade-up">
      <!-- <div class="citation-deco">✦</div> -->
      <blockquote class="citation-text">
        "Quand le miel est authentique, <br>le goût ne ment jamais."
      </blockquote>
      <p class="citation-sig">— Abu Zaynah</p>
    </div>
  </section>
</template>

<script setup>
import citationBg from '@/assets/images/arrierePlanCitation.webp'
</script>

<style scoped>
.citation-section {
  position: relative;
  height: 60vh;
  /*min-height: 380px;*/
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.citation-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.04);
  transition: transform 6s ease;
}

.citation-section:hover .citation-bg { transform: scale(1); }

.citation-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26,18,8,0.68);
}

.citation-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 24px;
  max-width: 720px;
}

.citation-deco {
  font-size: 1.2rem;
  color: var(--gold);
  margin-bottom: 22px;
  letter-spacing: 0.3em;
}

.citation-text {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3.5vw, 2.6rem);
  font-weight: 400;
  font-style: italic;
  color: var(--white);
  line-height: 1.45;
  margin-bottom: 24px;
}

.citation-sig {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-pale);
  opacity: 0.75;
}

@media (max-width: 768px) {
  .citation-section { height: 300px; padding: 60px 0; }
}
</style>
