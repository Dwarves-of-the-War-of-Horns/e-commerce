import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'ec-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralInfoComponent {}
