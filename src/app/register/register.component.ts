import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public home:HomeService,public router : Router){}
  register:FormGroup=new FormGroup({
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    gender:new FormControl(''),
    phonenumber:new FormControl('',Validators.required),
    imagepath:new FormControl('',Validators.required),
    roleidfk:new FormControl(''),
    isaccepted:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    female:new FormControl('',Validators.required),
    male:new FormControl('',Validators.required),
    retype:new FormControl('',Validators.required)
  })

  
  

  registers(){
    if(this.register.controls['password'].value != this.register.controls['retype'].value){
      alert('Password Not Match')
      this.router.navigate(['/register']);
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
  
       this.register.controls['imagepath'].setValue("FERAS")
      debugger;
      this.home.register(this.register.value);
    }
   
  }
}


