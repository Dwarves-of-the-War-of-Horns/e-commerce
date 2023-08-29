export interface SimpleCategory {
  id: string
  key?: string
  name: string
  slug: string
  metaTitle: string
  metaDescription: string
  children: SimpleCategory[]
}
