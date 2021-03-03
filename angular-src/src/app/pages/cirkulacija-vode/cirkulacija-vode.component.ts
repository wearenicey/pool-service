import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cirkulacija-vode',
  templateUrl: './cirkulacija-vode.component.html',
  styleUrls: ['./cirkulacija-vode.component.scss']
})
export class CirkulacijaVodeComponent implements OnInit {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Skimeri ili prelivi uzimaju vodu iz bazena sa gornje površine koja je inače i najprljavija koja zatim odlazi na filtraciju.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Cirkulacija vode");
  }

}
