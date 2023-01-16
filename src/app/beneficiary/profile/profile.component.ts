import { Component, DebugNode, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  @ViewChild ('callUpdateDialog') callUpdate! :TemplateRef<any>
  @ViewChild ('callUpdatecharityDialog') callUpdatecharity! :TemplateRef<any>


  public  id?:number;
  public show?:boolean=true;
  public showupdate?:boolean;
  public showInverse?:boolean;

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
    requestMoney:new FormControl()
})
constructor(public beneficary:BeneficiaryService , public spinner :NgxSpinnerService,private rt:Router,private dialogg : MatDialog , private tostor:ToastrService)
  {
        // Assign the data to the data source for the table to render.
  }

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
  this.updateForn.controls['requestMoney'].setValue(this.data.requestMoney);

  this.beneficary.display_Image= this.data.imagepath;
}

requestmoney(boj:any){
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
  balance:new FormControl(),
  email:new FormControl()
})

updatecharityInfo(boj:any){
  debugger;
  this.dialogg.open(this.callUpdatecharity);
  this.data=boj;

  this.updateCharityForm.controls['charityid'].setValue(this.data.charityid);
  this.updateCharityForm.controls['useridFk'].setValue(this.data.useridFk);
  this.updateCharityForm.controls['isaccepted'].setValue(this.data.isaccepted);
  this.updateCharityForm.controls['state'].setValue(this.data.state);
  this.updateCharityForm.controls['email'].setValue(this.data.email);

  this.updateCharityForm.controls['balance'].setValue(this.data.balance);
  this.updateCharityForm.controls['numdonation'].setValue(this.data.numdonation);
  this.updateCharityForm.controls['goal'].setValue(this.data.goal);

  this.beneficary.display_Image2= this.data.docidFk;
  this.beneficary.display_Image= this.data.imagepath;
}

  ngOnInit(): void {
    this.spinner.show()

      this.beneficary.getAllCatecory();
      var usero= JSON.parse(localStorage.getItem('user')|| '{}');
      this.id =parseFloat(usero.USERID);
      this.beneficary.GetWalletByUserId(this.id);
      this.beneficary.GetCharitybyId(this.id);
      this.beneficary.GetUserbyId(this.id);
      setTimeout(() => {
        if(this.beneficary.charityId.charityid==-1){
          this.show=true;

        }else{
          this.show=false;

        }
      }, 3000);
      setTimeout(() => {
        if(this.beneficary.charityId.charityid!=-1){
          this.showupdate=true;
        }else{
          this.showInverse=true;
        }
        this.spinner.hide()
      }, 3000);
  }

  

  Create(){
    this.rt.navigate(['beneficiary/charity']);
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
    debugger;
    if(file.length==0) //zero image
    return ;
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.beneficary.uploadAttachmentforabout1(formdata);

  }


  uploadFileabout1(file:any){
    if(file.length==0) //zero image
    return ;
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
   
    this.beneficary.uploadAttachmentBeneficary(formdata);
  }
  updateData(){
    this.beneficary.UpdateUserInfo(this.updateForn.value);
   setTimeout(() => {
    window.location.reload();
   }, 1000);
  }

  updateCharityData(){
    debugger;
    this.beneficary.updateCharityData(this.updateCharityForm.value);
    setTimeout(() => {
     window.location.reload();
    }, 1000);
  }


}

