import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormatTitlePipe } from './constants/format-title.pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageBlogComponent } from './posts/page-blog/page-blog.component';
import { FaqComponent } from './pages/faq/faq.component';
import { IzgradnjaBazenaComponent } from './pages/izgradnja-bazena/izgradnja-bazena.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { PolumontazniBazeniComponent } from './pages/polumontazni-bazeni/polumontazni-bazeni.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-slider';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    FormatTitlePipe,
    FormComponent,
    HomepageComponent,
    FooterComponent,
    BlogComponent,
    PageBlogComponent,
    FaqComponent,
    IzgradnjaBazenaComponent,
    NotfoundComponent,
    AboutComponent,
    PolumontazniBazeniComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    CdkStepperModule,
    CarouselModule,
    NgImageSliderModule

  ],
  providers: [
    { provide: 'googleTagManagerId', useValue: 'GTM-KLH779D' },
    { provide: LocationStrategy, useClass: PathLocationStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
