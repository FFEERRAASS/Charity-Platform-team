import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(public home:HomeService, public admin:AdminService){};


  ngOnInit(): void {
    this.home.getreviews();
    this.home.visitorabout(); 
    this.admin.getAllInformationHome();

  }

}
