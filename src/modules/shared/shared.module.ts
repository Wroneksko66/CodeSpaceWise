import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "./components/button/button.component";
import {ScrollServiceService} from "./service/scroll-service.service";



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
  ]
})
export class SharedModule { }
