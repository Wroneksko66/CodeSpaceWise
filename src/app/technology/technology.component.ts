import {Component, Input} from '@angular/core';
import {ThemeButton} from "../model/enum";
import {Router} from "@angular/router";
import {ScrollServiceService} from "../service/scroll-service.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {
  @Input() targetElementId: string = '';
  nameInput1:string="Web Development";
  nameInput2:string="Web Design";
  ThemeButton = ThemeButton;
  element2: string = "element2";

  constructor() {
  }

}
