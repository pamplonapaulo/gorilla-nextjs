export const formatCents = (num: number) =>
  (num / 100).toFixed(2).toString().replace(/\./g, ',')
