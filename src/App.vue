<template>
  <NavBar :solid="!isHome" />
  <RouterView v-slot="{ Component }">
    <component :is="Component" @vue:mounted="ready = true" />
  </RouterView>
  <FooterBar v-if="ready" />
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import FooterBar from '@/components/layout/FooterBar.vue'

const route = useRoute()
const isHome = computed(() => route.name === 'home')
const ready = ref(false)
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
