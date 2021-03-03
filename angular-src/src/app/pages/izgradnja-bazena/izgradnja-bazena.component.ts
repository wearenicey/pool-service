import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as fileSaver from 'file-saver';


@Component({
  selector: 'app-izgradnja-bazena',
  templateUrl: './izgradnja-bazena.component.html',
  styleUrls: ['./izgradnja-bazena.component.scss']
})
export class IzgradnjaBazenaComponent {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Pool Service u ponudi nudi održavanje bazena na nedeljnom nivou. Na vama je samo da se prepustite i uživate.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Odrzavanje");
  }

  public type = 'component';

  public disabled = false;

  downloadPdf() {
    const pdfUrl = '/assets/pdf/uputstvo.pdf';
    const pdfName = 'uputstvo.pdf';
    fileSaver.saveAs(pdfUrl, pdfName);
  }

}
