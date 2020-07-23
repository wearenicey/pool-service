import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BlogComponent } from './pages/blog/blog.component';


const routes: Routes = [
  { path: '', component: HomepageComponent, data: {} },
  { path: 'contact', component: ContactComponent, },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
