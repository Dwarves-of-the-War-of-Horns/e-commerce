import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiSidebarModule } from '@taiga-ui/addon-mobile'
import { TuiActiveZoneModule, TuiLetModule } from '@taiga-ui/cdk'
import { TuiButtonModule } from '@taiga-ui/core'
import { TuiBreadcrumbsModule, TuiIslandModule } from '@taiga-ui/kit'
import { of } from 'rxjs'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { BreadcrumpsComponent } from '../../components/breadcrumps/breadcrumps.component'
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component'
import { ProductCardComponent } from '../../components/product-card/product-card.component'
import { ProductsListComponent } from '../../components/products-list/products-list.component'
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
      ],
      imports: [
        TuiIslandModule,
        TuiBreadcrumbsModule,
        TuiLetModule,
        TuiSidebarModule,
        TuiButtonModule,
        TuiActiveZoneModule,
      ],
      providers: [
        provideMockStore({}),
        CatalogFacade,
        CatalogUrlTreeService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{ category: 'slug' }]),
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
