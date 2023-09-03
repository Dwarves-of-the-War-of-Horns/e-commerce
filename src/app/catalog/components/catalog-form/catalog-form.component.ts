import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'ec-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    console.log('CatalogFormComponent')
  }
}
