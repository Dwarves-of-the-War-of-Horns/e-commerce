import { ChangeDetectionStrategy, Component, Inject, type OnInit, Self } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { TuiDestroyService } from '@taiga-ui/cdk'
import { combineLatest, filter, map, takeUntil } from 'rxjs'

import { CartFacade } from '../../cart-store/services/cart.facade'
import { propertyIsNotNullOrUndefined } from 'src/app/shared/helpers/propertyIsNotNullOrUndefined.helper'
import { hasNoSpaces } from 'src/app/shared/validators/has-no-spaces.validator'

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
  public discount$ = this.cartFacade.discounts$
  public discountValue$ = this.cartFacade.discountValue$
  public discountsData$ = combineLatest([this.cartFacade.cartDiscounts$, this.cartFacade.discounts$]).pipe(
    map(([cartDiscounts, discounts]) => ({ cartDiscounts, discounts })),
  )
  public totals$ = combineLatest([this.totalPrice$, this.discountValue$]).pipe(
    map(([totalPrice, discountValue]) => ({
      totalPrice,
      discountValue,
      subTotal: totalPrice && discountValue ? totalPrice + discountValue : undefined,
    })),
  )

  public discountForm = this.fb.group({
    discountValue: new FormControl('', { nonNullable: true, validators: [hasNoSpaces] }),
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

  public addDiscountCode(): void {
    const code = this.discountForm.getRawValue().discountValue
    this.cartFacade.addDiscountCode(code)
    this.discountForm.reset()
  }
}
