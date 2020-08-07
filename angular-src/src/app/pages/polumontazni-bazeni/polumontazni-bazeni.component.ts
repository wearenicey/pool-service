import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polumontazni-bazeni',
  templateUrl: './polumontazni-bazeni.component.html',
  styleUrls: ['./polumontazni-bazeni.component.scss']
})
export class PolumontazniBazeniComponent implements OnInit {



  imageObject: Array<object> = [
    {

      image: '../../../assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-13.jpg'

    },
    {

      image: '../../../assets/img/polumontazni-bazeni/slika-11.png',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-11.png'

    },
    {

      image: '../../../assets/img/polumontazni-bazeni/slika-11.png',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-11.png'

    },
    {
      image: '../../../assets/img/polumontazni-bazeni/slika-11.png',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-11.png'

    },
    {

      image: '../../../assets/img/polumontazni-bazeni/slika-11.png',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-11.png'

    },
    {

      image: '../../../assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-13.jpg'

    },
    {

      image: '../../../assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-13.jpg'

    },
    {

      image: '../../../assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-13.jpg'

    },
    {

      image: '../../../assets/img/polumontazni-bazeni/slika-13.jpg',
      thumbImage: '../../../assets/img/polumontazni-bazeni/slika-13.jpg'

    },
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
