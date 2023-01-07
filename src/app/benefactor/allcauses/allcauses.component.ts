import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BenefactorServiceService } from 'src/app/services/benefactor-service.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-allcauses',
  templateUrl: './allcauses.component.html',
  styleUrls: ['./allcauses.component.css']
})
export class AllcausesComponent implements OnInit{
  constructor(public benefactor : BenefactorServiceService,public router:Router){}
  ngOnInit(): void {
    this.benefactor.getAllCausesAccepted();
  }
   
  openCause(charityid:number){
    localStorage.setItem('causeID',charityid.toString());
    this.router.navigate(['/benefactor/donation'])
    
  }

}
