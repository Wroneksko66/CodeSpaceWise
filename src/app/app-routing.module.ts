import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsComponent} from "../modules/forms/forms/forms.component";


const routes: Routes = [
  {path:'', loadChildren:()=>import('../modules/main-page/main-page.module').then(m => m.MainPageModule)},
  {path:'forms', loadChildren:()=>import('../modules/forms/forms.module').then(m => m.FormsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
