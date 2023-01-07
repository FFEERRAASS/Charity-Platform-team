import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { HeaderandfooterComponent } from '../headerandfooter/headerandfooter.component';
@Component({
  selector: 'app-all-charity',
  templateUrl: './all-charity.component.html',
  styleUrls: ['./all-charity.component.css']
})
export class AllCharityComponent implements OnInit {
  constructor(public home:HomeService){}
  ngOnInit(): void {
    this.home.GetAllCharty();
  }

  DeleteFun_CHARTIY(id:number){
       this.home.DeleteFun_CHARTIY(id);
       window.location.reload();
   }
}
