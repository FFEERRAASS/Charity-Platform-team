import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-manage-test',
  templateUrl: './manage-test.component.html',
  styleUrls: ['./manage-test.component.css']
})
export class ManageTestComponent implements OnInit {

  constructor(public home :HomeService){}
  ngOnInit(): void {
    this.home.GetAllTestimonial();
  }

  updatetestimonial(testimonialid:number){
    this.home.changetestimonialstate(testimonialid);
  }

  deletetestimonial(testimonialid:number){
    this.home.rejecttestimonial(testimonialid);
  }
  printPage() {
    window.print();

    // window.print();
  }
  DownloadData() {
    const doc = new jsPDF()

    autoTable(doc, { html: '#my-table', theme: 'grid', startY: 2, margin: { horizontal: 10 }, pageBreak: 'auto', rowPageBreak: 'avoid', columnStyles: { 0: { cellWidth: 35, minCellHeight: 25 }, 1: { cellWidth: 35 }, 2: { cellWidth: 45 }, 3: { cellWidth: 15 }, 4: { cellWidth: 20 } } })

    doc.save('table.pdf')
  }
}