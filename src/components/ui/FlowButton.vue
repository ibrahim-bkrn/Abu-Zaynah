<template>
  <component
    :is="to ? RouterLink : href ? 'a' : 'button'"
    :to="to || undefined"
    :href="href || undefined"
    class="flow-btn"
    :class="[`flow-btn--${variant}`, size === 'sm' && 'flow-btn--sm']"
    v-bind="$attrs"
  >
    <!-- Flèche gauche (arrive au hover) -->
    <svg class="flow-arr flow-arr--left" width="15" height="15" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2.2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>

    <!-- Texte -->
    <span class="flow-text">{{ text }}</span>

    <!-- Cercle qui gonfle -->
    <span class="flow-circle"></span>

    <!-- Flèche droite (sort au hover) -->
    <svg class="flow-arr flow-arr--right" width="15" height="15" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2.2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </component>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  text:    { type: String, required: true },
  to:      { type: String, default: null },
  href:    { type: String, default: null },
  variant: { type: String, default: 'gold' },   // 'gold' | 'light'
  size:    { type: String, default: 'md' },      // 'md' | 'sm'
})
</script>

<style scoped>
/* ── Base ─────────────────────────────────────────── */
.flow-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  border-radius: 100px;
  border: 1.5px solid transparent;
  background: transparent;
  padding: 13px 36px;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition:
    border-color 600ms cubic-bezier(0.23, 1, 0.32, 1),
    border-radius 600ms cubic-bezier(0.23, 1, 0.32, 1),
    color        600ms cubic-bezier(0.23, 1, 0.32, 1);
}
.flow-btn--sm {
  padding: 10px 26px;
  font-size: 0.66rem;
}
.flow-btn:active {
  transform: scale(0.96);
}

/* ── Variante gold (fond clair) ───────────────────── */
.flow-btn--gold {
  border-color: rgba(200, 134, 10, 0.45);
  color: var(--brown);
}
.flow-btn--gold:hover {
  border-color: transparent;
  border-radius: 12px;
  color: var(--white);
}
.flow-btn--gold .flow-circle {
  background: var(--gold);
}
.flow-btn--gold .flow-arr {
  stroke: var(--gold);
}
.flow-btn--gold:hover .flow-arr {
  stroke: var(--white);
}

/* ── Variante light (fond sombre / hero) ──────────── */
.flow-btn--light {
  border-color: rgba(255, 255, 255, 0.42);
  color: var(--white);
}
.flow-btn--light:hover {
  border-color: transparent;
  border-radius: 12px;
  color: var(--brown);
}
.flow-btn--light .flow-circle {
  background: var(--gold-pale);
}
.flow-btn--light .flow-arr {
  stroke: rgba(255, 255, 255, 0.75);
}
.flow-btn--light:hover .flow-arr {
  stroke: var(--brown);
}

/* ── Cercle gonflant ──────────────────────────────── */
.flow-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  opacity: 0;
  transition:
    width   800ms cubic-bezier(0.19, 1, 0.22, 1),
    height  800ms cubic-bezier(0.19, 1, 0.22, 1),
    opacity 800ms cubic-bezier(0.19, 1, 0.22, 1);
  pointer-events: none;
}
.flow-btn:hover .flow-circle {
  width: 280px;
  height: 280px;
  opacity: 1;
}

/* ── Texte ────────────────────────────────────────── */
.flow-text {
  position: relative;
  z-index: 1;
  translate: 0 0;
  transition: translate 800ms ease-out;
  white-space: nowrap;
}
.flow-btn:hover .flow-text {
  translate: 10px 0;
}

/* ── Flèches ──────────────────────────────────────── */
.flow-arr {
  position: absolute;
  z-index: 1;
  transition:
    left   800ms cubic-bezier(0.34, 1.56, 0.64, 1),
    right  800ms cubic-bezier(0.34, 1.56, 0.64, 1),
    stroke 600ms ease;
}

.flow-arr--left {
  left: -20%;
}
.flow-btn:hover .flow-arr--left {
  left: 18px;
}

.flow-arr--right {
  right: 18px;
}
.flow-btn:hover .flow-arr--right {
  right: -20%;
}
</style>
