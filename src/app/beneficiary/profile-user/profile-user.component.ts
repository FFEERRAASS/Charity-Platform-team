import { Component, DebugNode, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {
  @ViewChild ('callUpdateDialog') callUpdate! :TemplateRef<any>
  @ViewChild ('callUpdatecharityDialog') callUpdatecharity! :TemplateRef<any>
  constructor(public beneficary:BeneficiaryService , private rt:Router,private dialogg : MatDialog , private tostor:ToastrService){}

  ngOnInit(): void {
      var usero= JSON.parse(localStorage.getItem('user')|| '{}');
      this.id =parseFloat(usero.USERID);
      this.beneficary.GetWalletByUserId(this.id);
      this.beneficary.GetUserbyId(this.id);
  }

  public  id?:number;
  public show?:boolean;
  public showupdate?:boolean;
  updateForn:FormGroup=new FormGroup({
    userid:new FormControl(),
    email:new FormControl(),
    username:new FormControl(),
    lastname: new FormControl(),
    firstname:new FormControl(),
    phonenumber:new FormControl(),
    imagepath:new FormControl(),
    password:new FormControl(),
    gender:new FormControl(),
    isaccepted:new FormControl(),
    roleidFk:new FormControl(),
})


data:any={};
updateuserInfo(boj:any){
  this.dialogg.open(this.callUpdate);
  this.data=boj;
  this.updateForn.controls['userid'].setValue(this.data.userid);
  this.updateForn.controls['username'].setValue(this.data.username);
  this.updateForn.controls['gender'].setValue(this.data.gender);
  this.updateForn.controls['isaccepted'].setValue(this.data.isaccepted);
  this.updateForn.controls['password'].setValue(this.data.password);
  this.updateForn.controls['roleidFk'].setValue(this.data.roleidFk);
  this.beneficary.display_Image2= this.data.imagepath1;
}

requestmoney(boj:any){
  debugger;
  if(boj.requestMoney=="Wating"){
      this.tostor.warning("Please wait for the moderator to accept your request");
  }else{
  boj.requestMoney="Wating";
  this.beneficary.requestmony(boj);
  setTimeout(() => {
   window.location.reload();
  }, 1000);
}
}

  transfermoney(){
    let amount:any= document.getElementById("walletmonye")?.innerText;

    if(parseInt(amount)==0){
       this.tostor.warning('You Dont have Money');
    }else{
    this.beneficary.transfermoney(this.id!)
    window.location.reload();
  }
  }
  uploadFileabout2(file:any){
    if(file.length==0) //zero image
    return ;
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.beneficary.uploadAttachmentforabout2(formdata);
  }
  uploadFileabout1(file:any){
    debugger;
    if(file.length==0) //zero image
    return ;
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.beneficary.uploadAttachmentforabout1(formdata);
  }
  updateData(){
    debugger;
    this.beneficary.UpdateUserInfo(this.updateForn.value);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

}
