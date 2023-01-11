import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-manage-request',
  templateUrl: './manage-request.component.html',
  styleUrls: ['./manage-request.component.css']
})
export class ManageRequestComponent implements OnInit {

  @ViewChild ('docDialog') callDoc! :TemplateRef<any>

  constructor(public home:HomeService , private dialog : MatDialog){}
  docu:any;
  ngOnInit(): void {
    this.home.GetAllChartyWating();
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

ReqwasetMoney(){
  this.home.GetAllChartyWating();
  setTimeout(() => {
    let h = <HTMLElement>document.getElementById("ax");
    h.innerHTML="All";
    let accept =  document.querySelectorAll(".accept");
    console.log(accept);

    for (let index = 0; index < accept.length; index++) {
      accept[index].classList.add('dis') ;
    }
  }, 1000);
}

Wating(){
  this.home.GetAllCharty();
  setTimeout(() => {
    this.home.WatingCharity= this.home.chartiy.filter((x:any)=>x.requestmoney=='Wating')
  }, 800);
  setTimeout(() => {
    let h = <HTMLElement>document.getElementById("ax");
    h.innerHTML="Wating";
    let accept =  document.querySelectorAll(".accept");
    console.log(accept);
    for (let index = 0; index < accept.length; index++) {
      accept[index].classList.remove('dis') ;
      console.log( accept[index]);
    }
  }, 1000);
}

accept_CHARTIY(id:any){
  debugger
  this.home.AcceptTransferMoneyFromCharityWallet(id);
}

}




