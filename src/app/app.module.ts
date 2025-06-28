import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { DostavkaComponent } from './component/dostavka/dostavka.component';
import { ProductNavbarComponent } from './shared/product-navbar/product-navbar.component';
import { ProductsComponent } from './component/products/products.component';
import { MacaronsComponent } from './component/macarons/macarons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DostavkaComponent,
    ProductNavbarComponent,
    ProductsComponent,
    MacaronsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
