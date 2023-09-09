import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiSidebarModule } from '@taiga-ui/addon-mobile'
import { TuiActiveZoneModule, TuiLetModule } from '@taiga-ui/cdk'
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core'
import {
  TuiBreadcrumbsModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiIslandModule,
  TuiSelectModule,
} from '@taiga-ui/kit'
import { of } from 'rxjs'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { BreadcrumpsComponent } from '../../components/breadcrumps/breadcrumps.component'
import { CatalogFormComponent } from '../../components/catalog-form/catalog-form.component'
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component'
import { ProductCardComponent } from '../../components/product-card/product-card.component'
import { ProductsListComponent } from '../../components/products-list/products-list.component'
import { CatalogQueryParamsService } from '../../services/catalog-query-params.service'
import { CatalogUrlTreeService } from '../../services/catalog-url.service'
import { CatalogPageComponent } from './catalog-page.component'

describe('CatalogPageComponent', () => {
  let component: CatalogPageComponent
  let fixture: ComponentFixture<CatalogPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CatalogPageComponent,
        CategoriesListComponent,
        BreadcrumpsComponent,
        ProductsListComponent,
        ProductCardComponent,
        CatalogFormComponent,
      ],
      imports: [
        TuiIslandModule,
        TuiBreadcrumbsModule,
        TuiLetModule,
        TuiSidebarModule,
        TuiButtonModule,
        TuiActiveZoneModule,
        TuiSelectModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({}),
        CatalogFacade,
        CatalogUrlTreeService,
        CatalogQueryParamsService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{ category: 'slug' }]),
            snapshot: {
              queryParams: { search: 'search' },
            },
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(CatalogPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
