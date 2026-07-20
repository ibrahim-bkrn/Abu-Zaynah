<template>
  <section class="bienfaits" id="bienfaits">
    <div class="container">

      <div class="bienfaits-header fade-up">
        <h2 class="section-title">Des bienfaits reconnus<br />depuis des siècles</h2>
      </div>

      <div class="c-grid">
        <div
          v-for="(item, i) in bienfaits"
          :key="i"
          class="c-item fade-up"
          :style="{ transitionDelay: `${i * 0.07}s` }"
        >
          <span class="c-ghost">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="c-content">
            <h3 class="c-titre">{{ item.titre }}</h3>
            <p class="c-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const bienfaits = [
  { titre: 'Immunité renforcée',    desc: 'Le miel et la nigelle sont reconnus pour leur capacité à soutenir et renforcer le système immunitaire naturellement.' },
  { titre: '100% Naturel',          desc: 'Aucun additif, aucun conservateur, aucun traitement industriel. Nos produits sont purs, authentiques et intègres.' },
  { titre: 'Bienfaits prouvés',     desc: "Le miel et la nigelle font l'objet de nombreuses études scientifiques confirmant leurs vertus. Des produits que la nature et la science s'accordent à reconnaître." },
  { titre: 'Livraison soignée',     desc: "Chaque commande est préparée avec soin et expédiée dans les meilleurs délais. Votre satisfaction est notre priorité." },
  { titre: 'Qualité vérifiée',      desc: "Nos produits sont sélectionnés avec rigueur. La densité, la couleur, l'arôme — tout est vérifié avant de vous être livré." },
  { titre: 'Service humain',        desc: "Abu Zaynah, c'est une personne réelle, disponible, qui répond à vos questions et gère vos commandes avec soin." },
]
</script>

<style scoped>
.bienfaits {
  padding: 96px 0;
  background: var(--sand);
}

.bienfaits-header {
  text-align: center;
  margin-bottom: 64px;
}
.bienfaits-header .section-subtitle { margin: 10px auto 0; }

/* ── Grille ───────────────────────────────────────── */
.c-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

/* ── Cellule ──────────────────────────────────────── */
.c-item {
  position: relative;
  padding: 44px 36px;
  overflow: hidden;
  background: rgba(250, 247, 242, 0.45);
  border: 1px solid rgba(200, 134, 10, 0.14);
  transition: background 0.35s ease;
}
.c-item:hover {
  background: rgba(250, 247, 242, 0.82);
}

/* ── Chiffre filigrane ────────────────────────────── */
.c-ghost {
  position: absolute;
  top: -14px;
  right: 12px;
  font-family: var(--font-serif);
  font-size: 7.5rem;
  font-weight: 700;
  line-height: 1;
  color: rgba(200, 134, 10, 0.13);
  pointer-events: none;
  user-select: none;
  transition: color 0.35s ease;
}
.c-item:hover .c-ghost {
  color: rgba(200, 134, 10, 0.22);
}

/* ── Contenu ──────────────────────────────────────── */
.c-content {
  position: relative;
  z-index: 1;
}

.c-titre {
  font-family: var(--font-serif);
  font-size: 1.22rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 12px;
  line-height: 1.2;
  transition: color 0.3s;
}
.c-item:hover .c-titre {
  color: var(--gold);
}

.c-desc {
  font-size: 0.88rem;
  color: var(--brown-mid);
  line-height: 1.75;
  margin: 0;
}

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 900px) {
  .c-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .c-grid { grid-template-columns: 1fr; }
}
</style>
