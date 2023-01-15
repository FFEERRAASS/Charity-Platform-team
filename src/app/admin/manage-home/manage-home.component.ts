import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit{
  @ViewChild ('callUpdateDialog') callUpdate! :TemplateRef<any>

  constructor(public admin :AdminService,public dialogg:MatDialog){}
  ngOnInit(): void {
    this.admin.getAllInformationHome();
  }
  homeForm:FormGroup=new FormGroup({
    homeid:new FormControl(),
    paraghraph1:new FormControl(),
    paraghraph2:new FormControl(),

    imagepath1:new FormControl(),
    imagepath2:new FormControl()
  })

  
  uploadFileabout2(file:any){

    if(file.length==0) //zero image
    return ;
    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.admin.uploadAttachmentforabout2(formdata);

  }
  uploadFileabout1(file:any){
debugger;
    if(file.length==0) //zero image
    return ;

    let fileToUpload =<File>file[0];
    const formdata=new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.admin.uploadAttachmentforabout1(formdata);

  }
  obj1:any={};
  
  updatehome(obj:any){
   debugger;
this.obj1=obj;
    this.homeForm.controls['homeid'].setValue(obj.homeid);
    this.homeForm.controls['paraghraph1'].setValue(obj.paraghraph1);
    this.homeForm.controls['paraghraph2'].setValue(obj.paraghraph2);
    this.admin.display_Image = obj.imagepath1;
    this.admin.display_Image2 = obj.imagepath2;
    
    this.dialogg.open(this.callUpdate);

    
  }





  updateData(){

    this.admin.updateHome(this.homeForm.value);
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
