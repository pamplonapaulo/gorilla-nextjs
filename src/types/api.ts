// export type Data = {
//   jwt: string
//   user: User
// }

// export type User = {
//   blocked: null | boolean
//   confirmed: boolean
//   created_at: string
//   email: string
//   id: number
//   provider: string
//   role: Role
//   updated_at: string
//   '[[Prototype]]': Object
//   username: string
// }

// export type Role = {
//   description: string
//   id: number
//   name: string
//   type: string
// }

export type ProductFull = {
  Name: string
  id: string
  quantity: number
  photo: string
  BaseValue: number
  TotalValue: number
  Weight: number
  Height: number
  Width: number
  Length: number
}

export type Plans = {
  id: string
  Type: string
  Multiplier: number
  Discount: number
}

export type ProductNameProps = {
  Name: string
  Price: number
  Description: string
  Url: string
}

export type Snack = {
  id: number
  quantity: number
  photo: string
}

export type Pack = {
  id: string
  Name: string
  Item: PackItem[]
  Description: string
  Image: Image
}

export type PackItem = {
  Quantity: number
  id: string
  product: Product
}

export type ProductsCollection = {
  products: Product[]
}

export type Product = {
  id: string
  Name: string
  BaseValue: number
  Weight: number
  Description: string
  HasStockController: boolean
  AmountInStock: number
  IsActive: boolean
  NutritionFacts: NutritionFacts
  Image1: Image
  Image2: null | Image
}

export type Image = {
  url: string
  ext: string
  hash: string
}

export type NutritionFacts = {
  Obs: null | string
  Carbohydrates: number
  SaturatedFat: number
  Portion: number
  Proteins: number
  TransFat: number
  TotalFat: number
  EnergeticValue: number
  DietaryFiber: number
  Sodium: number
}

export type Portfolio = {
  portfolio: Item[]
}

export type Item = {
  id: string
  Name: string
}

export type Bag = BagItem[]

export type BagItem = {
  id: string
  name: string
  imgHash: string
  price: number
  quantityToBuy: number
  quantityToSubscribe: number
}

export type Params = {
  params: {
    slug: string
  }
}
