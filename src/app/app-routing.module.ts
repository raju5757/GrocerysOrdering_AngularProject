import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyerlistComponent } from './buyerlist/buyerlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DairyproductsComponent } from './dairyproducts/dairyproducts.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegitablesComponent } from './vegitables/vegitables.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { FoodgrainsComponent } from './foodgrains/foodgrains.component';
import { PackedfoodComponent } from './packedfood/packedfood.component';
import { BakeryitemsComponent } from './bakeryitems/bakeryitems.component';
import { MeatfishComponent } from './meatfish/meatfish.component';

const routes: Routes = [
  {path:'login', component:LoginComponent}
  ,{path:'homepage', component:HomepageComponent}
  ,{path:'dashboard', component:DashboardComponent}
  ,{path:'dairyproducts', component:DairyproductsComponent}
  ,{path:'buyerlist', component:BuyerlistComponent}
  ,{path:'fruits', component:FruitsComponent}
  ,{path:'vegitables', component:VegitablesComponent}
  ,{path:'beverages', component:BeveragesComponent}
  ,{path:'foodgrains', component:FoodgrainsComponent}
  ,{path:'packedfood', component:PackedfoodComponent}
  ,{path:'bakeryitems', component:BakeryitemsComponent}
  ,{path:'meatfish', component:MeatfishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
