import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BackendService } from './services/backend.service';
import { LoginService } from './services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginBtnComponent } from './auth/login-btn/login-btn.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { StorePageComponent } from './store/store-page/store-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginBtnComponent,
    NavBarComponent,
    StorePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    AuthModule.forRoot({
      ...env.auth,
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BackendService, multi: true },
    LoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
