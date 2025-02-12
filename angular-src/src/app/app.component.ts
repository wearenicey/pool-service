import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from './animations/fade.animation';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleTagManagerService} from 'angular-google-tag-manager';
import {MailService} from './mail.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]

})
export class AppComponent implements OnInit {
  title = 'angular-src';
  formContent: any;
  formData: any;
  activeStepIndex: number;
  subscription: any;

  constructor(private MailService: MailService, private router: Router, private gtmService: GoogleTagManagerService,) {
  }

  public getRouterOutletState(outlet) {

    return outlet.isActivated ? outlet.activatedRoute : '';

  }

  ngOnInit() {

    this.formData = {};
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

  sendMail(formData: any): void {
    this.formData = formData;

    // post form data here
    alert(JSON.stringify(this.formData));
    this.MailService.sendEmail(JSON.stringify(this.formData.value));
    this.formData.reset();

  }
}
