import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]

})
export class AppComponent {
  title = 'angular-src';
  constructor(private router: Router, private gtmService: GoogleTagManagerService,) { }

  public getRouterOutletState(outlet) {

    return outlet.isActivated ? outlet.activatedRoute : '';

  }

  ngOnInit() {
    // push GTM data layer for every visited page
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}