import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import type { TuiHandler } from '@taiga-ui/cdk'
import { TUI_TREE_CONTENT } from '@taiga-ui/kit'
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus'

import { CatalogFacade } from '../../catalog-store/services/catalog.facade'
import { TreeComponent } from '../tree/tree.component'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

@Component({
  selector: 'ec-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  providers: [
    {
      provide: TUI_TREE_CONTENT,
      useValue: new PolymorpheusComponent(TreeComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent implements OnInit {
  public categories$ = this.catalogFacade.categories$

  constructor(private catalogFacade: CatalogFacade) {}
  public ngOnInit(): void {
    this.catalogFacade.initCatalog()
  }

  public handler: TuiHandler<SimpleCategory, readonly SimpleCategory[]> = category => category.children
}
