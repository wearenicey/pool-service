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

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-1.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-1.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-2.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-2.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-3.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-3.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-4.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-4.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-5.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-5.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-6.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-6.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-7.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-7.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-8.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-8.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-9.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-9.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-10.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-10.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-11.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-11.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-12.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-12.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-13.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-13.jpg'

    },
    {

      image: 'assets/img/polumontazni-bazeni/future-pool/slika-14.jpg',
      thumbImage: 'assets/img/polumontazni-bazeni/future-pool/slika-14.jpg'

    },
  ];

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
