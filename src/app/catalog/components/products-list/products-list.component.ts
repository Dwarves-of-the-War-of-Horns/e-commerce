import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { map, type Observable } from 'rxjs'

import { CatalogPagination } from '../../../core/commercetools/enums/catalog-pagination.enum'
import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { calculateChunk } from '../../utils/calculate-chunk.util'
import { calculatePaginationLength } from '../../utils/calculate-pagination-length.util'
import { CartFacade } from 'src/app/cart/cart-store/services/cart.facade'
import type { FilterParams } from 'src/app/shared/models/filter-params.model'
import type { SimpleProduct } from 'src/app/shared/models/simple-product.model'

@Component({
  selector: 'ec-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  @Input() public productsData!: { products: SimpleProduct[]; isProductsLoading: boolean } | null

  private productsInCart$ = this.cartFacade.productsInCart$

  public paginationIndex = CatalogPagination.Index

  public filterState: FilterParams = {
    offset: CatalogPagination.Index,
    total: CatalogPagination.Total,
    limit: CatalogPagination.QuantityProducts,
  }

  constructor(
    private cartFacade: CartFacade,
    private catalogFacade: CatalogFacade,
  ) {
    this.catalogFacade.filterState$.subscribe(filterState => {
      this.filterState = {
        ...filterState,
        total: calculatePaginationLength(filterState?.total || 1, filterState?.limit || 1),
      }
    })
  }

  public trackProduct(_: number, { key }: SimpleProduct): string {
    return key
  }

  public addToCart = ({ productId, variantId }: { productId: string; variantId: number }): void => {
    this.cartFacade.addProductToCart({ productId, variantId })
  }

  public isInCart = ({ id }: SimpleProduct): Observable<boolean> => {
    return this.productsInCart$.pipe(
      map(products => (products ? products.some(product => product.productId === id) : false)),
    )
  }

  public goToPage(index: number): void {
    this.paginationIndex = index
    Object.assign(this.filterState, {
      offset: calculateChunk(index, this.filterState.limit || CatalogPagination.QuantityProducts),
    })
    this.catalogFacade.loadProducts(this.filterState)
  }
}
