import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sredstva',
  templateUrl: './sredstva.component.html',
  styleUrls: ['./sredstva.component.scss']
})
export class SredstvaComponent implements OnInit {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: ' Pool Service u svojoj ponudi ima kompletan asortiman hemijskih proizvoda za zaštitu vode.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Sredstva za odrzavanje vode");
  }

}
