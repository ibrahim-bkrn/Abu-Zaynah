<template>
  <section class="histoire" id="histoire">
    <div class="container">
      <div class="histoire-grid">

        <div class="histoire-text fade-up">
          <p class="section-label">Notre histoire</p>
          <h2 class="section-title">De la source<br />à votre table</h2>
          <div class="gold-line"></div>
          <p>
            Abu Zaynah est née d'une passion — celle de partir à la découverte des trésors que différents horizons nous réservent.
            Une invitation à allier les plaisirs de la terre avec tout ce qu'elle peut nous offrir comme bienfait, guidée par une seule directive : l'excellence.
          </p>
          <p>
            Nous sélectionnons personnellement nos miels et produits de la nigelle auprès de producteurs de confiance au Yémen,
            au Kirghizistan et en Éthiopie. Chaque produit est authentique, sans mélange,
            sans compromis.

          </p>

          <div class="histoire-stats">
            <div class="stat">
              <div class="stat-number">3</div>
              <div class="stat-label">Origines sélectionnées</div>
            </div>
            <div class="stat">
              <div class="stat-number">100%</div>
              <div class="stat-label">Naturel &amp; Authentique</div>
            </div>
            <div class="stat">
              <div class="stat-number">✦</div>
              <div class="stat-label">Qualité certifiée</div>
            </div>
          </div>
        </div>

        <div class="histoire-image-wrap fade-up" style="transition-delay: 0.15s">
          <img :src="histoireImg" alt="Abu Zaynah — production de miel" loading="lazy" />
          <div class="histoire-badge">
            <div class="histoire-badge-icon">🍯</div>
            <div class="histoire-badge-text">
              <strong>Récolte directe</strong>
              <span>Sélection à la source</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import histoireImg from '@/assets/images/abou-zaynah7.webp'
</script>

<style scoped>
.histoire {
  padding: 100px 0;
  background: var(--cream);
}

.histoire-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.histoire-text p {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.82;
  margin-bottom: 16px;
}

.histoire-stats {
  display: flex;
  gap: 32px;
  margin-top: 36px;
  padding-top: 30px;
  border-top: 1px solid var(--sand);
}

.stat-number {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--gold);
  line-height: 1;
}

.stat-label {
  font-size: 0.79rem;
  color: var(--text-muted);
  margin-top: 4px;
  font-weight: 500;
}

.histoire-image-wrap {
  position: relative;
  height: 540px;
}

.histoire-image-wrap::before {
  content: '';
  position: absolute;
  top: -16px; right: -16px;
  width: 160px; height: 160px;
  border: 1.5px solid rgba(200,134,10,0.3);
  border-radius: var(--radius-md);
  pointer-events: none;
  z-index: -1;
}

.histoire-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

.histoire-badge {
  position: absolute;
  bottom: 28px;
  left: -24px;
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  box-shadow: var(--shadow-card);
  display: flex;
  align-items: center;
  gap: 12px;
}

.histoire-badge-icon {
  width: 42px; height: 42px;
  background: var(--gold-pale);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.histoire-badge-text strong {
  display: block;
  font-size: 0.87rem;
  font-weight: 600;
  color: var(--brown);
}
.histoire-badge-text span {
  font-size: 0.74rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .histoire-grid { grid-template-columns: 1fr; gap: 48px; }
  .histoire-image-wrap { height: 360px; }
  .histoire-badge { left: 16px; }
}
</style>
