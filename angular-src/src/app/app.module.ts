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
import { FooterComponent } from './components/footer/footer.component'

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { FaqComponent } from './pages/faq/faq.component';


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
    FaqComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
    CdkStepperModule
  ],
  providers: [
    { provide: 'googleTagManagerId', useValue: 'GTM-KLH779D' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
