import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(public home :HomeService, public admin:AdminService){}
  ngOnInit(): void {
    this.home.CountDonation();
    this.home.CountBeneficary();
    this.home.getCountusers();
    this.home.ReturnLastthreeAccepted();
    this.home.visitorabout()
    this.admin.getAllInformationHome();

  }

}
