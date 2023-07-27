import { Component, OnInit } from '@angular/core';
import { VariableshareService } from '../variableshare.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent  implements OnInit {
  alert:boolean=false;
  constructor(private variableshareService:VariableshareService) {
  }
  amount: any = "";
  url:any;
  title:any;

  ngOnInit() {
    this.url=this.variableshareService.sharedurl;
    this.title=this.variableshareService.sharedtitle;
    // console.log(this.url);
    // console.log(this.url);
    // console.log(this.title);
  }
  submit(){
    this.alert=true;
  }
  closeAlert(){
    this.alert=false;
  }
}
