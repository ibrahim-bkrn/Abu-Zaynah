import { reactive, ref } from 'vue'

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1JdLz4hfZjzMX4G06w3EDlLlCkrKeP44Om3NdSCSa5_8/export?format=csv'
const FETCH_TIMEOUT_MS = 5000

const stockByNom = reactive({})
const loaded = ref(false)
let loadPromise = null

function parseCsv(text) {
  const rows = {}
  const lines = text.trim().split('\n').slice(1)
  for (const line of lines) {
    const sepIndex = line.lastIndexOf(',')
    if (sepIndex === -1) continue
    const nom = line.slice(0, sepIndex).trim().replace(/^"|"$/g, '')
    const qty = parseInt(line.slice(sepIndex + 1).trim(), 10)
    rows[nom] = Number.isFinite(qty) ? qty : 0
  }
  return rows
}

async function fetchStock() {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const res = await fetch(SHEET_CSV_URL, { signal: controller.signal })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const text = await res.text()
    Object.assign(stockByNom, parseCsv(text))
  } catch {
    // Feuille injoignable (panne, droits, réseau...) : on garde le fallback par défaut (disponible).
  } finally {
    clearTimeout(timeout)
    loaded.value = true
  }
}

export function useStock() {
  if (!loadPromise) {
    loadPromise = fetchStock()
  }

  function isEnStock(nom) {
    const qty = stockByNom[nom]
    return qty === undefined ? true : qty > 0
  }

  return { isEnStock, loaded }
}
