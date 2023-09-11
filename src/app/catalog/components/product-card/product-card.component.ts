import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { SimpleProduct } from 'src/app/shared/models/simple-product.model'

@Component({
  selector: 'ec-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() public product!: SimpleProduct
  @Input() public addToCartHandler!: ({ productId, variantId }: { productId: string; variantId: number }) => void
  @Input() public isInCart!: boolean | null

  public isLoading = false

  public maxDescriptionLength = 100

  public cutDescription(description: string): string {
    return description.slice(0, this.maxDescriptionLength)
  }

  public addToCart(event: MouseEvent): void {
    event.stopPropagation()
    this.isLoading = true
    this.addToCartHandler({ productId: this.product.id, variantId: this.product.variantId })
  }
}
