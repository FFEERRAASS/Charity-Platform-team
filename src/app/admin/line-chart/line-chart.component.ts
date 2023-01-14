import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { each } from 'jquery';
import { HomeService } from 'src/app/services/home.service';
import { DatePipe } from '@angular/common';
import { AdminService } from 'src/app/services/admin.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

//or
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{
  public chart: any;

  constructor(public home :HomeService,private datepipe:DatePipe,public admin:AdminService){}



createChart(){
let dates=[];
let amountOfDonationsPerDate=[];
let sumOfTheDonationsPerDate=[];
for(let i=0;i<this.home.alldonation.length;i++){
  let datedonationpiped = this.datepipe.transform((this.home.alldonation[i].datedonation), 'yyyy-MM-dd');
this.home.alldonation[i].datedonation=this.datepipe.transform((this.home.alldonation[i].datedonation), 'yyyy-MM-dd');
  if (dates.includes(datedonationpiped)==true){
    continue;
  }
  else{
    dates.push(datedonationpiped);
  }
}        
for(let i=0;i<dates.length;i++){
     let datetemp:string | null=dates[i];
     let datearratemp=this.home.alldonation;
     let temp=datearratemp.filter((x:any)=>x.datedonation==datetemp);
     amountOfDonationsPerDate.push(temp.length);
}
for(let i=0;i<dates.length;i++){
  let tempsumofdonationperdation=0;
  for(let y=0;y<this.home.alldonation.length;y++){
    if(this.home.alldonation[y].datedonation==dates[i]){
      tempsumofdonationperdation+=this.home.alldonation[y].amount;
    }else{
      continue;
    }
  }
  sumOfTheDonationsPerDate.push(tempsumofdonationperdation);
  tempsumofdonationperdation=0;
}
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: dates, ////dates to to display the donation
	       datasets: [
          {
            label: "total",  //the amount of donations in each date
            data: sumOfTheDonationsPerDate,
            backgroundColor: 'blue'
          },
          {
            label: "number of donations",  //the profits of these donations in that date 
            data: amountOfDonationsPerDate,
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
 ngOnInit(): void {
    this.home.getDonation();
    this.admin.getgeneralreport();

setTimeout(() => {
  this.createChart();
}, 1000);  
  }

  printPage() {
    window.print();

    // window.print();
  }
}
