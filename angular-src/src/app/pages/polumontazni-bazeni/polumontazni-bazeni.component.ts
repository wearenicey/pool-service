import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-polumontazni-bazeni',
  templateUrl: './polumontazni-bazeni.component.html',
  styleUrls: ['./polumontazni-bazeni.component.scss']
})
export class PolumontazniBazeniComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject: Array<object> = [
    {

      image: 'assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-13.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/slika-11.png',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-11.png'

    },
    {

      image: 'assets/img/polumontazni-bazeni/slika-11.png',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-11.png'

    },
    {
      image: 'assets/img/polumontazni-bazeni/slika-11.png',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-11.png'

    },
    {

      image: 'assets/img/polumontazni-bazeni/slika-11.png',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-11.png'

    },
    {

      image: 'assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-13.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-13.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-13.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/slika-13.jpg'

    },
  ];

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }









  constructor() { }

  ngOnInit(): void {
  }

}
