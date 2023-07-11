import {Component, EventEmitter, Output} from '@angular/core';
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
  constructor( private scrollServiceService: ScrollServiceService) {
  }


onMenuItemSelect(menuItem:string){
    // this.scrollServiceService.scrollTo$.next(menuItem);
  this.scrollServiceService.scrollElement(menuItem)
}

}
