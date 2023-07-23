import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  moveToBooking(){
    this.router.navigate(['/booking']);
  }
}
