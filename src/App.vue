<template>
  <NavBar :solid="!isHome" />
  <RouterView />
  <FooterBar />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import FooterBar from '@/components/layout/FooterBar.vue'

const route = useRoute()
const isHome = computed(() => route.name === 'home')
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
