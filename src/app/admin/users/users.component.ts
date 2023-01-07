import { AfterViewInit, Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
// declare var require: any;

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
export class UsersComponent  implements OnInit {
constructor(public home : HomeService){}
// @ViewChild('dTable',{static:false}) dataTable:any;
//   ngAfterViewInit(): void {
//     $(this.dataTable.nativeElement).DataTable({
//       searching:false,
//       dom: 'Bfrtip',
//       buttons: [
//         'pdf'
//     ]
//     });
//   }
//,AfterViewInit


  ngOnInit(): void {
    this.home.getallusers();
    
  }
  printPage(){
    window.print();

    // window.print();
  }
  DownloadData(){
    const doc = new jsPDF()
    
    autoTable(doc, { html: '#my-table' ,theme:'grid',startY:2,margin:{horizontal:10},pageBreak:'auto',rowPageBreak:'avoid',columnStyles: {0: {cellWidth: 22, minCellHeight: 25},1: {cellWidth: 22},2: {cellWidth: 22},3: {cellWidth: 25},4: {cellWidth: 20}}})
    
    doc.save('table.pdf')
  }
  // @ViewChild('pdfTable') pdfTable!: ElementRef;
  
  // public exportPDF() {
  //   const pdfTable = this.pdfTable.nativeElement;
  //   var html = htmlToPdfmake(pdfTable.innerHTML);
  //   debugger;

  //   const documentDefinition = { content: html };

  //   pdfMake.createPdf(documentDefinition).download(); 
     
  // }
 

}
