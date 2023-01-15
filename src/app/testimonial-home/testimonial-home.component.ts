import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { BenefactorServiceService } from '../services/benefactor-service.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-testimonial-home',
  templateUrl: './testimonial-home.component.html',
  styleUrls: ['./testimonial-home.component.css']
})
export class TestimonialHomeComponent implements OnInit{
  constructor(public benefactor : BenefactorServiceService ,public home:HomeService, public admin : AdminService){}
  
  ngOnInit(): void {
    this.admin.getAllInformationHome();

    this.home.visitorabout();
    this.benefactor.getAllTestimonialAccept();
    setTimeout(() => {
      this.fun();
    }, 1000);
  }

  fun(){
    let x=document.querySelector('.carousel-item');
    console.log('ffffffffffff');
    console.log(x);

    x?.classList.add("active")
    console.log(x);
  }
 
}
