import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-donationsreport',
  templateUrl: './donationsreport.component.html',
  styleUrls: ['./donationsreport.component.css'],
  
})


export class DonationsreportComponent implements OnInit  {

  constructor(public home :HomeService , public pipe : DatePipe ,public admin:AdminService){}

  searchForm:FormGroup=new FormGroup({
    date1:new FormControl(),
    date2:new FormControl()
})
  
  

  ngOnInit(): void {
    this.admin.getgeneralreport();
    this.home.getDonation()
  }

  DownloadData(){
    const doc = new jsPDF()
    
    autoTable(doc, { html: '#my-table' ,theme:'grid',startY:2,margin:{horizontal:10},pageBreak:'auto',rowPageBreak:'avoid',columnStyles: {0: {cellWidth: 28, minCellHeight: 25},1: {cellWidth: 28},2: {cellWidth: 28},3: {cellWidth: 34},4: {cellWidth: 28}}})
    
    doc.save('table.pdf')
  }

  searchindoniation(){
    // this.home.searchfordonations(this.searchForm.value);

    const date1:any=this.pipe.transform((this.searchForm.controls['date1'].value), 'yyyy-MM-ddTHH:mm:ss');
    const date2:any=this.pipe.transform((this.searchForm.controls['date2'].value), 'yyyy-MM-ddTHH:mm:ss');

    this.home.alldonation=this.home.backup;


    debugger;
    if((this.searchForm.controls['date1'].value==null || date1==null)&&(this.searchForm.controls['date2'].value!=null || date2!=null)){
      this.home.alldonation= this.home.alldonation.filter((x:any)=> date2>= x.datedonation)

    }
    else if((this.searchForm.controls['date2'].value==null || date2==null)&&(this.searchForm.controls['date1'].value!=null || date1!=null)){
      this.home.alldonation= this.home.alldonation.filter((x:any)=> date1 <= x.datedonation)
    }
    else if((this.searchForm.controls['date1'].value!=null || date2!=null) &&((this.searchForm.controls['date2'].value!=null || date2!=null))){
    this.home.alldonation= this.home.alldonation.filter((x:any)=> date1 <= x.datedonation && date2>= x.datedonation)}
    else if((this.searchForm.controls['date1'].value==null || date2==null) &&((this.searchForm.controls['date2'].value==null || date2==null))){
      this.home.alldonation
    }

  }
}
  
   
  

