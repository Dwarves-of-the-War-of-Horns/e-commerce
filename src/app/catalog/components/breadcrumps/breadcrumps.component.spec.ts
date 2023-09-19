import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TuiBreadcrumbsModule } from '@taiga-ui/kit'

import { BreadcrumpsComponent } from './breadcrumps.component'

describe('BreadcrumpsComponent', () => {
  let component: BreadcrumpsComponent
  let fixture: ComponentFixture<BreadcrumpsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumpsComponent],
      imports: [TuiBreadcrumbsModule, RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(BreadcrumpsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
