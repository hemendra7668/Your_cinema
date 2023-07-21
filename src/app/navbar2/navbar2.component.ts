import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss'],
})
export class Navbar2Component  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  logoutUser(){
    this.router.navigate(['/login']);
  }
  loginUser(){
    this.router.navigate(['/login']);

  }

  registerUser(){
    this.router.navigate(['/register']);
  }
}
