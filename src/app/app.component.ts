import { Component } from '@angular/core';
import {ScrollServiceService} from "./service/scroll-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceWise';

  constructor(private scrollServiceService:ScrollServiceService) {
  }

  onMenuItemSelect(elementId:string) {
    this.scrollServiceService.scrollElement(elementId);
  }
}

