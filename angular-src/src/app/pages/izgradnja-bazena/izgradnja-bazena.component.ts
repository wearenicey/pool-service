import {Component} from '@angular/core';
import * as fileSaver from 'file-saver';


@Component({
  selector: 'app-izgradnja-bazena',
  templateUrl: './izgradnja-bazena.component.html',
  styleUrls: ['./izgradnja-bazena.component.scss']
})
export class IzgradnjaBazenaComponent {

  public type = 'component';

  public disabled = false;

  downloadPdf() {
    const pdfUrl = '/assets/pdf/uputstvo.pdf';
    const pdfName = 'uputstvo.pdf';
    fileSaver.saveAs(pdfUrl, pdfName);
  }

}
