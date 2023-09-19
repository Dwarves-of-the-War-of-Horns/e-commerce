import { ChangeDetectionStrategy, Component, Inject, Input, Self } from '@angular/core'
import { TuiDestroyService } from '@taiga-ui/cdk'
import { type TuiDialogContext, TuiDialogService } from '@taiga-ui/core'
import type { PolymorpheusContent } from '@tinkoff/ng-polymorpheus'
import { takeUntil } from 'rxjs'

@Component({
  selector: 'ec-product-details-carousel',
  templateUrl: './product-details-carousel.component.html',
  styleUrls: ['./product-details-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class ProductDetailsCarouselComponent {
  @Input() public images: string[] = []

  public carouselActiveIndex = 0

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Self()
    @Inject(TuiDestroyService)
    private destroy$: TuiDestroyService,
  ) {}

  public trackByImage(_: number, image: string): string {
    return image
  }

  public openDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs
      .open(content, {
        size: 'fullscreen',
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe()
  }
}
