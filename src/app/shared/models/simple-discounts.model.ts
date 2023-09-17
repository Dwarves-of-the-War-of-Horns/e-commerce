interface Discount {
  code: string
  description: string
}

export type SimpleDiscounts = Record<string, Discount>
