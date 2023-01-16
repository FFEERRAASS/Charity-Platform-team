import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/services/admin.service';
import { BenefactorServiceService } from 'src/app/services/benefactor-service.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})

export class TestimonialComponent implements OnInit{

  constructor(public benefactor : BenefactorServiceService ,public home:HomeService, public admin : AdminService,public spinner :NgxSpinnerService){}
  createTestimonial:FormGroup = new FormGroup({
    paragraph:new FormControl(),
    useridFk:new FormControl(),
    rate:new FormControl(),
    isaccept:new FormControl()

  })
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
  sendTestimonial(){
    debugger;
    this.spinner.show()

    this.benefactor.sendTesti(this.createTestimonial.value);
  }

}
