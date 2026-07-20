import { computed, reactive, ref, watch } from 'vue'

const STORAGE_KEY = 'abouzaynah_cart'
const miniCartOpen = ref(false)
let miniCartTimer = null

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const items = reactive(loadInitial())

watch(items, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}, { deep: true })

export function useCart() {
  function addItem(produit, qty = 1) {
    const existing = items.find((i) => i.id === produit.id)
    if (existing) {
      existing.qty += qty
    } else {
      items.push({
        id: produit.id,
        nom: produit.nom,
        format: produit.format,
        prix: produit.prix,
        prixNum: produit.prixNum,
        image: produit.image,
        qty,
      })
    }
    openMiniCart()
  }

  function openMiniCart(autoClose = true) {
    miniCartOpen.value = true
    clearTimeout(miniCartTimer)
    if (autoClose) {
      miniCartTimer = setTimeout(() => { miniCartOpen.value = false }, 4000)
    }
  }

  function closeMiniCart() {
    clearTimeout(miniCartTimer)
    miniCartOpen.value = false
  }

  function removeItem(id) {
    const index = items.findIndex((i) => i.id === id)
    if (index !== -1) items.splice(index, 1)
  }

  function updateQty(id, qty) {
    const item = items.find((i) => i.id === id)
    if (!item) return
    if (qty < 1) {
      removeItem(id)
    } else {
      item.qty = qty
    }
  }

  function clearCart() {
    items.splice(0, items.length)
  }

  const count = computed(() => items.reduce((sum, i) => sum + i.qty, 0))
  const total = computed(() => items.reduce((sum, i) => sum + i.prixNum * i.qty, 0))

  return {
    items,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    count,
    total,
    miniCartOpen,
    openMiniCart,
    closeMiniCart,
  }
}
