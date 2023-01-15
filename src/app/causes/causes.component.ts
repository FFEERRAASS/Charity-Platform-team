import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { BenefactorServiceService } from '../services/benefactor-service.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent implements OnInit{
  constructor(public benefactor : BenefactorServiceService,public router:Router,public home :HomeService ,public admin:AdminService){}
  ngOnInit(): void {
    this.home.visitorabout();

    this.benefactor.getAllCausesAccepted();
  }
   
  openCause(charityid:number){
    localStorage.setItem('causeID',charityid.toString());
    this.router.navigate(['/login'])
    
  }

}