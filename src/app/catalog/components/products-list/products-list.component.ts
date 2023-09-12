import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { map, type Observable } from 'rxjs'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CatalogPagination } from '../../enums/pagination.enum'
import { getChunk } from '../../helpers/get-chunk.helper'
import { setPaginationState } from '../../helpers/set-pagination-state.helper'
import type { PaginationState } from '../../models/pagination-state.model'
import { CartFacade } from 'src/app/cart/cart-store/services/cart.facade'
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

  public paginationState: PaginationState = {
    index: CatalogPagination.Index,
    length: CatalogPagination.InitLength,
    paginationProducts: [],
    products: [],
  }

  constructor(
    private cartFacade: CartFacade,
    private catalogFacade: CatalogFacade,
  ) {
    this.catalogFacade.productsData$.subscribe(({ products }) => {
      this.paginationState = setPaginationState(products)
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
    this.paginationState.index = index
    this.paginationState.paginationProducts = getChunk(
      this.paginationState.products,
      index,
      CatalogPagination.QuantityProducts,
    )
  }
}
