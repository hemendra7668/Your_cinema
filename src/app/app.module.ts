import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Navbar2Component } from './navbar2/navbar2.component';
import { RegisterComponent } from './register/register.component';
import { LoginPage } from './login/login.page';
import { MoviesComponent } from './movies/movies.component';
const appRoutes: Routes = [

  { path: '', redirectTo: "login", pathMatch: "prefix" },
];
@NgModule({
  declarations: [AppComponent,Navbar2Component,RegisterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports:[Navbar2Component,RegisterComponent],
})
export class AppModule {}
