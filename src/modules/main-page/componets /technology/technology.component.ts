import {Component, Input} from '@angular/core';
import {ThemeButton} from "../../../../app/model/enum";
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

  constructor() {
  }

}
