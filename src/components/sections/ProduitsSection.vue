<template>
  <section class="produits-preview" id="produits">
    <div class="container">
      <div class="produits-preview-header fade-up">
        <p class="section-label">Notre sélection</p>
        <h2 class="section-title">Des produits d'exception</h2>
        <div class="gold-line center"></div>
        <p class="section-subtitle">
          Chaque produit est sélectionné à la source et livré dans le respect
          de sa qualité naturelle.
        </p>
      </div>

      <div class="produits-grid">
        <ProduitCard
          v-for="(produit, i) in produitsPreview"
          :key="produit.id"
          :produit="produit"
          :delay="i * 0.08"
        />
      </div>

      <div class="produits-preview-cta fade-up">
        <RouterLink to="/boutique" class="btn btn-gold">Voir tous nos produits →</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { produits } from '@/data/produits'
import ProduitCard from '@/components/ui/ProduitCard.vue'

const produitsPreview = produits.slice(0, 3)
</script>

<style scoped>
.produits-preview {
  padding: 96px 0;
  background: var(--white);
}

.produits-preview-header {
  text-align: center;
  margin-bottom: 52px;
}
.produits-preview-header .section-subtitle {
  margin: 10px auto 0;
}

.produits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 44px;
}

.produits-preview-cta {
  text-align: center;
}

@media (max-width: 768px) {
  .produits-grid { grid-template-columns: 1fr; }
}
@media (max-width: 900px) and (min-width: 769px) {
  .produits-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
