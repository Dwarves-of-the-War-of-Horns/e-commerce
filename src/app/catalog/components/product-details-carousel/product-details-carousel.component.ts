import { Component, Inject, Input, type OnDestroy } from '@angular/core'
import { type TuiDialogContext, TuiDialogService } from '@taiga-ui/core'
import type { PolymorpheusContent } from '@tinkoff/ng-polymorpheus'
import type { Subscription } from 'rxjs'

@Component({
  selector: 'ec-product-details-carousel',
  templateUrl: './product-details-carousel.component.html',
  styleUrls: ['./product-details-carousel.component.scss'],
})
export class ProductDetailsCarouselComponent implements OnDestroy {
  @Input() public images: string[] = []

  public carouselActiveIndex = 0
  private dialog!: Subscription

  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

  public trackByImage(index: number, image: string): string {
    return image
  }

  public openDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialog = this.dialogs
      .open(content, {
        size: 'fullscreen',
      })
      .subscribe()
  }

  public ngOnDestroy(): void {
    this.dialog.unsubscribe()
  }
}
