import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-mange-charity',
  templateUrl: './mange-charity.component.html',
  styleUrls: ['./mange-charity.component.css']
})
export class MangeCharityComponent implements OnInit {

  @ViewChild ('docDialog') callDoc! :TemplateRef<any>

  constructor(public home:HomeService , private dialog : MatDialog){}
  docu:any;
  ngOnInit(): void {

    this.home.GetAllCharty();
  }


  doc(obj:any){
 
    this.dialog.open(this.callDoc);


    this.docu=obj;
    let x =document.getElementById("ifram");
    let attr = document.createAttribute("src");
    attr.value="../../../assets/Docs/"+obj;
    x?.setAttributeNode(attr);
    let s =document.getElementById("ifram");
    console.log(s);

}
    wating(){
    this.home.GetAllCharty()

    setTimeout(() => {
      this.home.chartiy=   this.home.chartiy.filter((x:any)=>x.isaccepted==2 )
      let h =  <HTMLElement>document.getElementById("ax");
      h.innerHTML=  "Wating";

      let accept =  document.querySelectorAll(".accept");
      let Reajcted =  document.querySelectorAll(".Reajcted");

      for (let index = 0; index < accept.length; index++) {
        Reajcted[index].classList.remove('dis')
        accept[index].classList.remove('dis')
      }
    }, 1000);

  }

  reajcted(){
    this.home.GetAllCharty()
    setTimeout(() => {
      this.home.chartiy= this.home.chartiy.filter((x:any)=>x.isaccepted==3)
      let h = <HTMLElement>document.getElementById("ax");
      h.innerHTML="Reajcted";

      let accept =  document.querySelectorAll(".accept");
      let Reajcted =  document.querySelectorAll(".Reajcted");
      let Delete =  document.querySelectorAll(".Delete");

      for (let index = 0; index < accept.length; index++) {
        Delete[index].classList.remove('dis')
        accept[index].classList.remove('dis')
        Reajcted[index].classList.add('dis')
      }

    }, 1000);

  }
  all(){
    this.home.GetAllCharty();
    let h = <HTMLElement>document.getElementById("ax");
    h.innerHTML="All Charity";


  }


  DeleteFun_CHARTIY(id:number){
       this.home.DeleteFun_CHARTIY(id);
       window.location.reload();
   }

   accept_CHARTIY(obj:any){
      this.home.accept_CHARTIY(obj);
   }

   Reajcted_CHARTIY(obj:any){
    this.home.Reajcted_CHARTIY(obj)
   }
}



