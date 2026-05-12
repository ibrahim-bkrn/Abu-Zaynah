import { useHead } from '@unhead/vue'

const SITE_URL = 'https://abuzaynah.com'
const SITE_NAME = 'Abu Zaynah'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export function useSeo({ title, description, canonical, ogImage, type = 'website' } = {}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Miels Rares & Nigelle d'Exception`
  const resolvedCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: resolvedCanonical },
      { property: 'og:image', content: resolvedOgImage },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: resolvedOgImage },
    ],
    link: [
      { rel: 'canonical', href: resolvedCanonical },
    ],
  })
}

export function useJsonLd(schema) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
      },
    ],
  })
}
