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
  attributes: {
    Type: string
    Multiplier: number
    Discount: number
  }
}

export type ProductNameProps = {
  Name: string
  Price: number
  Description: string
  Url: string
}

export type Snack = {
  id: number
  Quantity: number
  photo?: string
}

export type Pack = {
  id: string
  attributes: {
    Name: string
    Description: string
    ExtraDiscount: number
    Item: PackItem[]
    Benefits: BenefitArray[]
  }
}

export type BenefitArray = {
  id: string
  benefits: {
    data: Benefit[]
  }
}

export type Benefit = {
  id: string
  attributes: {
    Benefit: string
  }
}

export type PackItem = {
  id: string
  Quantity: number
  product: {
    data: Product
  }
}

export type ProductsCollection = {
  products: Product[]
}

export type Product = {
  id: string
  attributes: {
    Name: string
    BaseValue: number
    Weight: number
    Height: number
    Length: number
    Image: Image
    NutritionFacts: NutritionFacts
  }
}

export type Image = {
  data: {
    attributes: {
      url: string
      ext: string
      hash: string
    }
  }
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

export type OrderSnack = {
  id: string
  Quantity: number
  product: {
    data: {
      id: string
      attributes: {
        Name: string
      }
    }
  }
}

export type ExpectedDay = {
  date: string
}

export type ExpectedPayments = {
  contentCostBeforeDiscount: number
  monthsMultiplier: number
  finalValueInCentavos: number
  absoluteDiscountApplied: number
}

export type Address = {
  bairro: string
  cep: string
  complemento: null | string
  logradouro: string
  municipio: string
  nome: string
  numero: null | string
  uf: string
}

export type Deliveries = {
  company: string
  expectedArrivalDays: ExpectedDay[]
  fee: number
}

export type Period = {
  data: Plans
}

export type Order = {
  attributes: {
    Title: string
    address: Address
    createdAt: string
    deliveries: Deliveries
    expectedPayments: ExpectedPayments
    period: Period
    snack: OrderSnack[]
    isConfirmed?: boolean
    deactivated?: boolean
    deactivationAuthor: string | null
  }
}

export type UserME = {
  id: string
  username: string
  email: string
  phone: string
  postCode: string
  addressNumber: string
  addressComplement: string
  order: {
    data: Order[] | null
  }
}
