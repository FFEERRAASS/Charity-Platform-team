


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthloginGuard implements CanActivate {
  constructor(private toaster:ToastrService, private router:Router){}

  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state);
      
      const token= localStorage.getItem('token');
      if(token)
      {
        if(state.url.indexOf('admin')>=0)
        {
          let user :any= localStorage.getItem('user');
          debugger;
          if(user)
          {
            user= JSON.parse(user);
       
            if(user.Role=='1')
            {
              
              return true;
            }
            else{
              this.toaster.warning('Sorry, this page for Admin');
              this.router.navigate(['/login']);
              return false;
            }
          }
        }


        return true;
      }
   
   else{
    this.toaster.warning('Please login');
    this.router.navigate(['/login']);
    return false;
   }
   
    }
  
}
