import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BenefactorServiceService } from 'src/app/services/benefactor-service.service';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  constructor(public benefactor : BenefactorServiceService){
    
  }
  RechargeForm:FormGroup=new FormGroup({
    balance:new FormControl()})

  
  ngOnInit(): void {
    var charityid:any = localStorage.getItem('causeID');
    this.benefactor.openCauseProfile(charityid);
    
  }
  SendDonation(charityid:number)
  {
    this.benefactor.SendDonation(charityid,this.RechargeForm.controls['balance'].value);
  }
  
}
