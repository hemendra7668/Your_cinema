import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent  implements OnInit {
  imageUrl:any="";
  constructor(private router:Router,private el: ElementRef) {
    this.imageUrl="";
   }
  src:any="";
  ngOnInit() {}
  moveToBooking(){

    const imageElement: HTMLImageElement = this.el.nativeElement.querySelector('img');
    if (imageElement) {
       this.imageUrl = imageElement.src;
      console.log(this.imageUrl);
    }

    this.router.navigate(['/booking']);
  }
}
