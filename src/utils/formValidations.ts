export const isEmailValid = (email: string) =>
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

export const postcodeMask = (brazilianPostCode: string) =>
  brazilianPostCode
    .replace(/\D+/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')

export const phoneMask = (value: string) =>
  value
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
