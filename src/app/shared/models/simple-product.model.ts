export interface SimpleProduct {
  name: string
  slug: string
  key: string
  description: string
  metaTitle: string
  metaDescription: string
  images: string[]
  prices: {
    default: number
    discounted?: number
  }
}
