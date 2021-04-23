import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormatTitlePipe } from './constants/format-title.pipe';
import { LazyImgDirective } from './lazy-img-directive.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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
import { DodatnaOpremaComponent } from './pages/dodatna-oprema/dodatna-oprema.component';
import { FiltriranjeVodeComponent } from './pages/filtriranje-vode/filtriranje-vode.component';
import { KonsultacijeComponent } from './components/konsultacije/konsultacije.component';
import { BetonskiBazeniComponent } from './pages/betonski-bazeni/betonski-bazeni.component';
import { BazeniFolijaComponent } from './pages/bazeni-folija/bazeni-folija.component';
import { CirkulacijaVodeComponent } from './pages/cirkulacija-vode/cirkulacija-vode.component';
import { OsvetljenjeComponent } from './pages/osvetljenje/osvetljenje.component';
import { StepeniceComponent } from './pages/stepenice/stepenice.component';
import { MozaikComponent } from './pages/mozaik/mozaik.component';
import { SredstvaComponent } from './pages/sredstva/sredstva.component';
import { UsisivaciComponent } from './pages/usisivaci/usisivaci.component';
import { BodyJetComponent } from './pages/body-jet/body-jet.component';
import { NavbarDarkComponent } from './components/navbar-dark/navbar-dark.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { TriKorakaComponent } from './components/tri-koraka/tri-koraka.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 24,
  slidesPerView: 1,
};

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
    DodatnaOpremaComponent,
    FiltriranjeVodeComponent,
    KonsultacijeComponent,
    BetonskiBazeniComponent,
    BazeniFolijaComponent,
    CirkulacijaVodeComponent,
    OsvetljenjeComponent,
    StepeniceComponent,
    MozaikComponent,
    SredstvaComponent,
    UsisivaciComponent,
    BodyJetComponent,
    NavbarDarkComponent,
    HomeLayoutComponent,
    MainLayoutComponent,
    PonudaComponent,
    TriKorakaComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    CdkStepperModule,
    SwiperModule,
    FontAwesomeModule,


  ],
  providers: [
    { provide: 'googleTagManagerId', useValue: 'GTM-KLH779D' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
