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
          <li><RouterLink to="/commander">Commander</RouterLink></li>
        </ul>

        <div class="navbar-cta">
          <RouterLink to="/commander" class="btn btn-gold">Commander</RouterLink>
        </div>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <nav class="mobile-nav" :class="{ open: menuOpen }">
        <RouterLink to="/" @click="closeMenu">Accueil</RouterLink>
        <RouterLink to="/boutique" @click="closeMenu">Boutique</RouterLink>
        <a href="/#bienfaits" @click="closeMenu">Bienfaits</a>
        <RouterLink to="/commander" @click="closeMenu">Commander</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useNavScroll } from '@/composables/useNavScroll'

const props = defineProps({
  solid: {
    type: Boolean,
    default: false,
  },
})

const { isScrolled } = useNavScroll(60)
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}
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
  height: 72px;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo-img {
  height: 44px;
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
  font-size: 0.84rem;
  font-weight: 500;
  color: rgba(255,255,255,0.88);
  letter-spacing: 0.03em;
  transition: color var(--transition);
  position: relative;
}

.navbar-nav a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--gold);
  transition: width var(--transition);
}

.navbar-nav a:hover { color: var(--gold-pale); }
.navbar-nav a:hover::after { width: 100%; }
.navbar-nav a.router-link-active::after { width: 100%; }

.navbar.scrolled .navbar-nav a,
.navbar.solid .navbar-nav a { color: var(--brown-mid); }

.navbar.scrolled .navbar-nav a:hover,
.navbar.solid .navbar-nav a:hover { color: var(--gold); }
.navbar.scrolled .navbar-nav a.router-link-active,
.navbar.solid .navbar-nav a.router-link-active { color: var(--gold); }

.navbar-cta { display: flex; align-items: center; gap: 10px; }
.navbar-cta .btn { padding: 10px 22px; font-size: 0.68rem; }

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
  .navbar-nav, .navbar-cta { display: none; }
  .menu-toggle { display: flex; }
}
</style>
