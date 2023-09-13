import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { TuiBlockStatusModule } from '@taiga-ui/layout'

import { EmptyCartComponent } from './empty-cart.component'

describe('EmptyCartComponent', () => {
  let component: EmptyCartComponent
  let fixture: ComponentFixture<EmptyCartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyCartComponent],
      imports: [TuiBlockStatusModule],
    }).compileComponents()

    fixture = TestBed.createComponent(EmptyCartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
