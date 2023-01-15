import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(public home:HomeService,public spinner:NgxSpinnerService){};


  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.home.getreviews();
      this.home.visitorabout();
      this.spinner.hide();
    }, 1000);
     
  }

}
