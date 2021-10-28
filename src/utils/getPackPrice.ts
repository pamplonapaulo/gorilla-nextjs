import { Pack } from 'types/api'

export const getPackPrice = (pack: Pack) => {
  let total = 0

  for (let i = 0; i < pack.Item.length; i++) {
    const thisItem = pack.Item[i].Quantity * pack.Item[i].product.BaseValue
    total = total + thisItem
  }
  return total
}
