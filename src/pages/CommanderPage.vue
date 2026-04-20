<template>
  <div>

    <!-- HERO -->
    <div class="commander-hero">
      <div class="commander-hero-bg"></div>
      <div class="commander-hero-overlay"></div>
      <div class="container commander-hero-content">
        <div class="breadcrumb">
          <RouterLink to="/">Accueil</RouterLink><span>›</span><span>Commander</span>
        </div>
        <p class="section-label">Simple &amp; direct</p>
        <h1>Comment commander ?</h1>
      </div>
    </div>

    <!-- CONTACT PRINCIPAL -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-header fade-up">
          <p class="section-label">Contactez-nous</p>
          <h2 class="section-title">Deux façons de commander</h2>
          <div class="gold-line center"></div>
          <p class="section-subtitle">Pas de panier compliqué. Contactez Abou Zayanh directement — réponse rapide, service humain et de confiance.</p>
        </div>

        <div class="contact-cards">

          <!-- WhatsApp -->
          <div class="contact-card fade-up">
            <div class="contact-card-icon icon-wa">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3>WhatsApp</h3>
            <p>Envoyez un message directement à Abou Zaynah. Indiquez le produit souhaité, la quantité, et votre adresse de livraison.</p>
            <p class="contact-handle">+33 7 45 56 36 92</p>
            <a href="https://wa.me/33745563692?text=Bonjour%20!%20Je%20souhaite%20passer%20une%20commande%20Abu%20Zaynah.%20Voici%20mon%20choix%20%3A%20" target="_blank" rel="noopener" class="btn btn-wa">
              Ouvrir WhatsApp
            </a>
          </div>

          <!-- Snapchat -->
          <div class="contact-card fade-up" style="transition-delay: 0.12s">
            <div class="contact-card-icon icon-snap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFC00" stroke="#1A1A00" stroke-width="0.3">
                <path d="M12.166 0C8.778 0 5.885 1.63 4.283 4.39c-.796 1.38-.957 2.96-.957 4.41 0 .48.03.958.07 1.428-.27.14-.57.21-.87.21-.46 0-.87-.16-1.23-.44-.1-.08-.21-.12-.33-.12-.25 0-.47.2-.47.45 0 .16.08.31.22.4.54.35 1.18.54 1.84.55.12 0 .25-.01.37-.02-.16.56-.26 1.14-.26 1.74 0 .1.01.2.01.3-.13.09-.3.14-.46.14-.26 0-.5-.1-.7-.27-.1-.08-.22-.13-.34-.13-.27 0-.49.22-.49.49 0 .19.1.36.27.44 1.02.55 1.72 1.61 1.72 2.85 0 .54-.14 1.05-.37 1.5-.08.16-.12.33-.12.5 0 .56.44 1.02 1 1.02.18 0 .36-.05.51-.14.73-.43 1.57-.67 2.44-.67.29 0 .58.03.86.08.62.9 1.62 1.48 2.74 1.48.45 0 .88-.1 1.27-.27.39.17.82.27 1.27.27 1.12 0 2.12-.58 2.74-1.48.28-.05.57-.08.86-.08.87 0 1.71.24 2.44.67.15.09.33.14.51.14.56 0 1-.46 1-1.02 0-.17-.04-.34-.12-.5-.23-.45-.37-.96-.37-1.5 0-1.24.7-2.3 1.72-2.85.17-.08.27-.25.27-.44 0-.27-.22-.49-.49-.49-.12 0-.24.05-.34.13-.2.17-.44.27-.7.27-.16 0-.33-.05-.46-.14 0-.1.01-.2.01-.3 0-.6-.1-1.18-.26-1.74.12.01.25.02.37.02.66-.01 1.3-.2 1.84-.55.14-.09.22-.24.22-.4 0-.25-.22-.45-.47-.45-.12 0-.23.04-.33.12-.36.28-.77.44-1.23.44-.3 0-.6-.07-.87-.21.04-.47.07-.948.07-1.428 0-1.45-.16-3.03-.957-4.41C18.115 1.63 15.222 0 11.834 0h.332z"/>
              </svg>
            </div>
            <h3>Snapchat</h3>
            <p>Ajoutez Abou Zaynah sur Snapchat et envoyez votre commande en message privé. Réponse rapide garantie.</p>
            <p class="contact-handle">@abouzaynah</p>
            <a href="https://www.snapchat.com/add/abouzaynah" target="_blank" rel="noopener" class="btn btn-snap">
              Ouvrir Snapchat
            </a>
          </div>

        </div>

        <div class="contact-info-strip fade-up">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          Réponse généralement dans l'heure · Livraison France entière
        </div>

      </div>
    </section>

    <!-- ÉTAPES -->
    <section class="etapes-section">
      <div class="container">
        <div class="etapes-header fade-up">
          <p class="section-label">Le parcours</p>
          <h2 class="section-title">Votre commande, étape par étape</h2>
          <div class="gold-line center"></div>
        </div>

        <div class="etapes-list">
          <div v-for="(etape, i) in etapes" :key="i" class="etape fade-up" :style="{ transitionDelay: `${i * 0.1}s` }">
            <div class="etape-num">{{ i + 1 }}</div>
            <div class="etape-content">
              <h3>{{ etape.titre }}</h3>
              <p>{{ etape.desc }}</p>
              <component :is="etape.link ? 'RouterLink' : 'span'" :to="etape.link || undefined" class="etape-tag">
                {{ etape.tag }}
              </component>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-header fade-up">
          <p class="section-label">Questions fréquentes</p>
          <h2 class="section-title">On répond à tout</h2>
          <div class="gold-line center"></div>
        </div>

        <div class="faq-grid">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item fade-up"
            :style="{ transitionDelay: `${i * 0.08}s` }"
          >
            <h4>{{ faq.q }}</h4>
            <p>{{ faq.r }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta-final">
      <div class="container">
        <p class="section-label">Prêt ?</p>
        <h2 class="cta-final-title fade-up">Je commande maintenant</h2>
        <p class="cta-final-sub fade-up">Un message suffit. Abou Zaynah vous répond rapidement et prend en charge votre commande.</p>
        <div class="cta-final-btns fade-up">
          <a href="https://wa.me/33745563692?text=Bonjour%20!%20Je%20souhaite%20passer%20une%20commande%20Abu%20Zaynah." target="_blank" rel="noopener" class="btn btn-wa">
            WhatsApp
          </a>
          <a href="https://www.snapchat.com/add/abouzaynah" target="_blank" rel="noopener" class="btn btn-snap">
            Snapchat @abouzaynah
          </a>
          <RouterLink to="/boutique" class="btn btn-outline">Voir les produits</RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

const etapes = [
  {
    titre: 'Choisissez votre produit',
    desc: 'Parcourez notre boutique et trouvez le produit qui vous correspond. Chaque fiche produit vous donne les détails sur l\'origine, le format et les caractéristiques.',
    tag: 'Voir la boutique →',
    link: '/boutique',
  },
  {
    titre: 'Contactez Abou Zaynah',
    desc: 'Envoyez un message sur WhatsApp ou Snapchat avec le nom du produit, la quantité souhaitée et votre adresse de livraison. Simple, sans formulaire compliqué.',
    tag: 'WhatsApp · Snapchat',
    link: null,
  },
  {
    titre: 'Confirmation & paiement',
    desc: 'Abou Zaynah vous confirme la disponibilité et le prix total avec les frais de livraison. Le paiement s\'effectue par virement ou PayPal selon votre préférence.',
    tag: 'Paiement sécurisé',
    link: null,
  },
  {
    titre: 'Expédition & livraison',
    desc: 'Votre commande est préparée avec soin et expédiée dans les 48h après confirmation du paiement. Un numéro de suivi vous est communiqué dès l\'envoi.',
    tag: '48h · Suivi inclus',
    link: null,
  },
]

const faqs = [
  {
    q: 'Livrez-vous partout en France ?',
    r: 'Oui, nous livrons sur toute la France métropolitaine, et sur demande en Belgique, Suisse et au Canada. Les frais de livraison sont calculés selon le poids de la commande.',
  },
  {
    q: 'Quels modes de paiement acceptez-vous ?',
    r: 'Virement bancaire et PayPal. Le paiement est demandé avant l\'expédition. ',
  },
  {
    q: 'Puis-je commander plusieurs produits ?',
    r: 'Absolument. Indiquez simplement les produits et quantités souhaités dans votre message.',
  },
  {
    q: 'Sous combien de jours vais-je recevoir ma commande ?',
    r: 'En général 3 à 5 jours ouvrés après confirmation du paiement. En période de forte demande, prévoir jusqu\'à 7 jours. Vous êtes tenu informé à chaque étape.',
  },
]
</script>

<style scoped>
.commander-hero {
  height: 320px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 56px;
  overflow: hidden;
  margin-top: 72px;
}
.commander-hero-bg {
  position: absolute; inset: 0;
  background-image: url('@/assets/images/abou-zaynah3.webp');
  background-size: cover;
  background-position: center 30%;
}
.commander-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(26,18,8,0.35) 0%, rgba(26,18,8,0.78) 100%);
}
.commander-hero-content { position: relative; z-index: 1; }
.commander-hero-content .section-label { color: var(--gold-pale); margin-bottom: 8px; }
.commander-hero-content h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.1;
}
.breadcrumb {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.75rem; color: rgba(255,255,255,0.48);
  margin-bottom: 16px;
}
.breadcrumb a { color: rgba(255,255,255,0.48); transition: color var(--transition); }
.breadcrumb a:hover { color: var(--gold-pale); }

.contact-section {
  padding: 88px 0;
  background: var(--cream);
}
.contact-header { text-align: center; margin-bottom: 60px; }
.contact-header .section-subtitle { margin: 10px auto 0; }
.contact-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 760px;
  margin: 0 auto 52px;
}
.contact-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px 36px;
  text-align: center;
  border: 1px solid var(--sand);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.contact-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
.contact-card-icon {
  width: 64px; height: 64px;
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem;
}
.icon-wa   { background: #e8fff0; }
.icon-snap { background: #fffce0; }
.contact-card h3 { font-family: var(--font-serif); font-size: 1.5rem; font-weight: 600; color: var(--brown); margin: 0; }
.contact-card p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0; }
.contact-card .btn { width: 100%; justify-content: center; padding: 14px 24px; font-size: 0.92rem; margin-top: 4px; }
.contact-handle { font-size: 0.82rem; color: var(--text-muted); margin-top: -4px; font-weight: 500; }
.contact-info-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--text-muted);
  text-align: center;
  max-width: 540px;
  margin: 0 auto;
  background: var(--sand);
  padding: 14px 22px;
  border-radius: 30px;
}
.contact-info-strip svg { color: var(--gold); flex-shrink: 0; }

.etapes-section { padding: 88px 0; background: var(--white); }
.etapes-header { text-align: center; margin-bottom: 60px; }
.etapes-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 680px;
  margin: 0 auto;
  position: relative;
}
.etapes-list::before {
  content: '';
  position: absolute;
  top: 36px; bottom: 36px;
  left: 35px;
  width: 2px;
  background: linear-gradient(180deg, var(--gold) 0%, var(--sand) 100%);
  border-radius: 2px;
}
.etape {
  display: flex;
  gap: 28px;
  align-items: flex-start;
  padding: 28px 0;
  position: relative;
}
.etape-num {
  width: 72px; height: 72px;
  min-width: 72px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  background: var(--white);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--gold);
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}
.etape-content h3 {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 6px;
  margin-top: 16px;
}
.etape-content p { font-size: 0.92rem; color: var(--text-muted); line-height: 1.7; }
.etape-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold);
  background: var(--gold-pale);
  padding: 3px 10px;
  border-radius: 20px;
  margin-top: 8px;
}

.faq-section { padding: 80px 0; background: var(--sand); }
.faq-header { text-align: center; margin-bottom: 48px; }
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}
.faq-item {
  background: var(--cream);
  border-radius: var(--radius-md);
  padding: 22px 24px;
  border: 1px solid rgba(200,134,10,0.1);
}
.faq-item h4 {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 8px;
}
.faq-item p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.65; }

.cta-final { padding: 88px 0; background: var(--brown); text-align: center; }
.cta-final .section-label { color: var(--gold-pale); margin-bottom: 14px; }
.cta-final-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--white);
  margin-bottom: 12px;
  line-height: 1.15;
}
.cta-final-sub { font-size: 1rem; color: rgba(255,255,255,0.52); margin: 0 auto 44px; max-width: 480px; }
.cta-final-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.cta-final-btns .btn { font-size: 1rem; padding: 15px 34px; }

@media (max-width: 768px) {
  .contact-cards { grid-template-columns: 1fr; max-width: 400px; }
  .faq-grid { grid-template-columns: 1fr; }
  .etapes-list::before { display: none; }
}
</style>
