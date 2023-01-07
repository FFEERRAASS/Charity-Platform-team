import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.css']
})
export class ManageContactComponent implements OnInit {
  constructor(public home :HomeService,public admin : AdminService , private router:Router,private dialog:MatDialog) { }


  ngOnInit(): void {
    this.home.GetAllContactUs();


  }
  DeleteFun(contactid:Number){
this.admin.deletContact(contactid);

  }
  public className = 'g-sidenav-pinned' ;
  handleNameInputChange = (inputevent:any) =>
  {

    this.toggleSidenav()


      // if (this.iconSidenav) {
      //   this.iconSidenav.addEventListener("click", this.toggleSidenav);
      //   console.log("kkk")
      // }
  }
   public toggleSidenav() {

    let body =<HTMLBodyElement>document.getElementById('body') ;
    let className:string = 'g-sidenav-pinned' ;
    let iconSidenav =<HTMLElement> document.getElementById('iconSidenav') ;
    let sidenav = <HTMLElement>document.getElementById('sidenav-main');

    if (body.classList.contains(className)) {
       body.classList.remove(className);
       body.classList.remove('bg-white')
       sidenav.classList.remove('bg-transparent');
      setTimeout(function( ) {
        body.classList.remove('bg-white');
      }, 100);
      sidenav.classList.remove('bg-transparent');

    } else {
      body.classList.add(this.className);
       sidenav.classList.add('bg-white');
       sidenav.classList.remove('bg-transparent');
       iconSidenav.classList.remove('d-none');
    }

}
}
