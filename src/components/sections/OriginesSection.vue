<template>
  <section class="origines">
    <div
      v-for="(panel, i) in panels"
      :key="i"
      class="origine-panel fade-up"
      :style="{ transitionDelay: `${i * 0.12}s` }"
    >
      <div class="origine-bg" :style="{ backgroundImage: `url('${panel.img}')` }"></div>
      <div class="origine-overlay"></div>
      <div class="origine-content">
        <div class="origine-flag">{{ panel.flag }}</div>
        <p class="origine-country">{{ panel.country }}</p>
        <div class="origine-line"></div>
        <p class="origine-desc">{{ panel.desc }}</p>
        <RouterLink to="/boutique" class="origine-link">
          Voir les produits →
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import img5 from '@/assets/images/abou-zaynah8.webp'
import img2 from '@/assets/images/origine1.webp'
import img3 from '@/assets/images/abou-zaynah4.webp'

const panels = [
  {
    img: img5,
    flag: '🇾🇪',
    country: 'Yémen',
    desc: 'Miels Sidr et Euphorbe récoltés dans les vallées du Hadramaout',
    filter: 'yemen',
  },
  {
    img: img2,
    flag: '🇰🇬',
    country: 'Kirghizistan',
    desc: 'Miel Blanc des prairies alpines du Tian Shan à 2000m d\'altitude',
    filter: 'kirghizistan',
  },
  {
    img: img3,
    flag: '🇪🇹',
    country: 'Éthiopie',
    desc: 'Nigelle noire pressée à froid des hauts plateaux éthiopiens',
    filter: 'ethiopie',
  },
]
</script>

<style scoped>
.origines {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70vh;
  min-height: 460px;
}

.origine-panel {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.origine-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.06);
  transition: transform 0.7s ease;
}
.origine-panel:hover .origine-bg { transform: scale(1); }

.origine-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(26,18,8,0.18) 0%, rgba(26,18,8,0.72) 100%);
  transition: background 0.4s ease;
}
.origine-panel:hover .origine-overlay {
  background: linear-gradient(180deg, rgba(26,18,8,0.28) 0%, rgba(26,18,8,0.82) 100%);
}

/* Séparateurs verticaux */
.origine-panel:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0; top: 15%; bottom: 15%;
  width: 1px;
  background: rgba(200,134,10,0.25);
  z-index: 2;
}

.origine-content {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 36px 30px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.origine-flag {
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.origine-country {
  font-family: var(--font-serif);
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--white);
  line-height: 1;
  margin-bottom: 0;
}

.origine-line {
  width: 32px;
  height: 2px;
  background: var(--gold);
  margin: 14px 0;
  transition: width 0.4s ease;
}
.origine-panel:hover .origine-line { width: 56px; }

.origine-desc {
  font-size: 0.86rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.55;
  margin-bottom: 16px;
  max-width: 240px;
}

.origine-link {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold-pale);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.origine-panel:hover .origine-link {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .origines {
    grid-template-columns: 1fr;
    height: auto;
  }
  .origine-panel {
    height: 300px;
  }
  .origine-panel:not(:last-child)::after {
    right: 15%; left: 15%;
    top: auto;
    bottom: 0;
    width: auto;
    height: 1px;
  }
}
</style>
