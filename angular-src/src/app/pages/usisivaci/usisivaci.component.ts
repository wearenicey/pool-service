import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usisivaci',
  templateUrl: './usisivaci.component.html',
  styleUrls: ['./usisivaci.component.scss']
})
export class UsisivaciComponent implements OnInit {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Služe za usisavanje taloga sa dna bez praznjenja bazena.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Usisivaci");
  }


}
