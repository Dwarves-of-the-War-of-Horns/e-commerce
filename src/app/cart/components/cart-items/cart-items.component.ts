import { ChangeDetectionStrategy, Component, Inject, type OnInit, Self } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { TuiDestroyService } from '@taiga-ui/cdk'
import { TuiBreakpointService } from '@taiga-ui/core'
import { debounceTime, filter, map, pairwise, startWith, takeUntil, tap } from 'rxjs'

import { CartFacade } from '../../cart-store/services/cart.facade'
import { isNotNullOrUndefined } from 'src/app/shared/helpers/isNotNullOrUndefined.helper'
import type { CartProduct } from 'src/app/shared/models/cart-product.model'

@Component({
  selector: 'ec-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class CartItemsComponent implements OnInit {
  public products$ = this.cartFacade.productsInCart$

  public quantityForm = this.fb.record<number>({})

  // eslint-disable-next-line max-params
  constructor(
    private cartFacade: CartFacade,
    private fb: FormBuilder,
    @Inject(TuiBreakpointService) public readonly breakpoint$: TuiBreakpointService,
    @Self()
    @Inject(TuiDestroyService)
    private destroy$: TuiDestroyService,
  ) {}

  public ngOnInit(): void {
    this.products$
      .pipe(
        takeUntil(this.destroy$),
        isNotNullOrUndefined(),
        tap(products => {
          products?.forEach(product => {
            this.quantityForm.addControl(product.id, new FormControl(product.quantity))
          })
        }),
      )
      .subscribe()

    this.quantityForm.valueChanges
      .pipe(
        debounceTime(800),
        takeUntil(this.destroy$),
        startWith(this.quantityForm.value),
        pairwise(),
        map(
          ([oldValue, newValue]) =>
            Object.entries(newValue).filter(([key, amount]) => {
              if (!amount) {
                // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
                this.quantityForm.patchValue({ [key]: oldValue[key] as number }, { emitEvent: false })
                newValue[key] = oldValue[key]

                return false
              }

              return amount !== oldValue[key]
            }) as Array<[string, number]>,
        ),
        filter(changes => changes.length > 0),
      )
      .subscribe(items => {
        this.changeItemAmount(items)
      })
  }

  public productsTrackByFn = (_: number, value: CartProduct): CartProduct => {
    return value
  }

  public clearCart(): void {
    this.cartFacade.clearCart()
  }

  public removeItem(itemId: string): void {
    this.quantityForm.removeControl(itemId)
    this.cartFacade.removeItemFromCart(itemId)
  }

  public changeItemAmount(items: Array<[string, number]>): void {
    this.cartFacade.changeItemAmount(items)
  }
}
