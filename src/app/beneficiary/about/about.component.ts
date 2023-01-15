import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(public home :HomeService){}
  ngOnInit(): void {
    this.home.visitorabout();
      this.home.CountDonation();
      this.home.CountBeneficary();
      this.home.GetAllCategory();
      this.home.getCountusers();
      this.home.ReturnLastthreeAccepted();
  }

}
