import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  obj: any;
  submit(email: any, password: any) {

    var body = {
      username: email.value.toString(),
      password: password.value.toString()
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


    this.http.post('https://localhost:44324/api/JWT/login', body, requestOption).subscribe((resp: any) => {
      const responce = {
        token: resp.toString()
      }

      localStorage.setItem('token', responce.token);
      let user: any = jwt_decode(responce.token);
      console.log(user);

      localStorage.setItem('user', JSON.stringify({ ...user }));
      let x: number = 1;
      debugger;
      if (user.IsAccepted == '1') {
        if (user.Role == '1') {

          this.router.navigate(['admin/main1']);
        }
        else if (user.Role == '2') {
          this.router.navigate(['modertor/main']);
        }
        else if (user.Role == '3') {
          this.router.navigate(['benefactor/main']);
        }
        else if (user.Role == '4') {
          this.router.navigate(['beneficiary/profile']);
        } else if (user.Role == '6') {
          this.router.navigate(['beneficiary/BeneficiaryProfile']);
        }
      }
      else {
        this.toastr.error('We apologize, you are prohibited from entering the site');
      }


    }, err => {
      this.toastr.error('Incorrect username or password ')
    })

  }

}


