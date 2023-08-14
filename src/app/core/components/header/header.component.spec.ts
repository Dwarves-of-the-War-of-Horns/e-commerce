import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule, RouterTestingModule, TuiButtonModule, TuiSvgModule],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
