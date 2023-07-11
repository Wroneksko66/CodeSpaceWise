import { Component } from '@angular/core';
import {ThemeButton} from "../../../../app/model/enum";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  nameInput: string = "Learn more";
  ThemeButton = ThemeButton;

}
