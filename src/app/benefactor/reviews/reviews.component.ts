import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(public home:HomeService,public spinner:NgxSpinnerService,public admin:AdminService){};


  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.home.getreviews();
      this.home.visitorabout();
      this.spinner.hide();
    }, 1000);
     
 
     
  }

}
