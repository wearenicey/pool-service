import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-body-jet',
  templateUrl: './body-jet.component.html',
  styleUrls: ['./body-jet.component.scss']
})
export class BodyJetComponent implements OnInit {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Protiv strujni podvodni masažeri – body jet služe za ugodnu masažu u vodi ili kao uređaj za plivanje u mestu.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Body jet");
  }

}
