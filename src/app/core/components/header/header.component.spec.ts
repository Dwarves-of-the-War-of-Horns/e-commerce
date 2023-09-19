import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiLetModule } from '@taiga-ui/cdk'
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'
import { TuiBadgedContentModule } from '@taiga-ui/kit'

import { HeaderComponent } from './header.component'
import { AuthFacade } from 'src/app/auth/auth-store/service/auth.facade'
import { CartFacade } from 'src/app/cart/cart-store/services/cart.facade'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterModule,
        RouterTestingModule,
        TuiButtonModule,
        TuiSvgModule,
        TuiBadgedContentModule,
        TuiLetModule,
      ],
      providers: [provideMockStore({}), AuthFacade, CartFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
