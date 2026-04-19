<template>
  <section class="temoignages" id="temoignages">
    <div class="container">

      <div class="temoignages-header fade-up">
        <p class="section-label">Ils nous font confiance</p>
        <h2 class="section-title">Ce que disent<br />nos clients</h2>
        <div class="gold-line center"></div>
      </div>

      <div class="temo-interactive fade-up">

        <!-- Citation -->
        <div class="quote-wrap">
          <span class="deco-quote deco-open">"</span>
          <p class="quote-text" :class="{ animating: isAnimating }">
            {{ displayedTexte }}
          </p>
          <span class="deco-quote deco-close">"</span>
        </div>

        <!-- Bas : étoiles + détail + avatars -->
        <div class="temo-footer">

          <div class="stars" :class="{ animating: isAnimating }">
            <span v-for="n in 5" :key="n">★</span>
          </div>

          <p class="temo-detail" :class="{ animating: isAnimating }">
            {{ displayedDetail }}
          </p>

          <div class="avatars-row">
            <button
              v-for="(temo, index) in temoignages"
              :key="temo.id"
              class="avatar-pill"
              :class="{
                'is-active':  activeIndex === index,
                'is-hovered': hoveredIndex === index && activeIndex !== index
              }"
              @click="handleSelect(index)"
              @mouseenter="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            >
              <div class="avatar-circle">{{ temo.initiale }}</div>

              <div
                class="name-slide"
                :class="{ visible: activeIndex === index || hoveredIndex === index }"
              >
                <span class="name-text">{{ temo.auteur }}</span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { temoignages } from '@/data/temoignages'

const activeIndex    = ref(0)
const isAnimating    = ref(false)
const hoveredIndex   = ref(null)
const displayedTexte  = ref(temoignages[0].texte)
const displayedDetail = ref(temoignages[0].detail)

function handleSelect(index) {
  if (index === activeIndex.value || isAnimating.value) return
  isAnimating.value = true

  setTimeout(() => {
    displayedTexte.value  = temoignages[index].texte
    displayedDetail.value = temoignages[index].detail
    activeIndex.value     = index
    setTimeout(() => { isAnimating.value = false }, 400)
  }, 200)
}
</script>

<style scoped>
/* ── Section ──────────────────────────────────────── */
.temoignages {
  padding: 96px 0;
  background: var(--cream);
  min-height: 700px;
}

.temoignages-header {
  text-align: center;
  margin-bottom: 56px;
}

/* ── Bloc interactif ──────────────────────────────── */
.temo-interactive {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

/* ── Citation ─────────────────────────────────────── */
.quote-wrap {
  position: relative;
  padding: 0 32px;
  max-width: 680px;
  min-height: 170px;
  text-align: center;
}

.deco-quote {
  position: absolute;
  font-family: var(--font-serif);
  font-size: 7rem;
  line-height: 1;
  color: rgba(200, 134, 10, 0.08);
  pointer-events: none;
  user-select: none;
}
.deco-open  { top: -28px; left: 0; }
.deco-close { bottom: -40px; right: 0; }

.quote-text {
  font-family: var(--font-serif);
  font-size: clamp(1.3rem, 2.5vw, 1.75rem);
  font-weight: 400;
  font-style: italic;
  color: var(--brown);
  line-height: 1.65;
  transition: opacity 0.4s ease-out, filter 0.4s ease-out, transform 0.4s ease-out;
}
.quote-text.animating {
  opacity: 0;
  filter: blur(4px);
  transform: scale(0.98);
}

/* ── Bas ──────────────────────────────────────────── */
.temo-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.stars {
  display: flex;
  gap: 4px;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.stars span { color: var(--gold); font-size: 0.85rem; }
.stars.animating { opacity: 0; transform: translateY(6px); }

.temo-detail {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.temo-detail.animating { opacity: 0; transform: translateY(8px); }

/* ── Rangée d'avatars ─────────────────────────────── */
.avatars-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* ── Pilule avatar ────────────────────────────────── */
.avatar-pill {
  display: flex;
  align-items: center;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  padding: 2px;
  background: transparent;
  transition:
    background 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    padding    0.5s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.5s ease;
}

.avatar-pill.is-active {
  background: var(--brown);
  padding: 6px 14px 6px 6px;
  box-shadow: 0 4px 16px rgba(26, 18, 8, 0.18);
}

.avatar-pill.is-hovered {
  background: var(--gold-pale);
  padding: 6px 14px 6px 6px;
}

/* Cercle lettre */
.avatar-circle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--gold-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 600;
  color: var(--gold);
  flex-shrink: 0;
  transition:
    outline 0.5s ease,
    transform 0.3s ease;
}

.avatar-pill.is-active .avatar-circle {
  outline: 2px solid rgba(255, 255, 255, 0.3);
  outline-offset: 2px;
}

.avatar-pill:not(.is-active):hover .avatar-circle {
  transform: scale(1.05);
}

/* Glissement du nom */
.name-slide {
  display: grid;
  grid-template-columns: 0fr;
  overflow: hidden;
  opacity: 0;
  margin-left: 0;
  transition:
    grid-template-columns 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity               0.5s cubic-bezier(0.4, 0, 0.2, 1),
    margin-left           0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.name-slide.visible {
  grid-template-columns: 1fr;
  opacity: 1;
  margin-left: 8px;
}

.name-text {
  white-space: nowrap;
  overflow: hidden;
  display: block;
  font-size: 0.84rem;
  font-weight: 500;
  color: var(--brown);
  transition: color 0.3s ease;
}
.avatar-pill.is-active .name-text {
  color: var(--white);
}

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 600px) {
  .quote-wrap { padding: 0 16px; }
  .deco-quote { font-size: 5rem; }
}
</style>
