import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentsModule} from "./components/components.module";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {PipesModule} from "./pipes/pipes.module";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthGuardService } from './guards/auth-guard.service';
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    PipesModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,

  ],
  providers: [ AuthGuardService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
