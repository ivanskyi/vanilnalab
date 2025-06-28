import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DostavkaComponent} from "./component/dostavka/dostavka.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"dostavka", component: DostavkaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
