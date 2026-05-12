<template>
  <div>
    <div v-if="produit" class="product-page">
      <div class="container">

        <!-- Breadcrumb -->
        <div class="product-breadcrumb">
          <RouterLink to="/">Accueil</RouterLink>
          <span>›</span>
          <RouterLink to="/boutique">Boutique</RouterLink>
          <span>›</span>
          <span>{{ produit.nom }}</span>
        </div>

        <!-- Layout principal -->
        <div class="product-layout">

          <!-- Galerie -->
          <div class="product-gallery">
            <div class="product-gallery-inner">
              <div v-if="produit.gallery && produit.gallery.length > 1" class="product-thumbnails">
                <button
                  v-for="(img, i) in produit.gallery"
                  :key="i"
                  class="product-thumb"
                  :class="{ active: activeImg === img }"
                  @click="activeImg = img"
                >
                  <img :src="img" :alt="`${produit.nom} vue ${i + 1}`" loading="lazy" />
                </button>
              </div>
              <div class="product-main-img">
                <img :src="activeImg" :alt="produit.nom" fetchpriority="high" />
              </div>
            </div>
            <div class="product-origin-card">
              <span class="product-origin-flag">{{ produit.flag }}</span>
              <div class="product-origin-text">
                <strong>{{ produit.pays }} — {{ produit.region }}</strong>
                <span>Origine certifiée</span>
              </div>
            </div>
          </div>

          <!-- Infos -->
          <div class="product-info">
            <p class="section-label">{{ produit.categorie }}</p>
            <h1 class="product-info-name">{{ produit.nom }}</h1>
            <span class="product-info-format">📦 {{ produit.format }}</span>
            <p class="product-info-price">{{ produit.prix }}</p>
            <p class="product-info-desc" :class="{ clamped: !descExpanded }">{{ produit.description }}</p>
            <button v-if="!descExpanded" class="desc-toggle" @click="descExpanded = true">Lire la suite</button>

            <div class="product-benefits">
              <h3>Points clés</h3>
              <div v-for="(b, i) in produit.bienfaits" :key="i" class="benefit-item">
                <div class="benefit-check">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 6l3 3 5-5"/>
                  </svg>
                </div>
                <span><strong>{{ b.titre }}</strong> — {{ b.texte }}</span>
              </div>
            </div>

            <div v-if="produit.conseilsUtilisation" class="product-conseils">
              <h3>Conseils d'utilisation</h3>
              <p>{{ produit.conseilsUtilisation }}</p>
            </div>

            <!-- CTA Commander -->
            <div class="product-cta">
              <p class="product-cta-title">Commander ce produit</p>
              <p class="product-cta-sub">Envoyez un message direct à Redouane pour passer commande.</p>
              <div class="product-cta-btns">
                <a
                  :href="`https://wa.me/33745563692?text=${produit.waMsg}`"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-wa"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Commander sur WhatsApp
                </a>
                <a
                  href="https://www.snapchat.com/add/abouzaynah"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-snap"
                >
                  Snapchat @abouzaynah
                </a>
              </div>
              <p class="product-cta-note">🔒 Paiement sécurisé · Livraison soignée · Réponse rapide</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Histoire du produit -->
      <section class="product-story">
        <div class="container">
          <div class="product-story-grid">
            <div class="product-story-img fade-up">
              <img :src="produit.storyImg" :alt="`Origine ${produit.nom}`" loading="lazy" />
            </div>
            <div class="product-story-text fade-up" style="transition-delay: 0.15s">
              <p class="section-label">{{ produit.storyLabel }}</p>
              <h2>{{ produit.storyTitle }}</h2>
              <p>{{ produit.storyText }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Autres produits -->
      <section class="autres-produits">
        <div class="container">
          <div class="autres-header fade-up">
            <div>
              <p class="section-label">Vous aimerez aussi</p>
              <h2 class="section-title" style="font-size: clamp(1.6rem, 3vw, 2rem)">Autres produits</h2>
            </div>
            <RouterLink to="/boutique" class="btn btn-outline-dark">Voir tout →</RouterLink>
          </div>
          <div class="autres-produits-grid">
            <ProduitCard
              v-for="(p, i) in relatedProduits"
              :key="p.id"
              :produit="p"
              :delay="i * 0.08"
            />
          </div>
        </div>
      </section>

    </div>

    <!-- 404 produit -->
    <div v-else class="not-found">
      <div class="container">
        <h1>Produit introuvable</h1>
        <RouterLink to="/boutique" class="btn btn-gold">Retour à la boutique</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { getProduitById, produits } from '@/data/produits'
import ProduitCard from '@/components/ui/ProduitCard.vue'

const SITE_URL = 'https://abuzaynah.com'

const route = useRoute()
const { observer } = useScrollAnimation()

const produit = computed(() => getProduitById(route.params.id))
const relatedProduits = computed(() => {
  if (!produit.value) return []
  const autres = produits.filter(p => p.id !== produit.value.id)
  return autres.sort(() => Math.random() - 0.5).slice(0, 3)
})

const activeImg = ref(produit.value?.image)
const descExpanded = ref(false)
watch(produit, (p) => {
  activeImg.value = p?.image
  descExpanded.value = false
}, { immediate: true })

useHead(computed(() => {
  if (!produit.value) return {}

  const p = produit.value
  const title = `${p.nom} — ${p.pays} | Abu Zaynah`
  const description = p.description.slice(0, 155)
  const url = `${SITE_URL}/produit/${p.id}`

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'product' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Product',
              name: p.nom,
              description: p.description,
              url,
              brand: {
                '@type': 'Brand',
                name: 'Abu Zaynah',
              },
              offers: {
                '@type': 'Offer',
                price: p.prix.replace('€', ''),
                priceCurrency: 'EUR',
                availability: 'https://schema.org/InStock',
                seller: {
                  '@type': 'Organization',
                  name: 'Abu Zaynah',
                },
              },
              countryOfOrigin: {
                '@type': 'Country',
                name: p.pays,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Boutique', item: `${SITE_URL}/boutique` },
                { '@type': 'ListItem', position: 3, name: p.nom, item: url },
              ],
            },
          ],
        }),
      },
    ],
  }
}))

watch(() => route.params.id, () => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.product-page {
  margin-top: 72px;
  padding: 64px 0 96px;
}

.product-breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 48px;
}
.product-breadcrumb a { color: var(--text-muted); transition: color var(--transition); }
.product-breadcrumb a:hover { color: var(--gold); }

.product-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 72px;
  align-items: start;
  margin-bottom: 80px;
}

.product-gallery {
  position: sticky;
  top: 96px;
}

.product-main-img {
  flex: 1;
  height: 480px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--sand);
  margin-bottom: 14px;
}
.product-main-img img { width: 100%; height: 100%; object-fit: cover; }

.product-gallery-inner {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
}

.product-thumbnails {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}

.product-thumb {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 2px solid var(--sand);
  cursor: pointer;
  padding: 0;
  background: var(--sand);
  transition: border-color var(--transition), opacity var(--transition);
}
.product-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.product-thumb:hover { opacity: 0.8; }
.product-thumb.active { border-color: var(--gold); }

.product-origin-card {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.product-origin-flag { font-size: 1.6rem; }
.product-origin-text strong { display: block; font-size: 0.88rem; font-weight: 600; color: var(--brown); }
.product-origin-text span { font-size: 0.78rem; color: var(--text-muted); }

.product-info .section-label { margin-bottom: 6px; }

.product-info-name {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--brown);
  line-height: 1.1;
  margin-bottom: 8px;
}

.product-info-format {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--sand);
  padding: 5px 12px;
  border-radius: 20px;
  margin-bottom: 0px;
}

.product-info-price {
  font-family: var(--font-serif);
  font-size: 3rem;
  font-weight: 600;
  color: var(--gold);
  margin-bottom: 24px;
}

.product-info-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 8px;
  padding-bottom: 0;
}
.product-info-desc.clamped {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}

.desc-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gold);
  margin-bottom: 28px;
  display: block;
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition);
}
.desc-toggle:hover { border-bottom-color: var(--gold); }

.product-benefits { margin-bottom: 32px; padding-top: 28px; border-top: 1px solid var(--sand); }
.product-benefits h3 {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 14px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}
.benefit-check {
  width: 18px; height: 18px;
  min-width: 18px;
  background: var(--gold-pale);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
}
.benefit-check svg { width: 10px; height: 10px; color: var(--gold); }
.benefit-item span { font-size: 0.9rem; color: var(--brown-mid); line-height: 1.5; }

.product-conseils {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--radius-md);
  padding: 24px;
  margin-bottom: 32px;
}
.product-conseils h3 {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 8px;
}
.product-conseils p {
  font-size: 0.83rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin: 0;
}

.product-cta {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--radius-md);
  padding: 24px;
}
.product-cta-title {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 6px;
}
.product-cta-sub { font-size: 0.83rem; color: var(--text-muted); margin-bottom: 18px; }
.product-cta-btns { display: flex; flex-direction: column; gap: 10px; }
.product-cta-btns .btn { width: 100%; justify-content: center; padding: 14px 20px; font-size: 0.9rem; }
.product-cta-note { font-size: 0.76rem; color: var(--text-muted); text-align: center; margin-top: 12px; }

.product-story {
  padding: 72px 0;
  background: var(--sand);
}
.product-story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.product-story-img {
  height: 380px;
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.product-story-text h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 600;
  color: var(--brown);
  line-height: 1.2;
  margin-bottom: 0;
}
.product-story-text p {
  font-size: 0.97rem;
  color: var(--text-muted);
  line-height: 1.82;
  margin-top: 16px;
}

.autres-produits { padding: 80px 0; }
.autres-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.autres-produits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.not-found {
  margin-top: 72px;
  padding: 120px 0;
  text-align: center;
}
.not-found h1 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--brown);
  margin-bottom: 32px;
}

@media (max-width: 900px) {
  .product-layout { grid-template-columns: 1fr; gap: 40px; }
  .product-gallery { position: static; }
  .product-main-img { height: 340px; }
  .product-gallery-inner { flex-direction: column; }
  .product-thumbnails { flex-direction: row; order: 2; padding-bottom: 18px; }
  .product-main-img { order: 1; }
  .product-story-grid { grid-template-columns: 1fr; }
  .product-story-img { height: 260px; }
  .autres-produits-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .autres-produits-grid { grid-template-columns: 1fr; }
  .autres-header { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>
