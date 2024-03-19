import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){}

  rankings(){
    this.router.navigate(['rankings']);
  }
  profiles(){
    this.router.navigate(['playerInfo']);

  }

  recent(){
    this.router.navigate(['recentMatches']);

  }
}
