import { Component,OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BenefactorServiceService } from 'src/app/services/benefactor-service.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent implements OnInit {



  constructor(public benefactor:BenefactorServiceService,public router:Router){}

  
  ngOnInit(): void {
    var catid:any = localStorage.getItem('categoryid');
    this.benefactor.getCharitybyCategory(parseInt(catid));
     

  }
  
  openCause(charityid:number){
    localStorage.setItem('causeID',charityid.toString());
    this.router.navigate(['/benefactor/donation'])
    
  }

}
