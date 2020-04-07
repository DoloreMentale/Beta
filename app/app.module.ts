import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { AccountsComponent } from './accounts/accounts.component';
import { StandardComponent } from './standard/standard.component';
import { CentComponent } from './cent/cent.component';
import { PAMMComponent } from './pamm/pamm.component';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/standard', component: StandardComponent },
  { path: 'accounts/cent', component: CentComponent },
  { path: 'accounts/PAMM', component: PAMMComponent },
  { path: 'about', component: AboutComponent },
  { path: 'research_and_education', component: ResearchComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    FooterComponent,
    AccountsComponent,
    StandardComponent,
    CentComponent,
    PAMMComponent,
    AboutComponent,
    ResearchComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
