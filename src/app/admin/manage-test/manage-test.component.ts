import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-manage-test',
  templateUrl: './manage-test.component.html',
  styleUrls: ['./manage-test.component.css']
})
export class ManageTestComponent implements OnInit {

  constructor(public home :HomeService){}
  ngOnInit(): void {
    this.home.GetAllTestimonial();
  }

  updatetestimonial(testimonialid:number){
    this.home.changetestimonialstate(testimonialid);
  }

  deletetestimonial(testimonialid:number){
    this.home.rejecttestimonial(testimonialid);
  }

}