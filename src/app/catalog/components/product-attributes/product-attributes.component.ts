import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import type { Attribute } from '@commercetools/platform-sdk'

@Component({
  selector: 'ec-product-attributes',
  templateUrl: './product-attributes.component.html',
  styleUrls: ['./product-attributes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAttributesComponent {
  @Input() public attributes!: Attribute[]

  public trackByName(index: number, attribute: Attribute): string {
    return attribute.name
  }
}
