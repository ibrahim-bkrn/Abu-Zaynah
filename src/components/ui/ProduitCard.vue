<template>
  <article class="pc fade-up" :style="delayStyle">

    <!-- Image -->
    <RouterLink :to="`/produit/${produit.id}`" class="pc-img-wrap">
      <img :src="produit.image" :alt="produit.nom" loading="lazy" class="pc-img" />
      <span class="pc-badge">{{ produit.flag }} {{ produit.pays }}</span>
    </RouterLink>

    <!-- Infos -->
    <div class="pc-body">
      <div class="pc-row">
        <div>
          <h3 class="pc-name">{{ produit.nom }}</h3>
          <p class="pc-format">{{ produit.format }}</p>
        </div>
        <span class="pc-price">{{ produit.prix }}</span>
      </div>

      <p class="pc-desc">{{ produit.description }}</p>

      <RouterLink :to="`/produit/${produit.id}`" class="pc-cta">
        Bienfaits &amp; Origines
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.4"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </RouterLink>
    </div>

  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  produit: { type: Object, required: true },
  delay:   { type: Number, default: 0 },
})

const delayStyle = computed(() =>
  props.delay ? { transitionDelay: `${props.delay}s` } : {}
)
</script>

<style scoped>
/* ── Carte ────────────────────────────────────────── */
.pc {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid rgba(232, 220, 200, 0.6);
  transition: box-shadow var(--transition);
}
.pc:hover {
  box-shadow: var(--shadow-card);
}

/* ── Image ────────────────────────────────────────── */
.pc-img-wrap {
  position: relative;
  display: block;
  overflow: hidden;
  height: 350px;
  background: var(--sand);
  flex-shrink: 0;
}

.pc-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.4s ease;
}
.pc:hover .pc-img {
  opacity: 0.82;
}

.pc-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(26, 18, 8, 0.65);
  backdrop-filter: blur(6px);
  color: var(--gold-pale);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  padding: 4px 11px;
  border-radius: 30px;
}

/* ── Corps ────────────────────────────────────────── */
.pc-body {
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.pc-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.pc-name {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--brown);
  line-height: 1.2;
  margin: 0 0 4px;
}

.pc-format {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0;
}

.pc-price {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--gold);
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: -15px;
}

/* ── Description ─────────────────────────────────── */
.pc-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
  margin: 0;
}

/* ── CTA minimaliste ──────────────────────────────── */
.pc-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
  width: fit-content;
  transition: color var(--transition), border-color var(--transition);
}
.pc-cta:hover {
  color: var(--gold);
  border-bottom-color: var(--gold);
}
.pc-cta svg {
  transition: transform var(--transition);
}
.pc-cta:hover svg {
  transform: translateX(3px);
}
</style>
