import { ChangeDetectionStrategy, Component, Inject, type OnInit, Self } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { TuiDestroyService } from '@taiga-ui/cdk'
import { combineLatest, filter, map, takeUntil } from 'rxjs'

import { CartFacade } from '../../cart-store/services/cart.facade'
import { propertyIsNotNullOrUndefined } from 'src/app/shared/helpers/propertyIsNotNullOrUndefined.helper'

@Component({
  selector: 'ec-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class CartTotalComponent implements OnInit {
  public isEditing = false
  public totalPrice$ = this.cartFacade.totalPrice$
  public discounts$ = this.cartFacade.discounts$
  public discountsData$ = combineLatest([this.cartFacade.cartDiscounts$, this.cartFacade.discounts$]).pipe(
    map(([cartDiscounts, discounts]) => ({ cartDiscounts, discounts })),
  )

  public discountForm = this.fb.group({
    discountValue: new FormControl(''),
  })
  constructor(
    private cartFacade: CartFacade,
    private fb: FormBuilder,
    @Self()
    @Inject(TuiDestroyService)
    private destroy$: TuiDestroyService,
  ) {}

  public ngOnInit(): void {
    this.discountsData$
      .pipe(
        takeUntil(this.destroy$),
        propertyIsNotNullOrUndefined('cartDiscounts'),
        filter(({ cartDiscounts, discounts }) =>
          cartDiscounts.map(({ id }) => id).some(id => discounts?.[id] === undefined),
        ),
      )
      .subscribe(({ cartDiscounts }) => {
        this.cartFacade.getDiscountCodes(cartDiscounts.map(({ id }) => id))
      })
  }

  public removeDiscountCode(discountId: string): void {
    this.cartFacade.removeDiscountCode(discountId)
  }
}
