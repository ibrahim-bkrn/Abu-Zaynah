<template>
  <section class="hero" id="accueil">
    <div class="hero-bg" :class="{ loaded: bgLoaded }" ref="bgEl"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="hero-eyebrow">✦ Miels Rares &amp; Produits de la Nigelle</p>
      <h1 class="hero-title">
        L'excellence <em>s'invite</em><br />à votre table
      </h1>
      <p class="hero-subtitle">
        Des miels rares du Yémen et du Kirghizistan, des produits issus de la graine de nigelle.
        <span>Sélectionnés à la source, livrés chez vous avec soin.</span>
      </p>
      <div class="hero-actions">
        <RouterLink to="/boutique" class="btn btn-gold">Découvrir la boutique</RouterLink>
        <RouterLink to="/commander" class="btn btn-outline">Commander</RouterLink>
      </div>
    </div>
    <div class="hero-scroll-hint">
      <span>Découvrir</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12l7 7 7-7"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import heroBg from '@/assets/images/abou-zaynah3.webp'

const bgLoaded = ref(false)
const bgEl = ref(null)

onMounted(() => {
  const img = new Image()
  img.src = heroBg
  img.onload = () => {
    if (bgEl.value) bgEl.value.style.backgroundImage = `url('${heroBg}')`
    bgLoaded.value = true
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.04);
  transition: transform 8s ease;
}
.hero-bg.loaded { transform: scale(1); }

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    170deg,
    rgba(26,18,8,0.52) 30%,
    rgba(26,18,8,0.28) 45%,
    rgba(26,18,8,0.52) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 0 24px;
}

.hero-eyebrow {
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-pale);
  margin-bottom: 22px;
  opacity: 0;
  animation: fadeUp 0.8s 0.3s ease forwards;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 7.5vw, 5.6rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.05;
  margin-bottom: 22px;
  opacity: 0;
  animation: fadeUp 0.8s 0.55s ease forwards;
}
.hero-title em { font-style: italic; color: var(--gold-pale); }

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.16rem);
  color: rgba(255,255,255,0.78);
  max-width: 520px;
  margin: 0 auto 38px;
  line-height: 1.68;
  opacity: 0;
  animation: fadeUp 0.8s 0.8s ease forwards;
}

.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 0.8s 1.05s ease forwards;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  color: rgba(255,255,255,0.42);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  animation: scrollBounce 2s 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .hero-title { font-size: clamp(2.9rem, 10vw, 4rem); }
  .hero-subtitle span{display: none;}
}


@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.42; }
  50%       { transform: translateX(-50%) translateY(7px); opacity: 0.7; }
}
</style>
