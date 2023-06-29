import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyerlistComponent } from './buyerlist/buyerlist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { DairyproductsComponent } from './dairyproducts/dairyproducts.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegitablesComponent } from './vegitables/vegitables.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { FoodgrainsComponent } from './foodgrains/foodgrains.component';
import { PackedfoodComponent } from './packedfood/packedfood.component';
import { BakeryitemsComponent } from './bakeryitems/bakeryitems.component';
import { MeatfishComponent } from './meatfish/meatfish.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    DashboardComponent,
    BuyerlistComponent,
   DairyproductsComponent,
   FruitsComponent,
   VegitablesComponent,
   BeveragesComponent,
   FoodgrainsComponent,
   PackedfoodComponent,
   BakeryitemsComponent,
   MeatfishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
