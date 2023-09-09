import { ChangeDetectionStrategy, Component } from '@angular/core'
import { TuiTreeItemContentComponent } from '@taiga-ui/kit'

@Component({
  selector: 'ec-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '(click)': 'onClick()' },
})
export class TreeComponent extends TuiTreeItemContentComponent {
  public get icon(): string {
    return this.isExpanded ? `tuiIconChevronUp` : `tuiIconChevronDown`
  }
}
