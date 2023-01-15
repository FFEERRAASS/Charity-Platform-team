import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { ToastrService } from 'ngx-toastr';
import { BenefactorServiceService } from '../services/benefactor-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
   
  constructor(private formBuilder: FormBuilder,public benefactor:BenefactorServiceService,public spinner:NgxSpinnerService,public home:HomeService,public router : Router,public toastr:ToastrService){}
  ngOnInit(): void {
    
    if(this.home.usero.USERID != null){
      if(this.home.usero.Role == 3){
        this.router.navigate(['/benefactor/main'])
      }
      else if(this.home.usero.Role == 4){
        this.router.navigate(['/beneficiary/main'])
      }
      else if(this.home.usero.Role == 2){
        this.router.navigate(['/Moderator/ManageCharity'])
      }
      else if(this.home.usero.Role == 1){
        this.router.navigate(['/admin/main1'])
      }
    }
  }
  

  
  

  siteKey:string="6LegG_UjAAAAACurZEvMz6XPNO0LPsptsATlp3nf";
 
  
  register:FormGroup=new FormGroup({

    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl(''),
    phonenumber:new FormControl('',Validators.required),
    imagepath:new FormControl(),
    roleidfk:new FormControl(''),
    isaccepted:new FormControl(),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    female:new FormControl(),
    male:new FormControl(),
    retype:new FormControl('',[Validators.required,Validators.minLength(8)])
  })
 
  showButton:boolean=false;
  resolved(captchaResponse: string="6LegG_UjAAAAAFI_enWL0AIAHw7T0FzJyMb8NLvD") {
    debugger;

    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse!=null){
      this.spinner.show()
      this.registers()
    }
  }
  body:any={};
  checkAvailable(){
    this.body={
      email:this.register.controls['email'].value,
      username:this.register.controls['username'].value,
      phonenumber:this.register.controls['phonenumber'].value
    }
    this.home.Avaliable(this.body)

  }
  Hidden:boolean=false;
  show(){
    this.Hidden=true;
  }
  uploadFile(files:any){
    if(files.length==0)
     
    return ; 
    let fileToUpload =<File>files[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    debugger;
    this.home.uploadImage(formdata);
  }
  registers(){
   
    if(this.register.controls['password'].value != this.register.controls['retype'].value){
      this.toastr.error("Password Not Match")

      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
    }
    else{
      if(this.register.controls['male'].value == true){
        this.register.controls['gender'].setValue("MALE");
      }
      if(this.register.controls['female'].value == true){
        this.register.controls['gender'].setValue("female");
      }
      this.register.controls['isaccepted'].setValue(1);
      if(this.register.controls['roleidfk'].value==true){
        this.register.controls['roleidfk'].setValue(4);
      }
      else if(this.register.controls['roleidfk'].value==false){
        this.register.controls['roleidfk'].setValue(3);
      }
  
      //  this.register.controls['imagepath'].setValue("FERAS")
      debugger;
      if(this.register.valid){
        this.home.register(this.register.value);

      }
      else{
        this.spinner.hide();

        this.toastr.error("Enter All information")
        setTimeout(() => {
          window.location.reload();

        }, 1500);

      }
    }
   
  }
}


