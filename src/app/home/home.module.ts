import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
 import { Navbar2Component } from '../navbar2/navbar2.component';
import { MoviesComponent } from '../movies/movies.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [HomePage,MoviesComponent],
  exports:[MoviesComponent],



})
export class HomePageModule {}
