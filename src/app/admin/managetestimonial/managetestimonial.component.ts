import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-managetestimonial',
  templateUrl: './managetestimonial.component.html',
  styleUrls: ['./managetestimonial.component.css']
})
export class ManagetestimonialComponent implements OnInit {

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
