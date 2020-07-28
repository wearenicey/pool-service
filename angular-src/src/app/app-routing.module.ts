import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { FaqComponent } from './pages/faq/faq.component';
import { IzgradnjaBazenaComponent } from './pages/izgradnja-bazena/izgradnja-bazena.component';


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
  { path: 'izgradnja-bazena', component: IzgradnjaBazenaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
