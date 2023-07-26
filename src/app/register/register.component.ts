import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AlertController} from "@ionic/angular";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {


  constructor(private http:HttpClient,private alertController: AlertController) { }
  obj:any;
  email:any;
  firstname:any;
  lastname:any;
  password:any;
  confirmpassword:any;
  ngOnInit() {

  }
  onSubmit(){
    this.register(this.email,this.firstname,this.lastname,this.password,this.confirmpassword).subscribe({
      next: (data) =>{
        console.log(data);
      },
      error: async (error) =>{
        console.log(error);
        const alert = await this.alertController.create({
          header:'Registration Failed',
          subHeader:'Your email is already registered or may be password do not match',
          message: 'Please try again.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }
  register(first_name: string,last_name:string,email:string,password:string,password_confirm:string){
    return this.http.post('http://localhost:8000/api/register',{first_name,last_name,email,password,password_confirm});
  }

}
