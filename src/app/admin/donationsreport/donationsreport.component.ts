import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-donationsreport',
  templateUrl: './donationsreport.component.html',
  styleUrls: ['./donationsreport.component.css'],
  
})


export class DonationsreportComponent implements OnInit  {

  constructor(public home :HomeService , public pipe : DatePipe){}

  searchForm:FormGroup=new FormGroup({
    date1:new FormControl(),
    date2:new FormControl()
})
  
  

  ngOnInit(): void {

    this.home.getDonation()
    debugger;
  }

  downloadTableAsExcel(){
  
  }

  searchindoniation(){
    // this.home.searchfordonations(this.searchForm.value);

    const date1:any=this.pipe.transform((this.searchForm.controls['date1'].value), 'yyyy-MM-ddTHH:mm:ss');
    const date2:any=this.pipe.transform((this.searchForm.controls['date2'].value), 'yyyy-MM-ddTHH:mm:ss');

    this.home.alldonation=this.home.backup;


    debugger;
    this.home.alldonation=   this.home.alldonation.filter((x:any)=> date1 <= x.datedonation && date2>= x.datedonation)
  }
  }

