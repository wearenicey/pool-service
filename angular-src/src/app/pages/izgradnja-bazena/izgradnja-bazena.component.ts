import { Component, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver';



@Component({
  selector: 'app-izgradnja-bazena',
  templateUrl: './izgradnja-bazena.component.html',
  styleUrls: ['./izgradnja-bazena.component.scss']
})
export class IzgradnjaBazenaComponent {

  constructor() { }




  downloadPdf() {
    const pdfUrl = '/assets/pdf/upustvo.pdf';
    const pdfName = 'upustvo.pdf';
    fileSaver.saveAs(pdfUrl, pdfName);
  }

}