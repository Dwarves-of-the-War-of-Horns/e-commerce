import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import type { TuiStringHandler } from '@taiga-ui/cdk'
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs'

import { CatalogQueryParamsService } from '../../services/catalog-query-params.service'
import type { AttributeValue } from 'src/app/shared/models/attribute-value.model'

@Component({
  selector: 'ec-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogFormComponent implements OnInit {
  public stringify: TuiStringHandler<AttributeValue> = item => item.label
  private initialFormValues = {
    search: '',
    sort: { key: '', label: '' },
  }

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
    sort: new FormControl<AttributeValue>(this.initialFormValues.sort),
    search: new FormControl<string>(this.initialFormValues.search),
  })

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private queryParamsService: CatalogQueryParamsService,
  ) {}

  public ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        map(({ search, sort }) => ({ search: search?.trim(), sort: sort?.key })),
        filter(({ search }) => (search?.length ? search.length >= 3 : true)),
        debounceTime(500),
        distinctUntilChanged((prev, current) => prev?.search === current.search && prev?.sort === current.sort),
      )
      .subscribe(formValue => {
        const clearedParams = this.removeEmptyFormValues(formValue)
        this.queryParamsService.updateQueryParams(clearedParams)
      })

    this.restoreFormValues(this.route.snapshot.queryParams)
  }

  private removeEmptyFormValues(formValues: Record<string, string | undefined>): Record<string, string> {
    return Object.keys(formValues).reduce((acc: Record<string, string>, key) => {
      const value = formValues[key]

      if (value && value !== '') {
        acc[key] = value
      }

      return acc
    }, {})
  }

  private restoreFormValues(queryParams: { search?: string; sort?: string }): void {
    this.form.patchValue({
      search: queryParams?.search ?? this.initialFormValues.search,
      sort: queryParams.sort ? this.sortItems.find(item => item.key === queryParams.sort) : this.initialFormValues.sort,
    })
  }
}
