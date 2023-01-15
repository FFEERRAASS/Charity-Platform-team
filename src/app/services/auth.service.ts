import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router,public spinner:NgxSpinnerService) { }
  obj: any;
  submit(body:any) {
    this.spinner.show()
    var body2 = {
      username: body.email.toString(),
      password: body.password.toString()
    }

    const headerDirc =
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    const requestOption =
    {
      headers: new HttpHeaders(headerDirc)
    }

    this.http.post('https://localhost:44324/api/JWT/login', body2, requestOption).subscribe((resp: any) => {
      const responce = {
        token: resp.toString()
      }

      localStorage.setItem('token', responce.token);
      let user: any = jwt_decode(responce.token);
      console.log(user);

      localStorage.setItem('user', JSON.stringify({ ...user }));
      let x: number = 1;

      if (user.Role == '1') {

        this.router.navigate(['admin/main1']);
      }
      else if (user.Role == '2') {
        this.router.navigate(['Moderator/ManageCharity']);
      }
      else if (user.Role == '3') {
        this.router.navigate(['benefactor/main']);
      }
      else if (user.Role == '4') {
        this.router.navigate(['beneficiary/main']);
      }
      this.spinner.hide()



    }, err => {
      this.spinner.hide()
      this.toastr.error('Incorrect username or password ')
    })

  }

}


