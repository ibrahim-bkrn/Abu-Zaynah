import { reactive } from 'vue'
import img4 from '@/assets/images/abou-zaynah4.webp'
import img5 from '@/assets/images/abou-zaynah5.webp'

import imgMielJujubier   from '@/assets/images/imagesProduits/mielJujubier.webp'
import imgMielBlanc      from '@/assets/images/imagesProduits/mielBlanc.webp'
import imgHuileNigelle   from '@/assets/images/imagesProduits/huile de nigelle.webp'
import imgHuileNigelle2  from '@/assets/images/nigelle2.webp'
import imgGelulesNigelle  from '@/assets/images/imagesProduits/gelule de nigelle.webp'
import imgGelulesNigelle2 from '@/assets/images/nigelle.webp'
import imgAmlou          from '@/assets/images/imagesProduits/amlou.webp'
import imgAmlou2         from '@/assets/images/imagesProduits/amlou2.png'
import imgAmlouSecondaire from '@/assets/images/amlouSecondaire.webp'
import imgEuphorbe       from '@/assets/images/imagesProduits/euphrobe.webp'

import imgMielJujubier2 from '@/assets/images/imagesProduits/mielJujubier2.webp'
import imgJuju          from '@/assets/images/imagesProduits/juju.png'
import imgJuju2         from '@/assets/images/imagesProduits/juju2.png'
import imgEuphorbe2     from '@/assets/images/imagesProduits/euphrobe2.webp'
import imgMielBlanc2    from '@/assets/images/imagesProduits/mielBlanc2.png'
import imgMielBlanc3    from '@/assets/images/imagesProduits/mielBlanc3.png'

export const produits = reactive([
  {
    id: 'miel-jujubier',
    nom: 'Miel de Jujubier',
    categorie: 'miel',
    pays: 'Yémen',
    flag: '🇾🇪',
    region: 'Vallées isolées du Hadramaout',
    format: 'Pot 250g',
    prix: '39€',
    prixNum: 39,
    image: imgJuju,
    gallery: [imgJuju, imgJuju2, imgMielJujubier2],
    storyImg: imgJuju,
    description: "L'un des miels les plus prisés au monde, et ce pour sa qualité premium, ses bienfaits préservés grâce à un savoir-faire, une technique ancestrale dans un des lieux les plus préservés du monde dans les vallées de Hadramout.",
    bienfaits: [
      { titre: 'Energisant', texte: 'Idéal pour combattre la fatigue et soutenir le système immunitaire.' },
      { titre: 'Antioxydant', texte: 'Protège les cellules contre les radicaux libres.' },
      { titre: 'Antibactérien', texte: 'Combat les défaillances immunitaires et aide à la cicatrisation.' },
    ],
    conseilsUtilisation: "Pour profiter pleinement des bienfaits de ce miel, il est recommandé de consommer une cuillère le matin, à jeun. Veillez à conserver le produit dans un endroit frais et sec, à l'abri de la lumière et de l'humidité pour préserver toutes ses propriétés.",
    storyLabel: 'Origine',
    storyTitle: 'Des vallées secrètes du Yémen',
    storyText: 'Le miel de Jujubier, appelé "Sidr" en arabe, est considéré comme l\'un des miels les plus précieux au monde.',
    waMsg: 'Bonjour%20!%20Je%20souhaite%20commander%20du%20Miel%20de%20Jujubier%20(Abu%20Zaynah).',
    related: ['miel-euphorbe', 'miel-blanc', 'huile-nigelle'],
    tags: ['miel', 'yemen'],
  },
  {
    id: 'miel-euphorbe',
    nom: "Miel d'Euphorbe",
    categorie: 'miel',
    pays: 'Yémen',
    flag: '🇾🇪',
    region: 'Montagnes du Yémen central',
    format: 'Pot 250g',
    prix: '25€',
    prixNum: 25,
    image: imgMielJujubier,
    gallery: [imgMielJujubier, imgEuphorbe, imgEuphorbe2],
    galleryPosition: ['center', 'center 75%', 'center'],
    storyImg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: "Ce miel séduit par son profil aromatique à part. Sa robe peut varier du doré à l'ambré selon les récoltes. Dès la première cuillère, il révèle une présence affirmée, une belle longueur en bouche et une signature gustative recherchée par les connaisseurs. Souvent appelé miel de cactus ou miel de daghmouss, ces appellations renvoient à un même univers : celui d'un miel rare, intense et profondément marqué par son terroir.",
    bienfaits: [
      { titre: 'Réchauffant', texte: 'Pour le corps, les articulations et la gorge — idéal en hiver.' },
      { titre: 'Tonifiant', texte: 'Renforce la vitalité et l\'énergie.' },
      { titre: 'Antioxydant', texte: 'Aide à lutter contre le stress oxydatif.' },
    ],
    storyLabel: 'Origine',
    storyTitle: "L'or boisé des montagnes yéménites",
    storyText: "Le miel d'Euphorbe est récolté dans les hauteurs du Yémen central, où les abeilles butinent les fleurs de l'euphorbe arborescente (Euphorbia). Ce miel à la saveur unique, légèrement amère et très parfumée, est particulièrement prisé pour ses vertus médicinales.",
    waMsg: "Bonjour%20!%20Je%20souhaite%20commander%20du%20Miel%20d'Euphorbe%20(Abu%20Zaynah).",
    related: ['miel-jujubier', 'miel-blanc', 'huile-nigelle'],
    tags: ['miel', 'yemen'],
  },
  {
    id: 'miel-blanc',
    nom: 'Miel Blanc',
    categorie: 'miel',
    pays: 'Kirghizistan',
    flag: '🇰🇬',
    region: 'Prairies alpines du Tian Shan',
    format: 'Pot 250g',
    prix: '20€',
    prixNum: 20,
    image: imgMielBlanc,
    gallery: [imgMielBlanc, imgMielBlanc2],
    galleryPosition: ['center', 'center 75%'],
    storyImg: imgMielBlanc,
    description: "Originaire des vallées préservées de Naryn, au Kirghizistan, issu du sainfoin — une fleur mellifère réputée pour produire un nectar d'une qualité exceptionnelle. Ce miel unique séduit par sa blancheur rare, sa texture crémeuse idéale à tartiner, et son goût doux et floral aux notes subtiles qui plaisent aux petits comme aux grands. Un produit naturel, parfois enrichi par la luzerne ou le mélilot, alliant richesse aromatique et bienfaits nutritionnels.",
    bienfaits: [
      { titre: 'Flore intestinale', texte: 'Prévient les troubles gastro-intestinaux et apaise l\'acidité gastrique (ballonnements, brûlures).' },
      { titre: 'Énergisant', texte: 'Idéal en cas de fatigue ou juste avant les efforts physiques.' },
      { titre: 'Antibactérien & antioxydant', texte: 'Aide à protéger l\'organisme des agressions extérieures.' },
    ],
    storyLabel: 'Origine',
    storyTitle: 'La blancheur immaculée du Tian Shan',
    storyText: "Le Miel Blanc du Kirghizistan est récolté dans les prairies alpines du Tian Shan, à plus de 2000 mètres d'altitude. Les abeilles butinent une multitude de fleurs sauvages dans un environnement totalement préservé de la pollution industrielle. Ce miel cristallise naturellement en une texture blanche et crémeuse qui le rend unique au monde.",
    waMsg: 'Bonjour%20!%20Je%20souhaite%20commander%20du%20Miel%20Blanc%20du%20Kirghizistan%20(Abu%20Zaynah).',
    related: ['miel-jujubier', 'miel-euphorbe', 'gelules-nigelle'],
    tags: ['miel', 'kirghizistan'],
  },
  {
    id: 'huile-nigelle',
    nom: 'Huile de Nigelle',
    categorie: 'nigelle',
    pays: 'Éthiopie',
    flag: '🇪🇹',
    region: 'Hauts plateaux éthiopiens',
    format: 'Flacon 100ml',
    prix: '12€',
    prixNum: 12,
    image: imgHuileNigelle,
    storyImg: imgHuileNigelle2,
    description: 'Pressée à froid, première pression à froid. La nigelle éthiopienne, réputée pour sa concentration et sa qualité hors du commun."',
    bienfaits: [
      { titre: 'Thymoquinone', texte: 'Riche en thymoquinone, composé actif majeur.' },
      { titre: 'Immunité', texte: 'Soutient le système immunitaire naturellement.' },
      { titre: 'Anti-inflammatoire', texte: 'Propriétés anti-inflammatoires puissantes.' },
      { titre: 'Pressée à froid', texte: 'Première pression à froid pour préserver tous les actifs.' },
    ],
    storyLabel: 'Origine',
    storyTitle: 'La bénédiction des hauts plateaux',
    storyText: "L'huile de nigelle éthiopienne est extraite par pression à froid des graines de Nigella Sativa cultivées sur les hauts plateaux d'Éthiopie. Ce terroir d'exception, à plus de 1800 mètres d'altitude, offre des conditions idéales pour produire une nigelle exceptionnellement concentrée en principes actifs.",
    waMsg: "Bonjour%20!%20Je%20souhaite%20commander%20de%20l'Huile%20de%20Nigelle%20%C3%89thiopie%20(Abu%20Zaynah).",
    related: ['gelules-nigelle', 'miel-jujubier', 'miel-blanc'],
    tags: ['nigelle', 'ethiopie'],
  },
  {
    id: 'gelules-nigelle',
    nom: 'Gélules de Nigelle',
    categorie: 'nigelle',
    pays: 'Éthiopie',
    flag: '🇪🇹',
    region: 'Hauts plateaux éthiopiens',
    format: '60 gélules',
    prix: '12€',
    prixNum: 12,
    image: imgGelulesNigelle,
    storyImg: imgGelulesNigelle2,
    description: 'La puissance de la nigelle noire éthiopienne en gélules végétales. Pratiques, dosées avec précision pour un usage quotidien. Idéal pour ceux qui souhaitent profiter des bienfaits de la nigelle.',
    bienfaits: [
      { titre: '100% végétal', texte: 'Gélules végétales 100% naturelles.' },
      { titre: 'Dosage précis', texte: 'Dosage précis pour un usage quotidien.' },
      { titre: 'Même qualité', texte: 'Même nigelle que notre huile pressée à froid.' },
      { titre: 'Pratique', texte: 'Idéal en déplacement ou en cure.' },
    ],
    storyLabel: 'Origine',
    storyTitle: 'La nigelle, remède prophétique',
    storyText: "Nos gélules de nigelle contiennent la même nigelle éthiopienne d'exception que notre huile. Chaque gélule est remplie de poudre de nigelle pure, sans additif ni excipient inutile. Une solution pratique pour intégrer ce remède dans votre quotidien.",
    waMsg: 'Bonjour%20!%20Je%20souhaite%20commander%20des%20G%C3%A9lules%20de%20Nigelle%20(Abu%20Zaynah).',
    related: ['huile-nigelle', 'miel-jujubier', 'miel-blanc'],
    tags: ['nigelle', 'ethiopie'],
  },
  {
    id: 'amlou',
    nom: 'Amlou',
    categorie: 'spécialité',
    pays: 'Maroc',
    flag: '🇲🇦',
    region: 'Régions amazighes du Souss',
    format: 'Pot 250g',
    prix: '10€',
    prixNum: 10,
    image: imgAmlou,
    gallery: [imgAmlou, imgAmlou2],
    storyImg: imgAmlouSecondaire,
    description: "La pâte berbère ancestrale : amandes torréfiées, miel pur et huile d'argan pressée à froid. Un concentré d'énergie et de saveur que les familles amazighes transmettent de génération en génération.",
    bienfaits: [
      { titre: 'Oméga-9', texte: "Riche en acides gras essentiels grâce à l'huile d'argan." },
      { titre: 'Protéines & magnésium', texte: 'Amandes torréfiées apportant protéines et magnésium.' },
      { titre: 'Énergie durable', texte: 'Miel naturel pour une énergie douce et durable.' },
      { titre: '100% naturel', texte: 'Sans additif, sans conservateur.' },
    ],
    storyLabel: 'Origine',
    storyTitle: 'Le trésor des montagnes amazighes',
    storyText: "L'Almou est une préparation traditionnelle berbère du Souss marocain, préparée en mélangeant des amandes torréfiées finement broyées, du miel de montagne et de l'huile d'argan. Utilisée depuis des siècles comme aliment de force et de vitalité, elle est particulièrement consommée au petit-déjeuner pour bien commencer la journée.",
    waMsg: 'Bonjour%20!%20Je%20souhaite%20commander%20de%20l\'Almou%20(Abu%20Zaynah).',
    related: ['miel-jujubier', 'miel-blanc', 'huile-nigelle'],
    tags: ['almou', 'maroc'],
  },
])

export function getProduitById(id) {
  return produits.find((p) => p.id === id) || null
}

export function getProduitsMini(ids) {
  return ids.map((id) => produits.find((p) => p.id === id)).filter(Boolean)
}

// ── Synchronisation avec la feuille Google Sheets "Produits" ──────────
// Les 6 produits ci-dessus servent de secours si la feuille est injoignable.
const PRODUITS_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1JdLz4hfZjzMX4G06w3EDlLlCkrKeP44Om3NdSCSa5_8/export?format=csv&gid=840147128'
const FETCH_TIMEOUT_MS = 6000
const PLACEHOLDER_IMAGE = img4

const FLAG_BY_PAYS = {
  'Yémen': '🇾🇪',
  'Éthiopie': '🇪🇹',
  'Maroc': '🇲🇦',
  'Kirghizistan': '🇰🇬',
}

function slugify(str) {
  return str
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function waMsgFor(nom) {
  return encodeURIComponent(`Bonjour ! Je souhaite commander ${nom} (Abu Zaynah).`)
}

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++ }
        else { inQuotes = false }
      } else {
        field += c
      }
    } else if (c === '"') {
      inQuotes = true
    } else if (c === ',') {
      row.push(field); field = ''
    } else if (c === '\r') {
      // ignore
    } else if (c === '\n') {
      row.push(field); rows.push(row); row = []; field = ''
    } else {
      field += c
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row) }
  return rows
}

function buildBienfaits(row) {
  const bienfaits = []
  for (let n = 1; n <= 4; n++) {
    const titre = row[`Bienfait${n}_Titre`]?.trim()
    const texte = row[`Bienfait${n}_Texte`]?.trim()
    if (titre) bienfaits.push({ titre, texte: texte || '' })
  }
  return bienfaits
}

async function loadProduitsFromSheet() {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const res = await fetch(PRODUITS_SHEET_CSV_URL, { signal: controller.signal })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const text = await res.text()
    const rows = parseCsv(text.trim())
    const header = rows[0]
    const dataRows = rows.slice(1).filter((r) => r.some((c) => c.trim() !== ''))

    for (const r of dataRows) {
      const row = {}
      header.forEach((h, i) => { row[h.trim()] = (r[i] ?? '').trim() })
      if (!row.Nom) continue

      const existing = produits.find((p) => p.nom === row.Nom)
      const prixNum = Number(row.Prix) || 0
      const image = row.Image || existing?.image || PLACEHOLDER_IMAGE
      const bienfaits = buildBienfaits(row)
      const tags = row.Tags ? row.Tags.split(';').map((t) => t.trim()).filter(Boolean) : []

      const fields = {
        nom: row.Nom,
        categorie: row.Categorie || existing?.categorie || '',
        pays: row.Pays || existing?.pays || '',
        flag: FLAG_BY_PAYS[row.Pays] || existing?.flag || '',
        region: row.Region || existing?.region || '',
        format: row.Format || existing?.format || '',
        prix: `${prixNum}€`,
        prixNum,
        image,
        gallery: row.Image ? [image] : (existing?.gallery || [image]),
        storyImg: existing?.storyImg || image,
        description: row.Description || existing?.description || '',
        bienfaits: bienfaits.length ? bienfaits : (existing?.bienfaits || []),
        conseilsUtilisation: row.ConseilsUtilisation || existing?.conseilsUtilisation || '',
        storyLabel: 'Origine',
        storyTitle: row.StoryTitle || existing?.storyTitle || '',
        storyText: row.StoryText || existing?.storyText || '',
        tags: tags.length ? tags : (existing?.tags || []),
      }

      if (existing) {
        Object.assign(existing, fields)
      } else {
        produits.push({
          id: slugify(row.Nom),
          waMsg: waMsgFor(row.Nom),
          related: [],
          ...fields,
        })
      }
    }
  } catch {
    // Feuille injoignable (réseau, droits...) : on garde les produits codés en dur ci-dessus.
  } finally {
    clearTimeout(timeout)
  }
}

loadProduitsFromSheet()
