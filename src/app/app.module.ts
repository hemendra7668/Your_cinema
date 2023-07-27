import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Navbar2Component } from './navbar2/navbar2.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { VariableshareService } from './variableshare.service';
const appRoutes: Routes = [

  { path: '', redirectTo: "login", pathMatch: "prefix" },
];
@NgModule({
  declarations: [AppComponent,Navbar2Component,RegisterComponent,BookingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{provide: 'VariableshareService', useClass:VariableshareService }],
  bootstrap: [AppComponent],
  exports:[Navbar2Component,RegisterComponent,BookingComponent],
})
export class AppModule {}
