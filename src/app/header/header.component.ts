import {Component, EventEmitter, Output} from '@angular/core';
import {ThemeButton} from "../model/enum";
import {ScrollServiceService} from "../service/scroll-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuItemSelect:EventEmitter<string> = new EventEmitter<string>();
  nameInput: string = " Learn More"
  ThemeButton = ThemeButton;

  constructor() {
  }
onMenuItemSelect(menuItem:string){
    this.menuItemSelect.emit(menuItem);
}

}
