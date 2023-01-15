import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerandfooter',
  templateUrl: './headerandfooter.component.html',
  styleUrls: ['./headerandfooter.component.css']
})
export class HeaderandfooterComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  /*
  gotodachboard(){
      this.Router.navigate(['dashboard/main']);
  }
  */

  logout(){
    this.Router.navigate(['/login']);
    localStorage.clear();
  }
}
