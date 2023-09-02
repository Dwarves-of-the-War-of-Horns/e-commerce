import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'ec-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumpsComponent {
  @Input() public navigation$: Observable<Array<{ name: string; url: string[] }>> = of([])

  public createRoute(url: string[]): string[] {
    return ['/catalog', 'category', url.join('/')]
  }
}
