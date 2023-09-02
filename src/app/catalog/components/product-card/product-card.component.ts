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

  public maxDescriptionLength = 100

  public cutDescription(description: string): string {
    return description.slice(0, this.maxDescriptionLength)
  }
}
