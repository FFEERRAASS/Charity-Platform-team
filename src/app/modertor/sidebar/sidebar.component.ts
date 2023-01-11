import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}}

