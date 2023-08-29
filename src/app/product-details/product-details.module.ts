import { CommonModule } from '@angular/common'
import { inject, NgModule } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { ProductDetailsRoutingModule } from './product-details-routing.module'

@NgModule({
  imports: [CommonModule, ProductDetailsRoutingModule],
  declarations: [ProductDetailsComponent],
})
export class ProductDetailsModule {
  private route = inject(ActivatedRoute)
  private housingLocationId = Number(this.route.snapshot.paramMap.get('id'))
}
