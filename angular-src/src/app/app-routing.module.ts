import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageBlogComponent } from './posts/page-blog/page-blog.component';
import { FaqComponent } from './pages/faq/faq.component';
import { IzgradnjaBazenaComponent } from './pages/izgradnja-bazena/izgradnja-bazena.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';
import { PolumontazniBazeniComponent } from './pages/polumontazni-bazeni/polumontazni-bazeni.component';


const routes: Routes = [
  { path: '', component: HomepageComponent, data: {} },
  { path: 'contact', component: ContactComponent },
  {
    path: 'blog',
    children: [
      { path: '', component: BlogComponent },
      { path: 'post-1', component: PageBlogComponent },

    ]
  },
  { path: 'faq', component: FaqComponent },
  { path: 'izgradnja-bazena', component: IzgradnjaBazenaComponent },
  { path: 'polumontazni-bazeni', component: PolumontazniBazeniComponent },
  { path: 'o-nama', component: AboutComponent },


  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
