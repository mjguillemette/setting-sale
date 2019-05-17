export function selectSaleItems(items) {
  return items.filter(isOnSale)
}

function isOnSale (item) {
  return (item.discount > 0)
}