import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  scrollTo$ = new Subject<string>();

  constructor() {
  }


  scrollElement(elementId: string): void {
    console.log(elementId)
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
    }
  }
}
