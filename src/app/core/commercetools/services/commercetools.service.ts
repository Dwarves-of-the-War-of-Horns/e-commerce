import { inject, Injectable } from '@angular/core'
import type { Customer, MyCustomerDraft, MyCustomerUpdate, Project } from '@commercetools/platform-sdk'
import type { UserAuthOptions } from '@commercetools/sdk-client-v2'
import { map, type Observable } from 'rxjs'

import { arrayToTree } from '../helpers/array-to-tree.helper'
import { CommercetoolsHttpService } from './commercetools-http.service'
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
    return this.httpService.getCategories().pipe(map(categories => arrayToTree(categories)))
  }
}
