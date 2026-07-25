<template>
  <header
    class="navbar"
    :class="{
      scrolled: isScrolled,
      solid: props.solid,
    }"
  >
    <div class="container">
      <nav class="navbar-inner">
        <RouterLink to="/" class="navbar-logo">
          <img src="/logoentier.svg" alt="Abu Zaynah" class="navbar-logo-img" />
        </RouterLink>

        <ul class="navbar-nav">
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/boutique">Boutique</RouterLink></li>
          <li><a href="/#bienfaits">Bienfaits</a></li>
        </ul>

        <div class="navbar-cta">
          <div class="navbar-cart-wrap" @mouseenter="handleCartHoverEnter" @mouseleave="handleCartHoverLeave">
            <RouterLink to="/panier" class="navbar-cart" aria-label="Voir le panier">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="9" cy="21" r="1.4"/><circle cx="18" cy="21" r="1.4"/>
                <path d="M1 1h3l2.4 13.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21.6 6H5.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span v-if="count > 0" class="navbar-cart-badge">{{ count }}</span>
            </RouterLink>

            <Transition name="mini-cart-fade">
              <div v-if="miniCartOpen" class="mini-cart">
                <span class="mini-cart-title">Votre panier</span>
                <button type="button" class="mini-cart-close" aria-label="Fermer l'aperçu du panier" @click="closeMiniCart">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round"/>
                  </svg>
                </button>
                <div v-if="items.length === 0" class="mini-cart-empty">
                  <p>Votre panier est vide.</p>
                </div>
                <template v-else>
                  <div class="mini-cart-items">
                    <div v-for="item in items" :key="item.id" class="mini-cart-item">
                      <RouterLink :to="`/produit/${item.id}`" class="mini-cart-item-img" @click="closeMiniCart">
                        <img :src="item.image" :alt="item.nom" />
                      </RouterLink>
                      <div class="mini-cart-item-info">
                        <RouterLink :to="`/produit/${item.id}`" class="mini-cart-item-nom" @click="closeMiniCart">{{ item.nom }}</RouterLink>
                        <span class="mini-cart-item-meta">{{ item.qty }} × {{ item.prix }}</span>
                      </div>
                      <button type="button" class="mini-cart-item-remove" aria-label="Retirer du panier" @click="removeItem(item.id)">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mini-cart-footer">
                    <div class="mini-cart-total">
                      <span>Total</span>
                      <span>{{ formatPrice(total) }}</span>
                    </div>
                    <div class="mini-cart-actions">
                      <RouterLink to="/panier" class="btn btn-gold" @click="closeMiniCart">Voir le panier</RouterLink>
                    </div>
                  </div>
                </template>
              </div>
            </Transition>
          </div>

          <button class="menu-toggle" @click="toggleMenu" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <nav class="mobile-nav" :class="{ open: menuOpen }">
        <RouterLink to="/" @click="closeMenu">Accueil</RouterLink>
        <RouterLink to="/boutique" @click="closeMenu">Boutique</RouterLink>
        <a href="/#bienfaits" @click="closeMenu">Bienfaits</a>
        <RouterLink to="/panier" @click="closeMenu">Panier{{ count > 0 ? ` (${count})` : '' }}</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useNavScroll } from '@/composables/useNavScroll'
import { useCart } from '@/composables/useCart'

const props = defineProps({
  solid: {
    type: Boolean,
    default: false,
  },
})

const { isScrolled } = useNavScroll(60)
const { items, count, total, removeItem, miniCartOpen, openMiniCart, closeMiniCart } = useCart()
const menuOpen = ref(false)
const route = useRoute()

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}

let hoverCloseTimer = null

function handleCartHoverEnter() {
  clearTimeout(hoverCloseTimer)
  // autoClose: false — tant qu'on survole, l'aperçu ne se referme pas tout seul.
  openMiniCart(false)
}

function handleCartHoverLeave() {
  hoverCloseTimer = setTimeout(() => closeMiniCart(), 250)
}

function formatPrice(value) {
  return `${value.toFixed(2).replace(/\.00$/, '')}€`
}

watch(() => route.fullPath, () => closeMiniCart())

// Si le dernier article est retiré depuis l'aperçu, on le referme automatiquement
// (utile sur mobile où il n'y a pas de survol pour le fermer autrement).
watch(() => items.length, (len, prevLen) => {
  if (len === 0 && prevLen > 0) closeMiniCart()
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: transparent;
  transition: background 0.45s ease, box-shadow 0.45s ease;
}

.navbar::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: rgba(255,255,255,0.14);
  transition: background 0.45s ease;
  pointer-events: none;
}

.navbar.scrolled {
  background: rgba(250,247,242,0.96);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 1px 0 rgba(200,134,10,0.12), 0 4px 24px rgba(26,18,8,0.06);
}

.navbar.scrolled::after { background: transparent; }

.navbar.solid {
  background: rgba(250,247,242,0.98);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 1px 0 rgba(200,134,10,0.12), 0 4px 24px rgba(26,18,8,0.06);
}
.navbar.solid::after { background: transparent; }

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo-img {
  height: 50px;
  width: auto;
  display: block;
  transition: filter 0.45s ease;
  filter: brightness(0) invert(1);
}

.navbar.scrolled .navbar-logo-img,
.navbar.solid .navbar-logo-img {
  filter: none;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
}

.navbar-nav a {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255,255,255,0.88);
  letter-spacing: 0.03em;
  transition: color var(--transition);
  position: relative;
}

.navbar-nav a:hover { color: var(--gold-pale); }

.navbar.scrolled .navbar-nav a,
.navbar.solid .navbar-nav a { color: var(--brown-mid); }

.navbar.scrolled .navbar-nav a:hover,
.navbar.solid .navbar-nav a:hover { color: var(--gold); }
.navbar.scrolled .navbar-nav a.router-link-active,
.navbar.solid .navbar-nav a.router-link-active { color: var(--gold); }

.navbar-cta { display: flex; align-items: center; gap: 18px; }
.navbar-cta .btn { padding: 10px 22px; font-size: 0.68rem; }

.navbar-cart-wrap { position: relative; }

.navbar-cart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: rgba(255,255,255,0.88);
  transition: color var(--transition);
}
.navbar.scrolled .navbar-cart,
.navbar.solid .navbar-cart { color: var(--brown-mid); }
.navbar-cart:hover { color: var(--gold-pale); }
.navbar.scrolled .navbar-cart:hover,
.navbar.solid .navbar-cart:hover { color: var(--gold); }

.navbar-cart-badge {
  position: absolute;
  top: -7px; right: -9px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 20px;
  background: var(--gold);
  color: var(--white);
  font-size: 0.62rem;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
}

/* ── Mini-panier ──────────────────────────────────── */
.mini-cart {
  position: absolute;
  top: calc(100% + 20px);
  right: -12px;
  width: 340px;
  background: var(--white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--sand);
  overflow: hidden;
  z-index: 1200;
}
.mini-cart::before {
  content: '';
  position: absolute;
  top: -6px; right: 22px;
  width: 12px; height: 12px;
  background: var(--white);
  border-left: 1px solid var(--sand);
  border-top: 1px solid var(--sand);
  transform: rotate(45deg);
}

.mini-cart-title {
  position: absolute;
  top: 16px; left: 18px;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--brown);
  padding-bottom: 10px;
}

.mini-cart-close {
  position: absolute;
  top: 12px; right: 12px;
  width: 26px; height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--cream);
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  z-index: 1;
  transition: color var(--transition), background var(--transition);
}
.mini-cart-close:hover { color: var(--gold); background: var(--sand); }

.mini-cart-empty {
  padding: 44px 22px 32px;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.mini-cart-items {
  max-height: 320px;
  overflow-y: auto;
  padding: 34px 10px 10px;
}

.mini-cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px;
  border-radius: var(--radius-sm);
  transition: background var(--transition);
}
.mini-cart-item:hover { background: var(--cream); }

.mini-cart-item-img {
  width: 52px; height: 52px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--sand);
  flex-shrink: 0;
  display: block;
}

.mini-cart-item-info { flex: 1; min-width: 0; }
.mini-cart-item-nom {
  display: block;
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--brown);
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mini-cart-item-nom:hover { color: var(--gold); }
.mini-cart-item-meta {
  display: block;
  font-size: 0.76rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.mini-cart-item-remove {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: 6px;
  flex-shrink: 0;
  transition: color var(--transition);
}
.mini-cart-item-remove:hover { color: #c0392b; }

.mini-cart-footer {
  padding: 16px 18px 18px;
  border-top: 1px solid var(--sand);
  background: var(--cream);
}
.mini-cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 14px;
}
.mini-cart-actions {
  display: flex;
  gap: 10px;
}
.mini-cart-actions .btn {
  flex: 1;
  justify-content: center;
  padding: 10px 12px;
  font-size: 0.66rem;
}

.mini-cart-fade-enter-active,
.mini-cart-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mini-cart-fade-enter-from,
.mini-cart-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 600px) {
  .mini-cart {
    position: fixed;
    top: 76px;
    left: 12px;
    right: 12px;
    width: auto;
  }
  .mini-cart::before { display: none; }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  background: none;
  border: none;
}
.menu-toggle span {
  display: block;
  width: 24px; height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: var(--transition);
}

.navbar.scrolled .menu-toggle span,
.navbar.solid .menu-toggle span { background: var(--brown); }

.mobile-nav {
  display: none;
  flex-direction: column;
  background: var(--cream);
  border-top: 1px solid var(--sand);
  padding: 10px 0 18px;
}
.mobile-nav a {
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--brown-mid);
  border-bottom: 1px solid rgba(232,220,200,0.4);
  transition: color var(--transition);
}
.mobile-nav a:hover { color: var(--gold); }
.mobile-nav.open { display: flex; }

@media (max-width: 768px) {
  .navbar-nav { display: none; }
  .navbar-cta { gap: 12px; }
  .menu-toggle { display: flex; }
}
</style>
