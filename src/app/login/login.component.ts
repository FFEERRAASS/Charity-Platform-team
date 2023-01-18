import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,public router:Router,public auth:AuthService,public home :HomeService){}
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

  LoginForm : FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)])
  })




/*
  rememberme()
  {
    localStorage.setItem('email',this.loginForm.controls['email'].value);
    localStorage.setItem('password',this.loginForm.controls['password'].value);
  }
  */
  showPassword = false;
  showPass(){
    this.showPassword=!this.showPassword;
  }


  xyz:string="text";

  submit(){





    this.auth.submit(this.LoginForm.value)


  }


}
