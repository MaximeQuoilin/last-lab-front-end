import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamifyModule } from './gamify/gamify.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MockHttpInterceptor } from './interceptor/mock-http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamifyModule,
    HttpClientModule
  ],
  providers: [
    environment.mock.enable ? {
    provide: HTTP_INTERCEPTORS,
   useClass: MockHttpInterceptor,
   multi: true } : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
