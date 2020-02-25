import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./portfolio/home/home.component";
import { NavComponent } from "./portfolio/nav/nav.component";
import { PortfoComponent } from "./portfolio/portfo/portfo.component";
import { ProjectComponent } from "./portfolio/project/project.component";
import { SocialsComponent } from "./portfolio/socials/socials.component";


const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'portfo', component:PortfoComponent},
  {path : 'projects', component:ProjectComponent},
  {path : 'socials', component:SocialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
