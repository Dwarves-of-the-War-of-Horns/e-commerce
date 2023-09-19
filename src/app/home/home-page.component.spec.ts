import { ClipboardModule } from '@angular/cdk/clipboard'
import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { TuiDropdownModule } from '@taiga-ui/core'
import { TuiIslandModule, TuiMarkerIconModule, TuiTagModule } from '@taiga-ui/kit'

import { CartFacade } from '../cart/cart-store/services/cart.facade'
import { HomePageComponent } from './home-page.component'

describe('HomePageComponent', () => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [
        TuiIslandModule,
        RouterTestingModule,
        TuiMarkerIconModule,
        TuiTagModule,
        ClipboardModule,
        TuiDropdownModule,
      ],
      providers: [provideMockStore({}), CartFacade],
    }).compileComponents()

    fixture = TestBed.createComponent(HomePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
