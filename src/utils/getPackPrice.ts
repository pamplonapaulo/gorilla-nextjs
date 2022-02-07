import { Pack } from 'types/api'

export const getPackPrice = (pack: Pack) => {
  let total = 0

  for (let i = 0; i < pack.attributes.Item.length; i++) {
    const thisItem =
      pack.attributes.Item[i].Quantity *
      pack.attributes.Item[i].product.data.attributes.BaseValue
    total = total + thisItem
  }
  return total
}
