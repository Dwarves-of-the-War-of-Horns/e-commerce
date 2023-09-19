import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { TuiButtonModule } from '@taiga-ui/core'
import { TuiBlockStatusModule } from '@taiga-ui/layout'

import { NotFoundComponent } from './not-found.component'

describe('NotFoundComponent', () => {
  let component: NotFoundComponent
  let fixture: ComponentFixture<NotFoundComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent, TuiBlockStatusModule, RouterModule, TuiButtonModule, RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(NotFoundComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
