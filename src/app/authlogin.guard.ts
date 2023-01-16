


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
        else if(state.url.indexOf('moderator')>=0){
          let user :any= localStorage.getItem('user');
          if(user)
          {
            user= JSON.parse(user);
       
            if(user.Role=='2')
            {
              
              return true;
            }
            else{
              this.toaster.warning('Sorry, this page for Moderator');
              this.router.navigate(['/login']);
              return false;
            }
          }
        }
        else if(state.url.indexOf('benefactor')>=0){
          let user :any= localStorage.getItem('user');
          if(user)
          {
            user= JSON.parse(user);
       
            if(user.Role=='3')
            {
              
              return true;
            }
            else{
              this.toaster.warning('Sorry, this page for Benefactor');
              this.router.navigate(['/login']);
              return false;
            }
          }
        }
        else if(state.url.indexOf('beneficiary')>=0){
          let user :any= localStorage.getItem('user');
          if(user)
          {
            user= JSON.parse(user);
       
            if(user.Role=='4')
            {
              
              return true;
            }
            else{
              this.toaster.warning('Sorry, this page for Beneficiary');
              this.router.navigate(['/login']);
              return false;
            }
          }
        }


        return true;
      }
   
   else{
    this.router.navigate(['/login']);
    return false;
   }
   
    }
  
}
