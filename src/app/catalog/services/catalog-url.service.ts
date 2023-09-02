import { Injectable } from '@angular/core'
import { BehaviorSubject, type Observable } from 'rxjs'

import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

@Injectable()
export class CatalogUrlTreeService {
  private currentUrl$$ = new BehaviorSubject<string[]>([])
  private currentCategory$$ = new BehaviorSubject<SimpleCategory | null>(null)
  private navigationArray$$ = new BehaviorSubject<Array<{ name: string; url: string[] }>>([])

  public getCurrentCategory$(): Observable<SimpleCategory | null> {
    return this.currentCategory$$.asObservable()
  }

  public getCurrentUrl$(): Observable<string[]> {
    return this.currentUrl$$.asObservable()
  }

  public getNavigationArray$(): Observable<Array<{ name: string; url: string[] }>> {
    return this.navigationArray$$.asObservable()
  }

  public updateCurrentUrl(urlTree: string[] | null): void {
    if (urlTree) {
      this.currentUrl$$.next(urlTree)
    } else {
      this.currentUrl$$.next([])
    }
  }
  public updateCurrentCategory(category: SimpleCategory | null): SimpleCategory | null {
    this.currentCategory$$.next(category)

    return category
  }

  public convertUrlTreeToSimpleCategory(
    categories: SimpleCategory[] | null,
    urlParts: string[] = this.currentUrl$$.value,
  ): SimpleCategory | null {
    if (categories === null || urlParts.length === 0) {
      return null
    }

    const currentSlug = urlParts[0]
    const currentCategory = categories.find(category => category.slug === currentSlug)

    if (currentCategory === undefined) {
      return null
    }

    if (urlParts.length > 1) {
      const remainingUrlParts = urlParts.slice(1)
      const childCategory = this.convertUrlTreeToSimpleCategory(currentCategory.children, remainingUrlParts)

      return childCategory
    }

    return currentCategory
  }

  public convertUrlTreeToNavigationArray(
    categories: SimpleCategory[] | null,
    urlParts: string[] = this.currentUrl$$.value,
    navigationArray: Array<{ name: string; url: string[] }> = [],
  ): Array<{ name: string; url: string[] }> {
    if (categories === null || urlParts.length === 0) {
      this.navigationArray$$.next([])

      return []
    }

    const currentSlug = urlParts[0]
    const currentCategory = categories.find(category => category.slug === currentSlug)

    if (currentCategory === undefined) {
      this.navigationArray$$.next([])

      return []
    }

    navigationArray.push({
      name: currentCategory.name,
      url: currentCategory.slugArray,
    })

    if (urlParts.length > 1) {
      const remainingUrlParts = urlParts.slice(1)
      const childCategory = this.convertUrlTreeToNavigationArray(
        currentCategory.children,
        remainingUrlParts,
        navigationArray,
      )

      return childCategory
    }

    this.navigationArray$$.next(navigationArray)

    return navigationArray
  }
}
