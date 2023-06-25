import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyerlistComponent } from './buyerlist/buyerlist.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'login', component:LoginComponent}
  ,{path:'homepage', component:HomepageComponent}
  ,{path:'dashboard', component:DashboardComponent}
  ,{path:'buyerlist', component:BuyerlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
