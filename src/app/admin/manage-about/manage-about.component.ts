import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';
import { MatDialogRef} from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-manage-about',
  templateUrl: './manage-about.component.html',
  styleUrls: ['./manage-about.component.css']
})

export class ManageAboutComponent implements OnInit  {
  @ViewChild ('callUpdateDialog') callUpdate! :TemplateRef<any>
  @ViewChild ('cullUpadetDeveloper') cullUpadetDeveloper! :TemplateRef<any>
  dialog: any;
  constructor(public Admin:AdminService,public dialogg:MatDialog){}


  updateData(){
    
    console.log(this.updateForn.value);
    this.Admin.updateAbout(this.updateForn.value);
  }
  uploadFileabout2(file:any){

    if(file.length==0) //zero image
    return ;
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.Admin.uploadAttachmentforabout2(formdata);

  }
  uploadFileabout1(file:any){
debugger;
    if(file.length==0) //zero image
    return ;

    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.Admin.uploadAttachmentforabout1(formdata);

  }

  openDialog() {
    this.dialog.open(this.callUpdate, {
      height: '200px',
      width: '400px',
      position: {
        left: 'calc(50vw - 200px + 250px)'
      }
    });
  }
  ngOnInit(): void {
    this.Admin.GetAllAbout();
  }
  updateForn:FormGroup=new FormGroup({
        aboutid:new FormControl(),
        paraghraph1:new FormControl(),
        paraghraph2:new FormControl(),
        imagepath1: new FormControl(),
        imagepath2:new FormControl(),
  })


  p_data_about:any={}

  upfateinfo(obj:any){
    this.dialogg.open(this.callUpdate);
    this.p_data_about=obj;
    this.updateForn.controls['aboutid'].setValue(this.p_data_about.aboutid);
    //this.updateForm.controls['image'].setValue(this.p_data.image);
    this.Admin.display_Image= this.p_data_about.imagepath1;
    this.Admin.display_Image2= this.p_data_about.imagepath2;
  }

  UpdateDevelopder(obj:any){
    debugger
    this.dialogg.open(this.cullUpadetDeveloper);
    this.p_data_about=obj;
    this.updateForn.controls['aboutid'].setValue(this.p_data_about.aboutid);
    //this.updateForm.controls['image'].setValue(this.p_data.image);
    this.Admin.display_Image= this.p_data_about.imagepath1;
    this.Admin.display_Image2= this.p_data_about.imagepath2;
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
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
// }
