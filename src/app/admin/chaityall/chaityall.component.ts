import { HtmlParser } from '@angular/compiler';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-chaityall',
  templateUrl: './chaityall.component.html',
  styleUrls: ['./chaityall.component.css']
})
export class ChaityallComponent implements OnInit {

  @ViewChild ('docDialog') callDoc! :TemplateRef<any>

  constructor(public home:HomeService ,public admin : AdminService, private dialog : MatDialog){}
  docu:any;
  ngOnInit(): void {

   
      this.admin.GetAllChartyWatingForAdmin()
  
      // setTimeout(() => {
      //   this.home.chartiy=   this.home.chartiy.filter((x:any)=>x.isaccepted==2 )
      //   let h =  <HTMLElement>document.getElementById("ax");
      //   h.innerHTML=  "Wating";
  
      //   let accept =  document.querySelectorAll(".accept");
      //   let Reajcted =  document.querySelectorAll(".Reajcted");
  
      //   for (let index = 0; index < accept.length; index++) {
      //     Reajcted[index].classList.remove('dis')
      //     accept[index].classList.remove('dis')
      //   }
      // }, 1000);
  
    } 


    doc(obj:any){
      this.docu=obj;
      this.dialog.open(this.callDoc);
    }
    
    SelectGoal(id:number){

    }
  // reajcted(){
  //   this.home.GetAllCharty()
  //   setTimeout(() => {
  //     this.home.chartiy= this.home.chartiy.filter((x:any)=>x.isaccepted==3)
  //     let h = <HTMLElement>document.getElementById("ax");
  //     h.innerHTML="Reajcted";

  //     let accept =  document.querySelectorAll(".accept");
  //     let Reajcted =  document.querySelectorAll(".Reajcted");
  //     let Delete =  document.querySelectorAll(".Delete");

  //     for (let index = 0; index < accept.length; index++) {
  //       Delete[index].classList.remove('dis')
  //       accept[index].classList.remove('dis')
  //       Reajcted[index].classList.add('dis')
  //     }

  //   }, 1000);

  // }
  // all(){
  //   this.home.GetAllCharty();
  //   let h = <HTMLElement>document.getElementById("ax");
  //   h.innerHTML="All Charity";


  // }


  // DeleteFun_CHARTIY(id:number){
  //      this.home.DeleteFun_CHARTIY(id);
  //      window.location.reload();
  //  }

  //  accept_CHARTIY(obj:any){
  //     this.home.accept_CHARTIY(obj);
  //  }

  //  Reajcted_CHARTIY(obj:any){
  //   this.home.Reajcted_CHARTIY(obj)
  //  }
}



