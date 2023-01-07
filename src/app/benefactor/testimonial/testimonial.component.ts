import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BenefactorServiceService } from 'src/app/services/benefactor-service.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit{
  constructor(public benefactor : BenefactorServiceService){}
  createTestimonial:FormGroup = new FormGroup({
    paragraph:new FormControl(),
    useridFk:new FormControl(),
    rate:new FormControl(),
    isaccept:new FormControl()

  })
  ngOnInit(): void {
    
    this.benefactor.getAllTestimonialAccept();
  }
  sendTestimonial(){
    debugger;
    this.benefactor.sendTesti(this.createTestimonial.value);
  }
}
