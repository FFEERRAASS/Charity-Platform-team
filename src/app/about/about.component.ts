import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public home :HomeService , public admin :AdminService  ){}


  ngOnInit(): void {
      this.admin.getAllInformationHome();
      this.home.visitorabout();
      this.home.CountDonation();
      this.home.CountBeneficary();
      this.home.GetAllCategory();
      this.home.getCountusers();
      this.home.ReturnLastthreeAccepted();
  }

}
