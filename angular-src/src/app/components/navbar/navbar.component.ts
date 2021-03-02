import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
  // refreshPage() {
  //   window.location.href = './projects/pool-service/dodatna-oprema';
  // }
=======
>>>>>>> 3f83889a2cf5e6ed11664f264619d1d0fb4dcb2b

}
