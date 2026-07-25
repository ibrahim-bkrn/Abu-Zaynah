<template>
  <div class="checkout-page">
    <div class="container">

      <div class="checkout-breadcrumb">
        <RouterLink to="/">Accueil</RouterLink><span>›</span>
        <RouterLink to="/panier">Panier</RouterLink><span>›</span>
        <span>Commander</span>
      </div>

      <h1 class="checkout-title">Finaliser ma commande</h1>

      <!-- Panier vide -->
      <div v-if="items.length === 0 && !submitted" class="checkout-empty">
        <p>Votre panier est vide, ajoutez d'abord des produits avant de commander.</p>
        <RouterLink to="/boutique" class="btn btn-gold">Découvrir la boutique</RouterLink>
      </div>

      <!-- Confirmation -->
      <div v-else-if="submitted" class="checkout-success">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h2>Commande envoyée !</h2>
        <p>Merci {{ form.prenom }}, nous avons bien reçu votre commande. Nous vous recontacterons rapidement sur WhatsApp au {{ form.telephone }} pour confirmer les modalités de paiement et de livraison.</p>
        <RouterLink to="/boutique" class="btn btn-outline-dark">Retour à la boutique</RouterLink>
      </div>

      <!-- Formulaire -->
      <form v-else class="checkout-layout" @submit.prevent="handleSubmit">

        <div class="checkout-billing">
          <h2>Détails de facturation</h2>

          <div class="checkout-row">
            <div class="checkout-field">
              <label for="nom">Nom *</label>
              <input id="nom" v-model.trim="form.nom" type="text" required />
            </div>
            <div class="checkout-field">
              <label for="prenom">Prénom *</label>
              <input id="prenom" v-model.trim="form.prenom" type="text" required />
            </div>
          </div>

          <div class="checkout-field">
            <label for="adresse">Adresse *</label>
            <input id="adresse" v-model.trim="form.adresse" type="text" required />
          </div>

          <div class="checkout-row">
            <div class="checkout-field">
              <label for="cp">Code postal *</label>
              <input id="cp" v-model.trim="form.codePostal" type="text" required />
            </div>
            <div class="checkout-field">
              <label for="ville">Ville *</label>
              <input id="ville" v-model.trim="form.ville" type="text" required />
            </div>
          </div>

          <div class="checkout-field">
            <label for="pays">Pays *</label>
            <input id="pays" v-model.trim="form.pays" type="text" required />
          </div>

          <div class="checkout-field">
            <label for="email">E-mail *</label>
            <input id="email" v-model.trim="form.email" type="email" required />
          </div>

          <div class="checkout-field">
            <label for="telephone">Tel WhatsApp *</label>
            <input id="telephone" v-model.trim="form.telephone" type="tel" required placeholder="+33 6 12 34 56 78" />
          </div>

          <div class="checkout-field">
            <label for="notes">Notes de commande (facultatif)</label>
            <textarea id="notes" v-model.trim="form.notes" rows="4" placeholder="Précisions sur la livraison, horaires, etc."></textarea>
          </div>
        </div>

        <aside class="checkout-summary">
          <h2>Votre commande</h2>

          <div class="checkout-summary-head">
            <span>Produit</span>
            <span>Sous-total</span>
          </div>

          <div v-for="item in items" :key="item.id" class="checkout-summary-item">
            <span>{{ item.nom }} <em>× {{ item.qty }}</em></span>
            <span>{{ formatPrice(item.prixNum * item.qty) }}</span>
          </div>

          <div class="checkout-summary-row">
            <span>Sous-total</span>
            <span>{{ formatPrice(total) }}</span>
          </div>
          <div class="checkout-summary-row checkout-summary-total">
            <span>Total</span>
            <span>{{ formatPrice(total) }}</span>
          </div>

          <div class="checkout-payment-note">
            <strong>Paiement ultérieur</strong>
            <p>Après avoir validé votre commande, nous vous contacterons pour procéder au paiement.</p>
          </div>

          <p v-if="error" class="checkout-error">{{ error }}</p>

          <button type="submit" class="btn btn-gold checkout-submit" :disabled="sending">
            {{ sending ? 'Envoi en cours…' : 'Valider ma commande' }}
          </button>
        </aside>

      </form>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useCart } from '@/composables/useCart'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Commander',
  description: 'Finalisez votre commande Abu Zaynah : saisissez vos coordonnées, nous vous recontactons pour le paiement et la livraison.',
  canonical: '/commander',
})

// Remplacer par l'endpoint Formspree lié à l'adresse email définitive du site.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvgwboz'

const { items, total, clearCart } = useCart()

const form = reactive({
  nom: '',
  prenom: '',
  adresse: '',
  codePostal: '',
  ville: '',
  pays: '',
  email: '',
  telephone: '',
  notes: '',
})

const sending = ref(false)
const submitted = ref(false)
const error = ref('')

function formatPrice(value) {
  return `${value.toFixed(2).replace(/\.00$/, '')}€`
}

async function handleSubmit() {
  error.value = ''
  sending.value = true

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...form,
        produits: items.map((i) => `${i.nom} × ${i.qty} (${formatPrice(i.prixNum * i.qty)})`).join('\n'),
        total: formatPrice(total.value),
      }),
    })

    if (!response.ok) throw new Error('send-failed')

    submitted.value = true
    clearCart()
  } catch {
    error.value = "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter directement."
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.checkout-page {
  margin-top: 72px;
  padding: 56px 0 100px;
}

.checkout-breadcrumb {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.75rem; color: var(--text-muted);
  margin-bottom: 20px;
}
.checkout-breadcrumb a { color: var(--text-muted); transition: color var(--transition); }
.checkout-breadcrumb a:hover { color: var(--gold); }

.checkout-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 48px;
}

.checkout-empty {
  text-align: center;
  padding: 80px 20px;
  background: var(--white);
  border: 1px solid var(--sand);
  border-radius: var(--radius-lg);
  color: var(--text-muted);
}
.checkout-empty p { margin-bottom: 22px; font-size: 1rem; }

.checkout-success {
  text-align: center;
  padding: 80px 20px;
  background: var(--white);
  border: 1px solid var(--sand);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.checkout-success svg { color: var(--gold); margin-bottom: 6px; }
.checkout-success h2 {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--brown);
}
.checkout-success p {
  max-width: 460px;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 10px;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 56px;
  align-items: start;
}

/* ── Facturation ──────────────────────────────── */
.checkout-billing h2,
.checkout-summary h2 {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 26px;
}

.checkout-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.checkout-field {
  margin-bottom: 20px;
}
.checkout-field label {
  display: block;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--brown-mid);
  margin-bottom: 7px;
}
.checkout-field input,
.checkout-field textarea {
  width: 100%;
  padding: 13px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--sand);
  background: var(--white);
  font-family: var(--font-sans);
  font-size: 0.92rem;
  color: var(--text);
  transition: border-color var(--transition);
}
.checkout-field input:focus,
.checkout-field textarea:focus {
  outline: none;
  border-color: var(--gold);
}
.checkout-field textarea { resize: vertical; }

/* ── Récap ────────────────────────────────────── */
.checkout-summary {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  position: sticky;
  top: 96px;
}

.checkout-summary-head {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--sand);
}

.checkout-summary-item {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.88rem;
  color: var(--brown-mid);
  padding: 14px 0;
  border-bottom: 1px solid rgba(200,134,10,0.1);
}
.checkout-summary-item em { color: var(--text-muted); font-style: normal; }

.checkout-summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--brown-mid);
  padding: 12px 0;
  border-bottom: 1px solid rgba(200,134,10,0.12);
}
.checkout-summary-shipping span:last-child {
  font-size: 0.76rem;
  color: var(--text-muted);
  text-align: right;
  max-width: 200px;
}
.checkout-summary-total {
  border-bottom: none;
  padding-top: 16px;
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--brown);
}

.checkout-payment-note {
  background: var(--white);
  border: 1px solid var(--sand);
  border-radius: var(--radius-md);
  padding: 16px 18px;
  margin-top: 20px;
}
.checkout-payment-note strong {
  display: block;
  font-size: 0.85rem;
  color: var(--brown);
  margin-bottom: 4px;
}
.checkout-payment-note p {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.checkout-error {
  font-size: 0.82rem;
  color: #c0392b;
  margin-top: 16px;
}

.checkout-submit {
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  padding: 15px 20px;
  font-size: 0.85rem;
}
.checkout-submit:disabled { opacity: 0.6; cursor: not-allowed; }

@media (max-width: 900px) {
  .checkout-layout { grid-template-columns: 1fr; gap: 40px; }
  .checkout-summary { position: static; }
  .checkout-row { grid-template-columns: 1fr; gap: 0; }
}
</style>
