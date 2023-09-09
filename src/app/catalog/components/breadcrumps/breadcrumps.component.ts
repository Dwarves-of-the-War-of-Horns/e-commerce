import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Observable, of } from 'rxjs'

import type { BreadcrumpsRoute } from '../../models/breadcrumps-route.model'

@Component({
  selector: 'ec-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumpsComponent {
  @Input() public navigation$: Observable<BreadcrumpsRoute[]> = of([])

  public createRoute({ url }: BreadcrumpsRoute): string[] {
    return ['/catalog', 'category', url.join('/')]
  }

  public trackRoutes(index: number, { name }: BreadcrumpsRoute): string {
    return name
  }
}
