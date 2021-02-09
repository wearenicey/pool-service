import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-dark',
  templateUrl: './navbar-dark.component.html',
  styleUrls: ['./navbar-dark.component.scss']
})
export class NavbarDarkComponent implements OnInit {

  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor() {
  }

  ngOnInit(): void {
  }
  refreshPage() {
    window.location.href = '/dodatna-oprema';
  }


}
