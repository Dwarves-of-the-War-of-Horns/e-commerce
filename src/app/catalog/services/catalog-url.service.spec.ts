import { TestBed } from '@angular/core/testing'

import { CatalogUrlTreeService } from './catalog-url.service'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

const firstCategories: SimpleCategory[] = [
  {
    id: '1',
    name: 'Category1',
    slug: 'category1',
    slugArray: [],
    metaTitle: '',
    metaDescription: '',
    children: [],
  },
  {
    id: '2',
    name: 'Category2',
    slug: 'category2',
    slugArray: [],
    metaTitle: '',
    metaDescription: '',
    children: [
      {
        id: '3',
        name: 'Subcategory1',
        slug: 'subcategory1',
        slugArray: [],
        metaTitle: '',
        metaDescription: '',
        children: [],
      },
    ],
  },
]

describe('CatalogUrlTreeService', () => {
  let service: CatalogUrlTreeService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogUrlTreeService],
    })
    service = TestBed.inject(CatalogUrlTreeService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should update current URL', () => {
    const urlTree = ['category1', 'subcategory1']
    service.updateCurrentUrl(urlTree)
    service.getCurrentUrl$().subscribe(url => {
      expect(url).toEqual(urlTree)
    })
  })

  it('should convert URL tree to SimpleCategory', () => {
    service.updateCurrentUrl(['category2', 'subcategory1'])
    const result = service.convertUrlTreeToSimpleCategory(firstCategories)
    expect(result).toEqual(firstCategories[1].children[0])
  })

  it('should return null if received an empty array', () => {
    const result = service.convertUrlTreeToSimpleCategory(firstCategories, [])
    expect(result).toBeNull()
  })

  it('should return null if the first parameter is null', () => {
    const result = service.convertUrlTreeToSimpleCategory(null, ['category2', 'subcategory1'])
    expect(result).toBeNull()
  })

  it('should return null if the firstCategories[0].slug !== category2', () => {
    const result = service.convertUrlTreeToSimpleCategory(firstCategories, ['category3', 'subcategory1'])
    expect(result).toBeNull()
  })

  it('should return null if the first parameter is null', () => {
    const result = service.convertUrlTreeToNavigationArray(null, ['category2', 'subcategory1'])
    expect(result).toEqual([])
  })

  it('should return null if the firstCategories[0].slug !== category2', () => {
    const result = service.convertUrlTreeToNavigationArray(firstCategories, ['category3', 'subcategory1'])
    expect(result).toEqual([])
  })
})
