<template>
  <div>
    <HeroSection />
    <AboutSection />
    <CitationSection />
    <ProduitsSection />
    <OriginesSection />
    <BienfaitsSection />
    <TemoignagesSection />
    <CommanderSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import CitationSection from '@/components/sections/CitationSection.vue'
import ProduitsSection from '@/components/sections/ProduitsSection.vue'
import OriginesSection from '@/components/sections/OriginesSection.vue'
import BienfaitsSection from '@/components/sections/BienfaitsSection.vue'
import TemoignagesSection from '@/components/sections/TemoignagesSection.vue'
import CommanderSection from '@/components/sections/CommanderSection.vue'

useScrollAnimation()
</script>
