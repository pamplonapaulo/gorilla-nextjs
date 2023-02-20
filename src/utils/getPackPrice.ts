import { Pack } from 'types/api'
import { formatCents } from './formatCents'

export const getPackPrice = (pack: Pack) => {
  console.log('get pack price.......')
  console.log(pack)

  let total = 0
  for (let i = 0; i < pack.attributes.Item.length; i++) {
    console.log('pack.attributes.Item[i]')
    console.log(pack.attributes.Item[i])

    const thisItem =
      pack.attributes.Item[i].Quantity *
      pack.attributes.Item[i].product.data.attributes.prices.mensal.centavos
    total = total + thisItem
  }
  return formatCents(total)
}
