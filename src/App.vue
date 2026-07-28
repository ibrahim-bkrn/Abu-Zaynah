<template>
  <NavBar :solid="!isHome" />

  <div v-if="pageError" class="page-error">
    <div class="container">
      <p class="page-error-title">Un problème est survenu lors de l'affichage de cette page.</p>
      <p class="page-error-sub">Cela peut arriver ponctuellement. Réessayez, ça repart généralement du bon pied.</p>
      <button type="button" class="btn btn-gold" @click="reload">Recharger la page</button>
    </div>
  </div>

  <RouterView v-else v-slot="{ Component }">
    <component :is="Component" @vue:mounted="ready = true" />
  </RouterView>

  <FooterBar v-if="ready" />
</template>

<script setup>
import { computed, onErrorCaptured, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import NavBar from '@/components/layout/NavBar.vue'
import FooterBar from '@/components/layout/FooterBar.vue'

// Valeurs par défaut, surchargées par chaque page via useSeo() dans composables/useSeo.js.
useHead({
  title: 'Abu Zaynah — Miels Rares & Nigelle d\'Exception',
  meta: [
    { name: 'description', content: "Abu Zaynah — Miels rares du Yémen et Nigelle d'exception. Miel de Jujubier, Miel Blanc, Huile de Nigelle éthiopienne. Livraison France entière." },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Abu Zaynah' },
    { property: 'og:locale', content: 'fr_FR' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.abuzaynah.com/' },
  ],
})

const route = useRoute()
const isHome = computed(() => route.name === 'home')
const ready = ref(import.meta.env.SSR)
const pageError = ref(false)

onErrorCaptured((err, instance, info) => {
  console.error('[Abu Zaynah] Erreur lors du rendu de la page :', err, info)
  pageError.value = true
  return false
})

watch(() => route.fullPath, () => { pageError.value = false })

function reload() {
  window.location.reload()
}
</script>

<style>
#app {
  min-height: 100vh;
}

.page-error {
  margin-top: 72px;
  padding: 120px 0;
  text-align: center;
}
.page-error-title {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--brown);
  margin-bottom: 10px;
}
.page-error-sub {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-bottom: 28px;
}
</style>
