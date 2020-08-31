import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeLayoutComponent} from './_layout/home-layout/home-layout.component';
import {MainLayoutComponent} from './_layout/main-layout/main-layout.component';


import {ContactComponent} from './pages/contact/contact.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {BlogComponent} from './pages/blog/blog.component';
import {PageBlogComponent} from './posts/page-blog/page-blog.component';
import {FaqComponent} from './pages/faq/faq.component';
import {IzgradnjaBazenaComponent} from './pages/izgradnja-bazena/izgradnja-bazena.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {AboutComponent} from './pages/about/about.component';
import {PolumontazniBazeniComponent} from './pages/polumontazni-bazeni/polumontazni-bazeni.component';
import {DodatnaOpremaComponent} from './pages/dodatna-oprema/dodatna-oprema.component';
import {FiltriranjeVodeComponent} from './pages/filtriranje-vode/filtriranje-vode.component';
import {BetonskiBazeniComponent} from './pages/betonski-bazeni/betonski-bazeni.component';
import {BazeniFolijaComponent} from './pages/bazeni-folija/bazeni-folija.component';
import {CirkulacijaVodeComponent} from './pages/cirkulacija-vode/cirkulacija-vode.component';
import {OsvetljenjeComponent} from './pages/osvetljenje/osvetljenje.component';
import {StepeniceComponent} from './pages/stepenice/stepenice.component';
import {MozaikComponent} from './pages/mozaik/mozaik.component';
import {SredstvaComponent} from './pages/sredstva/sredstva.component';
import {UsisivaciComponent} from './pages/usisivaci/usisivaci.component';
import {BodyJetComponent} from './pages/body-jet/body-jet.component';


const routes: Routes = [

  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {path: '', component: HomepageComponent, pathMatch: 'full'},
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: 'kontakt', component: ContactComponent},
      {path: 'o-nama', component: AboutComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'odrzavanje', component: IzgradnjaBazenaComponent},
      {path: 'polumontazni-bazeni', component: PolumontazniBazeniComponent},
      {path: 'betonski-bazeni', component: BetonskiBazeniComponent},
      {path: 'bazeni-sa-folijom', component: BazeniFolijaComponent}
    ]
  },
  {
    path: 'blog',
    component: MainLayoutComponent,
    children: [
      {path: '', component: BlogComponent},
      {path: 'post-1', component: PageBlogComponent},
    ]
  },
  {
    path: 'dodatna-oprema',
    component: MainLayoutComponent,
    children: [
      {path: '', component: DodatnaOpremaComponent},
      {path: 'filtrianje-vode', component: FiltriranjeVodeComponent},
      {path: 'cirkulacija-vode', component: CirkulacijaVodeComponent},
      {path: 'osvetljenje', component: OsvetljenjeComponent},
      {path: 'stepenice', component: StepeniceComponent},
      {path: 'mozaik-folije', component: MozaikComponent},
      {path: 'sredstva-za-odrzavanje-bazena', component: SredstvaComponent},
      {path: 'usisivaci', component: UsisivaciComponent},
      {path: 'body-jet', component: BodyJetComponent}
    ]
  },

  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
