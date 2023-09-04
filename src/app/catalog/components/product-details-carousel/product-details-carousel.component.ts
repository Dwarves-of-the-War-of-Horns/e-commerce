import { Component, Inject, Input } from '@angular/core'
import { type TuiDialogContext, TuiDialogService } from '@taiga-ui/core'
import type { PolymorpheusContent } from '@tinkoff/ng-polymorpheus'

@Component({
  selector: 'ec-product-details-carousel',
  templateUrl: './product-details-carousel.component.html',
  styleUrls: ['./product-details-carousel.component.scss'],
})
export class ProductDetailsCarouselComponent {
  @Input() public images: string[] = []

  public carouselActiveIndex = 0

  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

  public trackByImage(index: number, image: string): string {
    return image
  }

  public openDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs
      .open(content, {
        size: 'fullscreen',
      })
      .subscribe()
  }
}
