import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(public home:HomeService, public admin:AdminService){};


  ngOnInit(): void {
      this.home.getreviews();
      this.admin.getAllInformationHome();

      this.home.visitorabout();
      this.home.CountDonation();
      this.home.CountBeneficary();
      this.home.GetAllCategory();
      this.home.getCountusers();
      this.home.ReturnLastthreeAccepted();
  }

}
