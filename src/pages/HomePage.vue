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
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useSeo, useJsonLd } from '@/composables/useSeo'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import CitationSection from '@/components/sections/CitationSection.vue'
import ProduitsSection from '@/components/sections/ProduitsSection.vue'
import OriginesSection from '@/components/sections/OriginesSection.vue'
import BienfaitsSection from '@/components/sections/BienfaitsSection.vue'
import TemoignagesSection from '@/components/sections/TemoignagesSection.vue'
import CommanderSection from '@/components/sections/CommanderSection.vue'

useSeo({
  title: 'Miels Rares & Nigelle d\'Exception',
  description: 'Abu Zaynah — Miels rares du Yémen (Jujubier, Euphorbe, Blanc) et Nigelle d\'exception d\'Éthiopie. Produits naturels authentiques. Livraison France entière.',
  canonical: '/',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.abuzaynah.com/#organization',
      name: 'Abu Zaynah',
      url: 'https://www.abuzaynah.com',
      description: 'Miels rares du Yémen et Nigelle d\'exception d\'Éthiopie.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33-7-45-56-36-92',
        contactType: 'customer service',
        availableLanguage: 'French',
      },
      areaServed: 'FR',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.abuzaynah.com/#website',
      url: 'https://www.abuzaynah.com',
      name: 'Abu Zaynah',
      publisher: { '@id': 'https://www.abuzaynah.com/#organization' },
      inLanguage: 'fr-FR',
    },
  ],
})

useScrollAnimation()
</script>
