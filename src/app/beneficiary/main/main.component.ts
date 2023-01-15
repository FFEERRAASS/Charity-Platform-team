import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(public home :HomeService){}
  ngOnInit(): void {
    this.home.CountDonation();
    this.home.CountBeneficary();
    this.home.getCountusers();
    this.home.ReturnLastthreeAccepted();
    this.home.visitorabout()
  }

}
