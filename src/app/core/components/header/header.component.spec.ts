import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiTabsModule } from '@taiga-ui/kit'

import { HeaderComponent } from './header.component'
import { AuthFacade } from 'src/app/auth/auth-store/auth.facade'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule, RouterTestingModule, TuiButtonModule, TuiSvgModule, TuiTabsModule],
      providers: [provideMockStore({}), AuthFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
