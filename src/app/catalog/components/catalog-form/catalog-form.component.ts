import { ChangeDetectionStrategy, Component, Inject, type OnInit, Self } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { TuiDestroyService, type TuiStringHandler } from '@taiga-ui/cdk'
import { debounceTime, distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs'

import { CatalogQueryParamsService } from '../../services/catalog-query-params.service'
import { locale } from 'src/app/shared/constants/locale'
import type { AttributeValue } from 'src/app/shared/models/attribute-value.model'

@Component({
  selector: 'ec-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class CatalogFormComponent implements OnInit {
  public stringify: TuiStringHandler<AttributeValue> = item => item.label
  private initialFormValues = {
    search: '',
    sort: {
      key: '',
      label: 'Newest',
    },
  }

  public sortItems: AttributeValue[] = [
    {
      key: '',
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
      key: `name.${locale} asc`,
      label: 'Name ascending',
    },
    {
      key: `name.${locale} desc`,
      label: 'Name descending',
    },
  ]

  public form = this.fb.group({
    sort: new FormControl<AttributeValue>(this.initialFormValues.sort, { nonNullable: true }),
    search: new FormControl<string>(this.initialFormValues.search, { nonNullable: true }),
  })

  // eslint-disable-next-line max-params
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private queryParamsService: CatalogQueryParamsService,
    @Self()
    @Inject(TuiDestroyService)
    private destroy$: TuiDestroyService,
  ) {}

  public ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        map(({ search, sort }) => ({ search: search?.trim(), sort: sort?.key })),
        filter(({ search }) => (search?.length ? search.length >= 3 : true)),
        distinctUntilChanged((prev, current) => prev?.search === current.search && prev?.sort === current.sort),
        map(formValue => this.replaceEmptyStrings(formValue)),
        tap(clearedParams => {
          void this.router.navigate([], {
            relativeTo: this.route,
            replaceUrl: true,
            queryParams: clearedParams,
            queryParamsHandling: 'merge',
          })
        }),
      )
      .subscribe(clearedParams => {
        this.queryParamsService.updateQueryParams(clearedParams)
      })

    this.restoreFormValues(this.route.snapshot.queryParams)
  }

  private replaceEmptyStrings(formValues: Record<string, string | undefined>): Record<string, string | undefined> {
    return Object.keys(formValues).reduce((acc: Record<string, string | undefined>, key) => {
      const value = formValues[key]
      acc[key] = value === '' ? undefined : value

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
