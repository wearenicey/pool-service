import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mozaik',
  templateUrl: './mozaik.component.html',
  styleUrls: ['./mozaik.component.scss']
})
export class MozaikComponent implements OnInit {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Mozaik pločice dimenzija 2 x 2 cm sa fugom od 2mm postavljene <br> na papir dim. 33 x 33 cm. U ponudi je veliki izbor mozaika. ' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Mozaik");
  }
}
