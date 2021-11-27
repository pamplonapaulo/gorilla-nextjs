export const formatCurrency = (value: number) =>
  (Math.round(value * 100) / 100).toFixed(2).toString().replace('.', ',')
