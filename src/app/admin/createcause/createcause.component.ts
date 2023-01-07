import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-createcause',
  templateUrl: './createcause.component.html',
  styleUrls: ['./createcause.component.css']
})
export class CreatecauseComponent implements OnInit {
  CreateForm:FormGroup = new FormGroup({
    categoryname:new FormControl('',Validators.required),
    categoryimage:new FormControl(),
    categoryDesc:new FormControl('',Validators.required),
    categoryParagraph:new FormControl('')
    })
    
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
  }
  uploadFile(files:any){
    if(files.length==0)
    { //zero image 
    return ; 
    }
    let fileToUpload =<File>files[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.admin.uploadAttachment(formdata);

  }
  createcause(){
    this.admin.CreateCategory(this.CreateForm.value);
  }

}
