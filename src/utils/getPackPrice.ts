import { Pack } from 'types/api'
import { formatCents } from './formatCents'

export const getPackPrice = (pack: Pack) => {
  let total = 0

  for (let i = 0; i < pack.attributes.Item.length; i++) {
    const thisItem =
      pack.attributes.Item[i].Quantity *
      pack.attributes.Item[i].product.data.attributes.prices.mensal.centavos
    total = total + thisItem
  }
  return formatCents(total)
}
