import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit{
  constructor(public beneficiary:BeneficiaryService, private toster:ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.beneficiary.getAllCatecory();
  }

  uploadFileabout1(file:any){
    debugger;
    if(file.length==0) //zero image
    return ;
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.beneficiary.uploadAttachmentBeneficary(formdata);
  }
  CreateForm :FormGroup= new FormGroup({
    useridFk:new FormControl('',Validators.required),
    docidFk:new FormControl('',Validators.required),
    imagepath:new FormControl('',Validators.required),
    goal:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required || Validators.email) ,
    numdonation :new FormControl(),
    charityname :new FormControl('',Validators.required),
    balance:new FormControl('',Validators.required),
    categoryidFk:new FormControl('',Validators.required)
  })

  matchError(){
    if(this.CreateForm.controls['goal'].value >=0)
        this.CreateForm.controls['goal'].setErrors(null);
        else
        this.CreateForm.controls['goal'].setErrors({mismatch:true})
  }
  SaveDate(){
    debugger;
    this.CreateForm.controls['balance'].setValue(0);
    this.CreateForm.controls['goal'].setValue(0);

    this.beneficiary.CreateCharity(this.CreateForm.value);
    setTimeout(() => {
      this.route.navigate(['beneficiary/profile'])
    }, 1000);

  }
  uploadFile(file:any){
    if(file.length==0) //zero image
    return ;
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    debugger;
    this.beneficiary.uploadAttachmentforabout1(formdata);

  }
}
