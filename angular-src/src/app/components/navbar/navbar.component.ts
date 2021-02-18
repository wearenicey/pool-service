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

}
