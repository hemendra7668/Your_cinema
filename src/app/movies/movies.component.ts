import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { VariableshareService } from '../variableshare.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent  implements OnInit {
  imageUrl:any="";
  constructor(private router:Router,private el: ElementRef, private variableshareService:VariableshareService) {
    this.imageUrl="";
   }
  src:any="";
  url:any;
  title:any;
  ngOnInit() {}
  moveToBooking(url:string,title:string){
    this.variableshareService.sharedurl=url;
    this.variableshareService.sharedtitle=title;
    // console.log(this.url);
    // console.log(this.title);
    // const imageElement: HTMLImageElement = this.el.nativeElement.querySelector('img');
    // if (imageElement) {
    //    this.imageUrl = imageElement.src;
    //   console.log(this.imageUrl);
    // }

    this.router.navigate(['/booking']);
  }
}
