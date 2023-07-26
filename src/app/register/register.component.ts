import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  constructor(private http:HttpClient) { }
  obj:any;
  send_data:any={
    "first_name": "kunal",
    "last_name": "mangla",
    "email": "magnla@.com",
    "password": "asdsfd",
    "password_confirm": "asdsfd"
  }
  ngOnInit() {
    // this.obj=this.http.post("http://localhost:8000/api/register",this.send_data).subscribe(
    //   data=>this.obj=data
    // )
  }

}
