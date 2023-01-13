import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private spinner:NgxSpinnerService,private router:Router,public auth:AuthService){}

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
  ngOnInit() {
    /** spinner starts on init */

  }

  xyz:string="text";
  
  submit(){
    




    this.auth.submit(this.LoginForm.value) 

    
  }
 

}
