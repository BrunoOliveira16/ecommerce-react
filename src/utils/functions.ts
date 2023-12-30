export function formatPrice(price = 0) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export function getPrices(price: number | undefined | null) {
  if (price !== null && price !== undefined) {
    return formatPrice(price)
  }

  return 0
}

export function getDescription(description: string) {
  if (description.length > 150) {
    return description.slice(0, 157) + '...'
  }
  return description
}

export function getTitle(title: string) {
  if (title.length > 33) {
    return title.slice(0, 30) + '...'
  }
  return title
}

export const getTotalPrice = (items: GameProps[]) => {
  return items.reduce((prevValue, currentValue) => {
    return (prevValue += currentValue.prices.current!)
  }, 0)
}
