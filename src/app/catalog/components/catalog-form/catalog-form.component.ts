import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import type { TuiStringHandler } from '@taiga-ui/cdk'
import { filter, map } from 'rxjs'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import type { AttributeValue } from 'src/app/shared/models/attribute-value.model'

@Component({
  selector: 'ec-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogFormComponent implements OnInit {
  public filterAttributes$ = this.catalogFacade.filterAttributes$
  public stringify: TuiStringHandler<AttributeValue> = item => item.label
  public sortItems = [
    {
      key: 'createdAt asc',
      label: 'Newest',
    },
    {
      key: 'price desc',
      label: 'Price descending',
    },
    {
      key: 'price asc',
      label: 'Price ascending',
    },
    {
      key: 'name.en-US asc',
      label: 'Name ascending',
    },
    {
      key: 'name.en-US desc',
      label: 'Name descending',
    },
  ]

  public form = this.fb.group({
    sort: new FormControl<AttributeValue>(this.sortItems[0]),
  })

  constructor(
    private fb: FormBuilder,
    private catalogFacade: CatalogFacade,
  ) {}

  public ngOnInit(): void {
    this.filterAttributes$
      .pipe(
        filter(attributes => Boolean(attributes)),
        map(attributes => attributes?.map(({ name }) => name)),
      )
      .subscribe()

    this.form.valueChanges.subscribe(console.log)
  }
}
