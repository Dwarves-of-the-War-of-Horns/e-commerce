import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiTextfieldControllerModule } from '@taiga-ui/core'
import { TuiDataListWrapperModule, TuiInputModule, TuiSelectModule } from '@taiga-ui/kit'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CatalogFormComponent } from './catalog-form.component'

describe('CatalogFormComponent', () => {
  let component: CatalogFormComponent
  let fixture: ComponentFixture<CatalogFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogFormComponent],
      imports: [
        TuiInputModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
      ],
      providers: [provideMockStore({}), CatalogFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(CatalogFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
