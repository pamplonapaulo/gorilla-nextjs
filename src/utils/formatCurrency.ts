export const formatCurrency = (value: number) => {
  const beforeThousands = (Math.round(value * 100) / 100)
    .toFixed(2)
    .toString()
    .replace('.', ',')
  const regex = /(\d)(?=(\d{3})+(?!\d))/g
  return beforeThousands.replace(regex, '$1.')
}
