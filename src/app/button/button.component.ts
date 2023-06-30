import {Component, Input} from '@angular/core';
import {ThemeButton} from "../model/enum";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() description = '';
  @Input() themeButton: ThemeButton = ThemeButton.primary;
  ThemeButton = ThemeButton;
}
