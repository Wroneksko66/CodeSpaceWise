import {Component} from '@angular/core';
import {ScrollServiceService} from "../../../shared/service/scroll-service.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {


  constructor(private scrollServiceService: ScrollServiceService) {
  }


}
