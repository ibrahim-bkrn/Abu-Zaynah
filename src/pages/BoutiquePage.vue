<template>
  <div>
    <!-- HERO -->
    <div class="boutique-hero">
      <div class="boutique-hero-bg"></div>
      <div class="boutique-hero-overlay"></div>
      <div class="container boutique-hero-content">
        <div class="boutique-hero-breadcrumb">
          <RouterLink to="/">Accueil</RouterLink>
          <span>›</span>
          <span>Boutique</span>
        </div>
        <p class="section-label">Catalogue complet</p>
        <h1>Notre Sélection</h1>
      </div>
    </div>

    <!-- CATALOGUE -->
    <section class="catalogue">
      <div class="container">

        <div class="catalogue-grid">
          <ProduitCard
            v-for="(produit, i) in produits"
            :key="produit.id"
            :produit="produit"
            :delay="i * 0.06"
          />

        </div>

      </div>
    </section>

    <!-- CTA -->
    <div class="cta-strip">
      <div class="container">
        <h2 class="cta-strip-title">Une question ? Une commande ?</h2>
        <p>Contactez Redouane directement — réponse rapide, service humain.</p>
        <div class="cta-strip-actions">
          <a href="https://wa.me/33745563692?text=Bonjour%20!%20Je%20souhaite%20passer%20une%20commande%20Abu%20Zaynah." target="_blank" rel="noopener" class="btn btn-wa">
            WhatsApp
          </a>
          <a href="https://www.snapchat.com/add/abouzaynah" target="_blank" rel="noopener" class="btn btn-snap">
            Snapchat
          </a>
          <RouterLink to="/commander" class="btn btn-outline-dark">Comment commander ?</RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { produits } from '@/data/produits'
import ProduitCard from '@/components/ui/ProduitCard.vue'

useScrollAnimation()
</script>

<style scoped>
.boutique-hero {
  height: 320px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 56px;
  overflow: hidden;
  margin-top: 72px;
}

.boutique-hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('@/assets/images/abou-zaynah6.webp');
  background-size: cover;
  background-position: center 40%;
}

.boutique-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(26,18,8,0.3) 0%, rgba(26,18,8,0.75) 100%);
}

.boutique-hero-content {
  position: relative;
  z-index: 1;
}

.boutique-hero .section-label { color: var(--gold-pale); margin-bottom: 8px; }

.boutique-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.1;
}

.boutique-hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.48);
  margin-bottom: 16px;
}
.boutique-hero-breadcrumb a { color: rgba(255,255,255,0.48); transition: color var(--transition); }
.boutique-hero-breadcrumb a:hover { color: var(--gold-pale); }

.catalogue {
  padding: 72px 0 96px;
}


.catalogue-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}


.cta-strip {
  background: var(--sand);
  padding: 56px 0;
  text-align: center;
}

.cta-strip-title {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 10px;
}

.cta-strip p {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 28px;
}

.cta-strip-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .catalogue-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .catalogue-grid { grid-template-columns: 1fr; }
}
</style>
