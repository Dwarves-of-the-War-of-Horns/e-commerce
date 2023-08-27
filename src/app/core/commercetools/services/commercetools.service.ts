import { inject, Injectable } from '@angular/core'
import type { Category, Customer, MyCustomerDraft, MyCustomerUpdate, Project } from '@commercetools/platform-sdk'
import type { UserAuthOptions } from '@commercetools/sdk-client-v2'
import { map, type Observable } from 'rxjs'

import { CommercetoolsHttpService } from './commercetools-http.service'
import { locale } from 'src/app/shared/constants/locale'
import type { SimpleCategory } from 'src/app/shared/models/simple-category.model'

@Injectable({
  providedIn: 'root',
})
export class CommercetoolsService {
  private httpService: CommercetoolsHttpService = inject(CommercetoolsHttpService)

  public getProject(): Observable<Project | undefined> {
    return this.httpService.getProject()
  }

  public signIn(userAuthOptions: UserAuthOptions): Observable<Customer> {
    return this.httpService.signIn(userAuthOptions)
  }

  public getUserInfo(): Observable<Customer> {
    return this.httpService.getUserInfo()
  }

  public signUp(customer: MyCustomerDraft): Observable<Customer> {
    return this.httpService.signUp(customer)
  }

  public logout(): Observable<boolean> {
    return this.httpService.logout()
  }

  public updateCustomerInfo(updateInfo: MyCustomerUpdate): Observable<Customer> {
    return this.httpService.updateCustomerInfo(updateInfo)
  }

  public getCategories(): Observable<SimpleCategory[]> {
    return this.httpService.getCategories().pipe(
      map(categories => {
        return this.createCategoriesTree(categories)
      }),
    )
  }

  private createCategoriesTree(categories: Category[]): SimpleCategory[] {
    const simplifyCategory = ({ id, key, name, slug, metaTitle, metaDescription }: Category): SimpleCategory => ({
      id,
      key,
      name: name[locale],
      slug: slug[locale],
      metaTitle: metaTitle?.[locale] ?? '',
      metaDescription: metaDescription?.[locale] ?? '',
      children: [],
    })
    const arrayToTree = (array: Category[], id?: string): SimpleCategory[] =>
      array
        .filter(category => category.parent?.id === id)
        .map(category => simplifyCategory(category))
        .map(child => ({ ...child, children: arrayToTree(array, child.id) }))

    return arrayToTree(categories)
  }
}
