<template>
  <div class="panier-page">
    <div class="container">

      <div class="panier-breadcrumb">
        <RouterLink to="/">Accueil</RouterLink><span>›</span><span>Panier</span>
      </div>

      <h1 class="panier-title">Votre panier</h1>

      <!-- Panier vide -->
      <div v-if="items.length === 0" class="panier-empty">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
          <circle cx="9" cy="21" r="1.4"/><circle cx="18" cy="21" r="1.4"/>
          <path d="M1 1h3l2.4 13.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21.6 6H5.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>Votre panier est vide pour le moment.</p>
        <RouterLink to="/boutique" class="btn btn-gold">Découvrir la boutique</RouterLink>
      </div>

      <!-- Panier rempli -->
      <div v-else class="panier-layout">

        <div class="panier-items">
          <div class="panier-items-head">
            <span>Produit</span>
            <span>Quantité</span>
            <span>Sous-total</span>
          </div>

          <div v-for="item in items" :key="item.id" class="panier-item">
            <div class="panier-item-produit">
              <RouterLink :to="`/produit/${item.id}`" class="panier-item-img">
                <img :src="item.image" :alt="item.nom" />
              </RouterLink>
              <div>
                <RouterLink :to="`/produit/${item.id}`" class="panier-item-nom">{{ item.nom }}</RouterLink>
                <span class="panier-item-format">{{ item.format }}</span>
                <span class="panier-item-prix-mobile">{{ item.prix }}</span>
              </div>
            </div>

            <div class="panier-item-qty">
              <button type="button" class="qty-btn" @click="updateQty(item.id, item.qty - 1)" aria-label="Diminuer la quantité">−</button>
              <span class="qty-value">{{ item.qty }}</span>
              <button type="button" class="qty-btn" @click="updateQty(item.id, item.qty + 1)" aria-label="Augmenter la quantité">+</button>
            </div>

            <div class="panier-item-subtotal">
              <span>{{ formatPrice(item.prixNum * item.qty) }}</span>
              <button type="button" class="panier-item-remove" @click="removeItem(item.id)" aria-label="Retirer du panier">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <RouterLink to="/boutique" class="panier-continue">← Continuer mes achats</RouterLink>
        </div>

        <aside class="panier-summary">
          <h2>Récapitulatif</h2>
          <div class="panier-summary-row">
            <span>Sous-total</span>
            <span>{{ formatPrice(total) }}</span>
          </div>
          <div class="panier-summary-row panier-summary-total">
            <span>Total</span>
            <span>{{ formatPrice(total) }}</span>
          </div>
          <RouterLink to="/commander" class="btn btn-gold panier-summary-cta">Passer la commande</RouterLink>
        </aside>

      </div>

    </div>
  </div>
</template>

<script setup>
import { useCart } from '@/composables/useCart'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Votre panier',
  description: 'Retrouvez les produits Abu Zaynah ajoutés à votre panier avant de passer commande.',
  canonical: '/panier',
})

const { items, removeItem, updateQty, total } = useCart()

function formatPrice(value) {
  return `${value.toFixed(2).replace(/\.00$/, '')}€`
}
</script>

<style scoped>
.panier-page {
  margin-top: 72px;
  padding: 56px 0 100px;
}

.panier-breadcrumb {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.75rem; color: var(--text-muted);
  margin-bottom: 20px;
}
.panier-breadcrumb a { color: var(--text-muted); transition: color var(--transition); }
.panier-breadcrumb a:hover { color: var(--gold); }

.panier-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 48px;
}

/* ── Vide ─────────────────────────────────────── */
.panier-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
  padding: 80px 20px;
  color: var(--text-muted);
  background: var(--white);
  border: 1px solid var(--sand);
  border-radius: var(--radius-lg);
}
.panier-empty svg { color: var(--sand); }
.panier-empty p { font-size: 1rem; margin-bottom: 4px; }

/* ── Layout ───────────────────────────────────── */
.panier-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 56px;
  align-items: start;
}

/* ── Liste items ──────────────────────────────── */
.panier-items-head {
  display: grid;
  grid-template-columns: 1fr 120px 130px;
  gap: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--sand);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.panier-items-head span:nth-child(2) { text-align: center; }
.panier-items-head span:nth-child(3) { text-align: right; }

.panier-item {
  display: grid;
  grid-template-columns: 1fr 120px 130px;
  gap: 16px;
  align-items: center;
  padding: 22px 0;
  border-bottom: 1px solid var(--sand);
}

.panier-item-produit {
  display: flex;
  align-items: center;
  gap: 16px;
}
.panier-item-img {
  width: 76px; height: 76px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--sand);
  flex-shrink: 0;
  display: block;
}
.panier-item-nom {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 4px;
}
.panier-item-nom:hover { color: var(--gold); }
.panier-item-format {
  display: block;
  font-size: 0.78rem;
  color: var(--text-muted);
}
.panier-item-prix-mobile {
  display: none;
  font-size: 0.85rem;
  color: var(--gold);
  font-weight: 600;
  margin-top: 4px;
}

.panier-item-qty {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.qty-btn {
  width: 30px; height: 30px;
  border-radius: 50%;
  border: 1px solid var(--sand);
  background: var(--white);
  color: var(--brown);
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  transition: border-color var(--transition), color var(--transition);
}
.qty-btn:hover { border-color: var(--gold); color: var(--gold); }
.qty-value {
  font-family: var(--font-serif);
  font-weight: 600;
  color: var(--brown);
  min-width: 16px;
  text-align: center;
}

.panier-item-subtotal {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--brown);
}
.panier-item-remove {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: 4px;
  transition: color var(--transition);
}
.panier-item-remove:hover { color: #c0392b; }

.panier-continue {
  display: inline-block;
  margin-top: 24px;
  font-size: 0.85rem;
  color: var(--text-muted);
  transition: color var(--transition);
}
.panier-continue:hover { color: var(--gold); }

/* ── Récap ────────────────────────────────────── */
.panier-summary {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  position: sticky;
  top: 96px;
}
.panier-summary h2 {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 20px;
}
.panier-summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--brown-mid);
  padding: 12px 0;
  border-bottom: 1px solid rgba(200,134,10,0.12);
}
.panier-summary-shipping span:last-child {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: right;
}
.panier-summary-total {
  border-bottom: none;
  padding-top: 16px;
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--brown);
}
.panier-summary-cta {
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  padding: 15px 20px;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .panier-layout { grid-template-columns: 1fr; gap: 40px; }
  .panier-summary { position: static; }
}

@media (max-width: 640px) {
  .panier-items-head { display: none; }
  .panier-item {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .panier-item-format { margin-bottom: 2px; }
  .panier-item-prix-mobile { display: block; }
  .panier-item-qty { justify-content: flex-start; }
  .panier-item-subtotal { justify-content: space-between; }
}
</style>
