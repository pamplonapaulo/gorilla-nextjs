export const getFirstName = (fullName: string | null | undefined) => {
  if (typeof fullName === 'string') {
    const groups = fullName.match(/(\w{1,})/g)
    if (groups != null) return groups[0]
  }
}
