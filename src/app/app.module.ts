import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './portfolio/home/home.component';
import { NavComponent } from './portfolio/nav/nav.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { PortfoComponent } from './portfolio/portfo/portfo.component';
import { SocialsComponent } from './portfolio/socials/socials.component';
import { PortfolioService } from './service/portfolio.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProjectComponent,
    PortfoComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,

  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
