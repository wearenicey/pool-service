import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dodatna-oprema',
  templateUrl: './dodatna-oprema.component.html',
  styleUrls: ['./dodatna-oprema.component.scss']
})
export class DodatnaOpremaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }

  refreshPage() {
    window.location.href = window.location.href;
  }



}
