import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceWise';

  constructor() {
  }

  // onMenuItemSelect(elementId:string) {
  //   this.scrollServiceService.scrollElement(elementId);
  // }
}

