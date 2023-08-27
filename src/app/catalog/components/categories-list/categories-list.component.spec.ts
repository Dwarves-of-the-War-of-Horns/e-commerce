import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CategoriesListComponent } from './categories-list.component'

describe('CategoriesListComponent', () => {
  let component: CategoriesListComponent
  let fixture: ComponentFixture<CategoriesListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesListComponent],
      providers: [provideMockStore({}), CatalogFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(CategoriesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
