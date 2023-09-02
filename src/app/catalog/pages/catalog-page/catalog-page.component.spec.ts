import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiBreadcrumbsModule, TuiIslandModule } from '@taiga-ui/kit'
import { of } from 'rxjs'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { BreadcrumpsComponent } from '../../components/breadcrumps/breadcrumps.component'
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component'
import { CatalogUrlTreeService } from '../../services/catalog-url.service'
import { CatalogPageComponent } from './catalog-page.component'

describe('CatalogPageComponent', () => {
  let component: CatalogPageComponent
  let fixture: ComponentFixture<CatalogPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogPageComponent, CategoriesListComponent, BreadcrumpsComponent],
      imports: [TuiIslandModule, TuiBreadcrumbsModule],
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
