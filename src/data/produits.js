import img4 from '@/assets/images/abou-zaynah4.webp'
import img5 from '@/assets/images/abou-zaynah5.webp'

import imgMielJujubier   from '@/assets/images/imagesProduits/mielJujubier.webp'
import imgMielBlanc      from '@/assets/images/imagesProduits/mielBlanc.webp'
import imgHuileNigelle   from '@/assets/images/imagesProduits/huile de nigelle.webp'
import imgHuileNigelle2  from '@/assets/images/nigelle2.webp'
import imgGelulesNigelle  from '@/assets/images/imagesProduits/gelule de nigelle.webp'
import imgGelulesNigelle2 from '@/assets/images/nigelle.webp'
import imgAmlou          from '@/assets/images/imagesProduits/amlou.webp'
import imgEuphorbe       from '@/assets/images/imagesProduits/euphrobe.webp'

import imgMielJujubier2 from '@/assets/images/imagesProduits/mielJujubier2.webp'
import imgEuphorbe2     from '@/assets/images/imagesProduits/euphrobe2.webp'

export const produits = [
  {
    id: 'miel-jujubier',
    nom: 'Miel de Jujubier',
    categorie: 'miel',
    pays: 'Yémen',
    flag: '🇾🇪',
    region: 'Vallées isolées du Hadramaout',
    format: 'Pot 250g',
    prix: '39€',
    image: imgMielJujubier,
    gallery: [imgMielJujubier, imgMielJujubier2],
    storyImg: imgMielJujubier,
    description: 'Le plus prisé des miels yéménites, récolté dans les vallées isolées du Hadramaout. Goût délicat, couleur ambrée dorée, vertus reconnues depuis des siècles dans la tradition islamique.',
    bienfaits: [
      'Propriétés antibactériennes naturelles reconnues',
      'Soutient le système immunitaire',
      'Facilite la digestion et apaise les intestins',
      'Riche en antioxydants et minéraux',
    ],
    storyLabel: 'Origine',
    storyTitle: 'Des vallées secrètes du Yémen',
    storyText: 'Le miel de Jujubier, appelé "Sidr" en arabe, est considéré comme l\'un des miels les plus précieux au monde. Récolté une seule fois par an dans les vallées reculées du Hadramaout, ce miel est produit par des abeilles qui butinent exclusivement les fleurs du jujubier sauvage (Ziziphus spina-christi).',
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
    image: imgEuphorbe,
    gallery: [imgEuphorbe, imgEuphorbe2],
    storyImg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: "Aux vertus reconnues dans la tradition. Récolté en altitude dans les montagnes yéménites. Texture épaisse, saveur boisée et intense. Produit par des abeilles qui butinent l'euphorbe arborescente.",
    bienfaits: [
      'Vertus expectorantes et respiratoires',
      'Soutient le foie et les voies biliaires',
      'Propriétés anti-inflammatoires',
      'Texture épaisse, parfait en cure de santé',
    ],
    storyLabel: 'Origine',
    storyTitle: "L'or boisé des montagnes yéménites",
    storyText: "Le miel d'Euphorbe est récolté dans les hauteurs du Yémen central, où les abeilles butinent les fleurs de l'euphorbe arborescente (Euphorbia). Ce miel à la saveur unique, légèrement amère et très parfumée, est particulièrement prisé pour ses vertus médicinales dans la tradition prophétique.",
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
    image: imgMielBlanc,
    storyImg: imgMielBlanc,
    description: "Issu des prairies alpines de montagne, d'une blancheur et d'une douceur incomparables. Rare et très recherché par les connaisseurs. Sa texture crémeuse et son goût subtil en font un produit d'exception.",
    bienfaits: [
      'Très haute concentration en enzymes actives',
      'Texture crémeuse, idéale tartiné sur du pain',
      'Douceur naturelle sans amertume',
      'Produit dans un environnement vierge de pollution',
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
    image: imgHuileNigelle,
    storyImg: imgHuileNigelle2,
    description: 'Pressée à froid, première pression à froid. La nigelle éthiopienne, réputée pour sa concentration et sa qualité hors du commun. Le Prophète ﷺ disait : "Dans la graine noire il y a un remède à tout sauf à la mort."',
    bienfaits: [
      'Riche en thymoquinone, composé actif majeur',
      'Soutient le système immunitaire naturellement',
      'Propriétés anti-inflammatoires puissantes',
      'Pressée à froid pour préserver tous les actifs',
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
    image: imgGelulesNigelle,
    storyImg: imgGelulesNigelle2,
    description: 'La puissance de la nigelle noire éthiopienne en gélules végétales. Pratiques, dosées avec précision pour un usage quotidien. Idéal pour ceux qui souhaitent profiter des bienfaits de la nigelle de manière pratique.',
    bienfaits: [
      'Gélules végétales 100% naturelles',
      'Dosage précis pour un usage quotidien',
      'Même qualité que notre huile pressée à froid',
      'Pratique en déplacement ou en cure',
    ],
    storyLabel: 'Origine',
    storyTitle: 'La nigelle, remède prophétique',
    storyText: "Nos gélules de nigelle contiennent la même nigelle éthiopienne d'exception que notre huile. Chaque gélule est remplie de poudre de nigelle pure, sans additif ni excipient inutile. Une solution pratique pour intégrer ce remède prophétique dans votre quotidien.",
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
    image: imgAmlou,
    storyImg: imgAmlou,
    description: "La pâte berbère ancestrale : amandes torréfiées, miel pur et huile d'argan pressée à froid. Un concentré d'énergie et de saveur que les familles amazighes transmettent de génération en génération.",
    bienfaits: [
      "Riche en acides gras essentiels (oméga-9) grâce à l'huile d'argan",
      'Amandes torréfiées apportant protéines et magnésium',
      'Miel naturel pour une énergie douce et durable',
      'Sans additif, sans conservateur — 100% naturel',
    ],
    storyLabel: 'Origine',
    storyTitle: 'Le trésor des montagnes amazighes',
    storyText: "L'Almou est une préparation traditionnelle berbère du Souss marocain, préparée en mélangeant des amandes torréfiées finement broyées, du miel de montagne et de l'huile d'argan. Utilisée depuis des siècles comme aliment de force et de vitalité, elle est particulièrement consommée au petit-déjeuner pour bien commencer la journée.",
    waMsg: 'Bonjour%20!%20Je%20souhaite%20commander%20de%20l\'Almou%20(Abu%20Zaynah).',
    related: ['miel-jujubier', 'miel-blanc', 'huile-nigelle'],
    tags: ['almou', 'maroc'],
  },
]

export function getProduitById(id) {
  return produits.find((p) => p.id === id) || null
}

export function getProduitsMini(ids) {
  return ids.map((id) => produits.find((p) => p.id === id)).filter(Boolean)
}
