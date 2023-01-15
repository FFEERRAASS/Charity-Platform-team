import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(public admin: AdminService, public dialog: MatDialog) { }
  @ViewChild('callUpdateDialog') callUpdate!: TemplateRef<any>;
  @ViewChild('callChangeDialog') ChangePasswords!: TemplateRef<any>;

  obj: any = [];
  updateForm: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl(),
    gender: new FormControl(),
    phonenumber: new FormControl(),
    imagepath: new FormControl(),
    userid: new FormControl(),
    isaccepted: new FormControl(),
    roleidFk: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    rePassword: new FormControl(),
    oldPassword: new FormControl()
  })

  ngOnInit(): void {
    debugger;
    this.admin.getuserProfile();

  }

  uploadFile(file: any) {
    if (file.length == 0) //zero image 
      return;
    let fileToUpload = <File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    debugger;
    this.admin.uploadBenefactorImage(formdata);

  }
  p_data: any = {}


  updateprofile() {


    this.dialog.open(this.callUpdate);
    this.p_data = this.admin.users1;
    debugger;
    this.updateForm.controls['userid'].setValue(this.p_data.userid);
    this.updateForm.controls['roleidFk'].setValue(this.p_data.roleidFk);
    this.updateForm.controls['isaccepted'].setValue(this.p_data.isaccepted);
    this.updateForm.controls['password'].setValue(this.p_data.password);
    this.admin.display_Image = this.p_data.imagepath;


  }
  updateuser() {
    this.admin.updateBenefactorProfile(this.updateForm.value)
  }
  ChangePassword() {
    debugger;
    this.dialog.open(this.ChangePasswords);
    this.p_data = this.admin.users1;

    // this.updateForm.controls['userid'].setValue(this.p_data.userid);
    // this.updateForm.controls['roleidFk'].setValue(this.p_data.roleidFk);
    // this.updateForm.controls['isaccepted'].setValue(this.p_data.isaccepted);
    // this.updateForm.controls['firstname'].setValue(this.p_data.userid);
    // this.updateForm.controls['lastname'].setValue(this.p_data.roleidFk);
    // this.updateForm.controls['gender'].setValue(this.p_data.isaccepted);
    // this.updateForm.controls['phonenumber'].setValue(this.p_data.userid);
    // this.updateForm.controls['email'].setValue(this.p_data.isaccepted);
    // this.home.display_Image= this.p_data.imagepath;
    // this.updateForm.controls['username'].setValue(this.p_data.imagepath);


  }
  updatePassword() {
    debugger;
    if (this.updateForm.controls['oldPassword'].value == this.p_data.password) {
      if (this.updateForm.controls['password'].value == this.updateForm.controls['rePassword'].value) {
        this.p_data.password = this.updateForm.controls['password'].value;
        this.admin.updateBenefactorProfile(this.p_data)



      }
      else {
        alert('Unsuccessfully')
      }

    }
    else {
      alert('Unsuccessfully')
    }



  }

}
