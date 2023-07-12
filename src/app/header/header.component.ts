import {Component, ElementRef, EventEmitter, Output} from '@angular/core';
import {ScrollServiceService} from "../../modules/shared/service/scroll-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuItemSelect:EventEmitter<string> = new EventEmitter<string>();
  nameInput: string = " Get a Quote"
  tooltipInfo: string = "Coming soon";
  openNavigation:boolean = false;
  constructor( private scrollServiceService: ScrollServiceService) {
  }

changePosition(){
    this.openNavigation = !this.openNavigation
}

onMenuItemSelect(menuItem:string){
  this.scrollServiceService.scrollElement(menuItem)
}

}
