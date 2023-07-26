import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AlertController} from "@ionic/angular";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {



  constructor(private http:HttpClient, private router: Router,private alertController: AlertController) { }
  obj:any;
  email: any;
  password:any;

  ngOnInit() {
  }

  send_data:any={
    "email": "magnla@.com",
    "password": "asdsfd",
  }

  onSubmit(){
    console.log(this.password);
    console.log(this.email);
    this.logIn(this.email,this.password).subscribe({
      next: (data) =>{
        console.log(data);
        this.router.navigateByUrl('/home');
      },
      error: async (error) =>{
        console.log(error);
        const alert = await this.alertController.create({
          header:'Login Failed',
          subHeader:'Your email or password is incorrect.',
          message: 'Please try again.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }
  logIn(email: string,password: string){
    return this.http.post('http://localhost:8000/api/login',{email,password});
  }

}
