import { isDevMode, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { TUI_SANITIZER, TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core'
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthEffects } from './auth/auth-store/auth.effects'
import { authReducer } from './auth/auth-store/auth.reducer'
import { AuthFacade } from './auth/auth-store/service/auth.facade'
import { CartEffects } from './cart/cart-store/cart-store.effects'
import { cartReducer } from './cart/cart-store/cart-store.reducer'
import { CartFacade } from './cart/cart-store/cart.facade'
import { HeaderComponent } from './core/components/header/header.component'
import { CoreModule } from './core/core.module'
import { StorageModule } from './core/storage/storage.module'
import { storageKeyPrefix } from './core/storage/tokens/storage-key.token'
import { StoreFeatureNames } from './shared/enums/store-feature-names.enum'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forFeature([AuthEffects, CartEffects]),
    StoreModule.forFeature(StoreFeatureNames.Auth, authReducer),
    StoreModule.forFeature(StoreFeatureNames.Carts, cartReducer),
    StorageModule.forRoot({ config: { prefix: storageKeyPrefix.toString() } }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    CoreModule,
    HeaderComponent,
  ],

  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: AuthFacade, useClass: AuthFacade },
    { provide: CartFacade, useClass: CartFacade },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
