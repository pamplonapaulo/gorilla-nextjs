import { Benefit } from 'types/api'

export const sortBenefitsById = (arr: Benefit[]) => {
  const beneficios = []

  for (let i = 0; i < arr.length; i++) {
    beneficios.push(arr[i])
  }
  beneficios.sort((a, b) => parseInt(a.benefit.id) - parseInt(b.benefit.id))
  return beneficios
}
