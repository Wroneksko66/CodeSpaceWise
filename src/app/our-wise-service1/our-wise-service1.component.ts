import {Component} from '@angular/core';
import {ThemeButton} from "../model/enum";

@Component({
  selector: 'app-our-wise-service1',
  templateUrl: './our-wise-service1.component.html',
  styleUrls: ['./our-wise-service1.component.scss']
})
export class OurWiseService1Component {
  nameInput: string = "Learn More";
  ThemeButton = ThemeButton;
  element1:string='element1';
}
