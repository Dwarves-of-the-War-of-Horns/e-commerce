import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiDestroyService } from '@taiga-ui/cdk'
import { TuiTextfieldControllerModule } from '@taiga-ui/core'
import { TuiDataListWrapperModule, TuiInputModule, TuiSelectModule } from '@taiga-ui/kit'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { CatalogQueryParamsService } from '../../services/catalog-query-params.service'
import { CatalogFormComponent } from './catalog-form.component'

describe('CatalogFormComponent', () => {
  let component: CatalogFormComponent
  let fixture: ComponentFixture<CatalogFormComponent>
  const routerStub = {
    navigate: jest.fn(),
  }

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
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({}),
        CatalogFacade,
        CatalogQueryParamsService,
        TuiDestroyService,
        {
          provide: Router,
          useValue: routerStub,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: { search: 'search' },
            },
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(CatalogFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
