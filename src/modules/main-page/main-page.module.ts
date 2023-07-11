import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {OurWiseService1Component} from "./componets /our-wise-service1/our-wise-service1.component";
import {TechnologyComponent} from "./componets /technology/technology.component";
import {BlogComponent} from "./componets /blog/blog.component";
import {SharedModule} from "../shared/shared.module";
import { BannerComponent } from './componets /banner/banner.component';


@NgModule({
  declarations: [
    MainPageComponent,
    OurWiseService1Component,
    TechnologyComponent,
    BlogComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
