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

  email :FormControl = new FormControl('',[Validators.required,Validators.email]);
  password :FormControl= new FormControl('',[Validators.required,Validators.minLength(8)])

   
  
/*
  rememberme()
  {
    localStorage.setItem('email',this.loginForm.controls['email'].value);
    localStorage.setItem('password',this.loginForm.controls['password'].value);
  }
  */
  
  ngOnInit() {
    /** spinner starts on init */

  }
  
  submit(){
    
    this.spinner.show();




    this.auth.submit(this.email,this.password) 
    this.spinner.hide();

    
  }
 

}