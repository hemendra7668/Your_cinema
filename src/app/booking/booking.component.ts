import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent  implements OnInit {
  alert:boolean=false;
  constructor() {
   
  }
  amount: any = "";
  ngOnInit() {}

  submit(){

    this.alert=true;
  }
  closeAlert(){
    this.alert=false;
  }
}
