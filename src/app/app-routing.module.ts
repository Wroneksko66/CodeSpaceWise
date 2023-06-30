import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OurWiseService1Component} from "./our-wise-service1/our-wise-service1.component";
import {TechnologyComponent} from "./technology/technology.component";

const routes: Routes = [
  {path:'OurWiseService/:elementId', component:OurWiseService1Component},
  {path:'Technology/:elementId', component:TechnologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
