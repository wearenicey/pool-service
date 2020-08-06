import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-polumontazni-bazeni',
  templateUrl: './polumontazni-bazeni.component.html',
  styleUrls: ['./polumontazni-bazeni.component.scss']
})
export class PolumontazniBazeniComponent implements OnInit {

  owlNext = '&rarr;';
  owlPrev = '&larr;';

  slidesStore = [
    {
      id: 1,
      src: '../../../assets/img/polumontazni-bazeni/slika-10.png',
      alt: 'Image_1',
      title: 'Image_1'
    },
    {
      id: 2,
      src: '../../../assets/img/polumontazni-bazeni/slika-11.png',
      alt: 'Image_2',
      title: 'Image_3'
    },
    {
      id: 3,
      src: '../../../assets/img/polumontazni-bazeni/slika-11.png',
      alt: 'Image_3',
      title: 'Image_3'
    },
    {
      id: 4,
      src: '../../../assets/img/polumontazni-bazeni/slika-11.png',
      alt: 'Image_4',
      title: 'Image_4'
    },
    {
      id: 5,
      src: '../../../assets/img/polumontazni-bazeni/slika-11.png',
      alt: 'Image_5',
      title: 'Image_5'
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }



  constructor() { }

  ngOnInit(): void {
  }

}
