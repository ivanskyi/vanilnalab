import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DostavkaComponent} from "./component/dostavka/dostavka.component";
import {MacaronsComponent} from "./component/macarons/macarons.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"dostavka", component: DostavkaComponent},
  {path:"products/macarons", component: MacaronsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
