import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { TuiFieldErrorPipe } from '@taiga-ui/kit'

import { AuthRoutingModule } from '../../auth-routing.module'
import { SingUpFormComponent } from './sign-up-form.component'

describe('SingUpFormComponent', () => {
  let component: SingUpFormComponent
  let fixture: ComponentFixture<SingUpFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [SingUpFormComponent, TuiFieldErrorPipe],
      imports: [CommonModule, AuthRoutingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(SingUpFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
