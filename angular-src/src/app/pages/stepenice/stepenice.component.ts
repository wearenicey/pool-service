import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stepenice',
  templateUrl: './stepenice.component.html',
  styleUrls: ['./stepenice.component.scss']
})
export class StepeniceComponent implements OnInit {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Stepenice služe za lakši izlazak kupača iz bazena. Izradjene od nerdjajućeg čelika uglavnom sa dva do četiri gazišta.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Stepenice");
  }

}
