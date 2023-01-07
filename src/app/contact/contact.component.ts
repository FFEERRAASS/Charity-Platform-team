import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from '../services/home.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public home:HomeService){

  }
  
  creatForm:FormGroup = new FormGroup({
    email:new FormControl(),
    subject:new FormControl(),
    msg:new FormControl(),
    phonenumber:new FormControl(),
  
    })
    sendContact(){
    this.home.CreatContact(this.creatForm.value);
    }

}
