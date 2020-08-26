import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';


@Component({
  selector: 'app-betonski-bazeni',
  templateUrl: './betonski-bazeni.component.html',
  styleUrls: ['./betonski-bazeni.component.scss']
})
export class BetonskiBazeniComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject: Array<object> = [
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-1.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-1.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-2.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-2.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-3.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-3.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-4.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-4.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-5.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-5.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-6.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-6.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-7.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-7.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-8.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-8.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-9.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-9.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-10.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-10.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-11.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-11.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-12.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-12.jpg'

    },
    {

      image: 'assets/img/betonski-bazeni/betonski-bazeni/slika-13.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-13.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-14.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-14.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-15.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-15.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-16.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-16.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-17.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-17.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-18.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-18.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-19.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-19.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-20.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-20.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-21.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-21.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-22.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-22.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-23.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-23.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-24.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-24.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-25.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-25.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-26.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-26.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-27.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-27.jpg'

    },
    {

      image: 'assets/img/betonski-bazenii/betonski-bazeni/slika-28.jpg',
      thumbImage: 'assets/img/betonski-bazeni/betonski-bazeni/slika-28.jpg'

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
