import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
// declare var require: any;
import { DatePipe } from '@angular/common';


// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
// declare const $:any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(public home: HomeService, public admin: AdminService, public dialog: MatDialog,private pipe:DatePipe) { }
  @ViewChild('SureBlock') SureBlock1!: TemplateRef<any>;

  UpdateBlock: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl(),
    gender: new FormControl(),
    phonenumber: new FormControl(),
    imagepath: new FormControl(),
    userid: new FormControl(),
    isaccepted: new FormControl(),
    roleidFk: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    requestMoney: new FormControl()



  })

  searchForm:FormGroup=new FormGroup({
    name:new FormControl()
})
  p_data: any = {}
  users: any = [];
  ngOnInit(): void {
    this.admin.getallusersinnerRole();


  }

  blockUser(id: number) {
    this.admin.getuserProfileuseBlock(id);
    setTimeout(() => {
      this.p_data = this.admin.users2;
      console.log(this.p_data);
      debugger;
      this.UpdateBlock.controls['userid'].setValue(this.admin.users2.userid);
      this.UpdateBlock.controls['roleidFk'].setValue(this.p_data.roleidFk);
      this.UpdateBlock.controls['email'].setValue(this.p_data.email);
      this.UpdateBlock.controls['username'].setValue(this.p_data.username);
      this.UpdateBlock.controls['firstname'].setValue(this.p_data.firstname);
      this.UpdateBlock.controls['lastname'].setValue(this.p_data.lastname);
      this.UpdateBlock.controls['gender'].setValue(this.p_data.gender);
      this.UpdateBlock.controls['phonenumber'].setValue(this.p_data.phonenumber);
      this.UpdateBlock.controls['password'].setValue(this.p_data.password);
      this.UpdateBlock.controls['requestMoney'].setValue(this.p_data.requestMoney);

      this.UpdateBlock.controls['isaccepted'].setValue(0);
      this.admin.display_Image = this.p_data.imagepath;
      this.dialog.open(this.SureBlock1);
    }, 1000);




  }
  doneBlock() {
    this.admin.updateBenefactorProfile(this.UpdateBlock.value)

  }
  printPage() {
    window.print();

    // window.print();
  }
  DownloadData() {
    const doc = new jsPDF()

    autoTable(doc, { html: '#my-table', theme: 'grid', startY: 2, margin: { horizontal: 10 }, pageBreak: 'auto', rowPageBreak: 'avoid', columnStyles: { 0: { cellWidth: 22, minCellHeight: 25 }, 1: { cellWidth: 22 }, 2: { cellWidth: 22 }, 3: { cellWidth: 25 }, 4: { cellWidth: 20 } } })

    doc.save('table.pdf')
  }

  searchindoniation(){
    // this.home.searchfordonations(this.searchForm.value);

    const name:any=this.searchForm.controls['name'].value;

    this.admin.allusersinnerRole=this.admin.backup2;

    if( (name==null&&this.searchForm.controls['name'].value==null ) || (name==''&&this.searchForm.controls['name'].value=='')){
      this.admin.allusersinnerRole==this.admin.backup2;

    }else{
      this.admin.allusersinnerRole= this.admin.allusersinnerRole.filter((x:any)=> name== x.firstname || name==x.lastname || name==x.username ||name ==x.gender || name==x.phonenumber || name==x.email)

    }


  }

}
