import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';
import { CreatecauseComponent } from '../createcause/createcause.component';

@Component({
  selector: 'app-manage-causes',
  templateUrl: './manage-causes.component.html',
  styleUrls: ['./manage-causes.component.css']
})
export class ManageCausesComponent implements OnInit {

  constructor(public admin :AdminService , private router:Router,private dialog:MatDialog) { }
  @ViewChild ('callDeleteDialog') callDelete! :TemplateRef<any>
  @ViewChild ('callUpdateDialog') callUpdate! :TemplateRef<any>

  updateForm:FormGroup = new FormGroup({
    categoryid:new FormControl(),
    categoryname:new FormControl(),
    categoryimage:new FormControl(),
    categoryDesc:new FormControl(),
    categoryParagraph:new FormControl()
    })


  ngOnInit(): void {
    this.admin.GetAllCategory();
  }

  DeleteFun(id:number){
   
       this.admin.deleteCourse(id);
   }

   createcause(){
    const dialogRef = this.dialog.open(CreatecauseComponent);
   }

   
   uploadFile(file:any){
    if(file.length==0) //zero image 
    return ; 
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    debugger;
    this.admin.uploadAttachment(formdata);

  }
  p_data:any={}

   updatefunction(obj:any){
    debugger;
    this.dialog.open(this.callUpdate);
    this.p_data=obj;
    
    this.updateForm.controls['categoryid'].setValue(this.p_data.categoryid);
    this.admin.display_Image= this.p_data.categoryimage;


   }

   updatecause()
   {
    this.admin.updatecause(this.updateForm.value);
   }



}
