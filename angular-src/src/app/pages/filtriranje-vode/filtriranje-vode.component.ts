import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-filtriranje-vode',
  templateUrl: './filtriranje-vode.component.html',
  styleUrls: ['./filtriranje-vode.component.scss']
})
export class FiltriranjeVodeComponent implements OnInit {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Peščani Filteri i Pumpe služe za filtriranje bazenske vode. Oni omogućavaju da voda bude čista i bistra.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Filtriranje vode");
  }
}
