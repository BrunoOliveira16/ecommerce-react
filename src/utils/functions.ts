export function formatPrice(price = 0) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export function getDescription(description: string) {
  if (description.length > 95) {
    return description.slice(0, 92) + '...'
  }
  return description
}
