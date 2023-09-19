import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'ec-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyCartComponent {}
