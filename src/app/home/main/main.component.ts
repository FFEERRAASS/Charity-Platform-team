import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  template: `
  <div (mouseover)="onMouseOver()">Hover over me</div>
`
})
export class MainComponent {
  constructor(public home:HomeService,public router :Router,public admin:AdminService){}

  onMouseOver(event: MouseEvent) {
    const element = event.currentTarget as HTMLDivElement;
    element.innerText = 'feras';
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // debugger;
    //
    this.home.visitorabout();
    this.home.CountDonation();
    this.home.CountBeneficary();
    this.home.GetAllCategory();
    this.home.getCountusers();
    this.admin.getAllInformationHome();
    
    this.home.ReturnLastthreeAccepted();
    
  }
  hoverPic(){
    debugger;
    let par :string = "FERAS"
  }
  openCauses(categoryid:number){
      
      localStorage.setItem('categoryid',categoryid.toString());
      this.router.navigate(['/login']);
    debugger;
  }
}
