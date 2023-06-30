import { Injectable } from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  constructor() { }

scrollElement(elementId:string):void{
    const element = document.getElementById(elementId);
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
}
}
