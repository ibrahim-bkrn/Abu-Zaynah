<template>
  <section class="produits-preview" id="produits">
    <div class="container">
      <div class="produits-preview-header fade-up">
        <h2 class="section-title">Des produits d'exception</h2>
        <RouterLink to="/boutique" class="btn btn-outline-dark">Voir tout →</RouterLink>
      </div>

      <div class="produits-grid">
        <ProduitCard
          v-for="(produit, i) in produitsPreview"
          :key="produit.id"
          :produit="produit"
          :delay="i * 0.08"
        />
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 52px;
}
.produits-preview-header .section-title {
  margin: 0;
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
