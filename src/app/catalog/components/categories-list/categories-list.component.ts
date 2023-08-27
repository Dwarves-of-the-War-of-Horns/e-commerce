import { Component, type OnInit } from '@angular/core'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'

@Component({
  selector: 'ec-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  constructor(private catalogFacade: CatalogFacade) {}
  public ngOnInit(): void {
    this.catalogFacade.initCatalog()
  }
}
