import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'ec-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {}
