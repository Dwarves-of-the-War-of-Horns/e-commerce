import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component'
import { CatalogPageComponent } from './catalog-page.component'

describe('CatalogPageComponent', () => {
  let component: CatalogPageComponent
  let fixture: ComponentFixture<CatalogPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogPageComponent, CategoriesListComponent],
      providers: [provideMockStore({}), CatalogFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(CatalogPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
