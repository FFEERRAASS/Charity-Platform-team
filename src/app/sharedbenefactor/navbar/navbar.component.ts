import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public home : HomeService,public router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['/login']);
    localStorage.clear();

    
  }
}
