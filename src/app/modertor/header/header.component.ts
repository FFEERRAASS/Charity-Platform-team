import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}

