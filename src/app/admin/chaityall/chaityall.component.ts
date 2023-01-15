import { HtmlParser } from '@angular/compiler';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/services/admin.service';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-chaityall',
  templateUrl: './chaityall.component.html',
  styleUrls: ['./chaityall.component.css']
})
export class ChaityallComponent implements OnInit {

  @ViewChild ('docDialog') callDoc! :TemplateRef<any>

  constructor(public home:HomeService ,public spinner:NgxSpinnerService,public admin : AdminService,public beneficary:BeneficiaryService, private dialog : MatDialog){}
  @ViewChild ('callUpdatecharityDialog') callUpdatecharity! :TemplateRef<any>

  docu:any;
  updateCharityForm:FormGroup=new FormGroup({
    charityid:new FormControl(),
    useridFk:new FormControl(),
    docidFk:new FormControl(),
    imagepath: new FormControl(),
    goal:new FormControl(),
    numdonation:new FormControl(),
    charityname:new FormControl(),
    isaccepted:new FormControl(),
    state:new FormControl(),
    categoryidFk:new FormControl(),
    doc:new FormControl(),
    requestmoney:new FormControl(),
    firstname:new FormControl(),
    lastname:new FormControl(),
    username:new FormControl(),
    email:new FormControl(),
    balance:new FormControl(),


  })
  ngOnInit(): void 
  {

      this.admin.GetAllChartyWatingForAdmin1()


  } 

    

data:any={};
updatecharityInfo(obj:any){

  this.admin.GetCharitybyIdd(obj);
  debugger;
  this.dialog.open(this.callUpdatecharity);

  setTimeout(() => {
    this.data=this.admin.Response;

    console.log(this.data);
    debugger;
    this.updateCharityForm.controls['doc'].setValue(this.data.doc);
    this.updateCharityForm.controls['requestmoney'].setValue(this.data.requestmoney);
    this.updateCharityForm.controls['firstname'].setValue(this.data.firstname);
    this.updateCharityForm.controls['lastname'].setValue(this.data.lastname);
    this.updateCharityForm.controls['state'].setValue(this.data.state);
    this.updateCharityForm.controls['charityname'].setValue(this.data.charityname);
    this.updateCharityForm.controls['username'].setValue(this.data.username);
    this.updateCharityForm.controls['charityid'].setValue(this.data.charityid);
    this.updateCharityForm.controls['useridFk'].setValue(this.data.useridFk);
    this.updateCharityForm.controls['email'].setValue(this.data.email);
    this.updateCharityForm.controls['numdonation'].setValue(this.data.numdonation);
    this.updateCharityForm.controls['balance'].setValue(this.data.balance);
    this.updateCharityForm.controls['isaccepted'].setValue(1);
    this.updateCharityForm.controls['categoryidFk'].setValue(this.data.categoryidFk);
    this.updateCharityForm.controls['imagepath'].setValue(this.data.imagepath);
    this.updateCharityForm.controls['docidFk'].setValue(this.data.docidFk);
  

    console.log(this.updateCharityForm.value);


  }, 2000);


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
  updateCharityData(){
    debugger;
    this.admin.updateCharityData(this.updateCharityForm.value);
    setTimeout(() => {
     window.location.reload();
    }, 1000);
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



