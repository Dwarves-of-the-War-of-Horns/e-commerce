import { Component, type OnInit } from '@angular/core'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'

@Component({
  selector: 'ec-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  constructor(private catalogFacade: CatalogFacade) {}
  public ngOnInit(): void {
    this.catalogFacade.initCatalog()
  }
}
