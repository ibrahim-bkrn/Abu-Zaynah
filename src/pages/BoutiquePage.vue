<template>
  <div>
    <!-- HERO -->
    <div class="boutique-hero">
      <img :src="heroBg" alt="" class="boutique-hero-bg" fetchpriority="high" loading="eager" />
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
        <p>Contactez Abu Zaynah directement — réponse rapide, service humain.</p>
        <div class="cta-strip-actions">
          <a href="https://wa.me/33745563692?text=Bonjour%20!%20Je%20souhaite%20passer%20une%20commande%20Abu%20Zaynah." target="_blank" rel="noopener" class="btn btn-wa">
            WhatsApp
          </a>
          <RouterLink to="/panier" class="btn btn-outline-dark">Voir mon panier</RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useSeo, useJsonLd } from '@/composables/useSeo'
import { produits } from '@/data/produits'
import ProduitCard from '@/components/ui/ProduitCard.vue'
import heroBg from '@/assets/images/abou-zaynah6.webp'

useSeo({
  title: 'Boutique — Miels & Nigelle',
  description: 'Découvrez toute la sélection Abu Zaynah : Miel de Jujubier du Yémen, Miel d\'Euphorbe, Miel Blanc du Kirghizistan, Huile de Nigelle, Gélules de Nigelle et Amlou du Maroc.',
  canonical: '/boutique',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Boutique Abu Zaynah',
  description: 'Catalogue complet des produits naturels Abu Zaynah.',
  url: 'https://www.abuzaynah.com/boutique',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.abuzaynah.com/' },
      { '@type': 'ListItem', position: 2, name: 'Boutique', item: 'https://www.abuzaynah.com/boutique' },
    ],
  },
})

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
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
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
