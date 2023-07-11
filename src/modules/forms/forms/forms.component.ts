import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  nameInput:string = "Send"
  profileForm = new FormGroup({

  name: new FormControl(''),
  email: new FormControl(''),
  number: new FormControl('')
})
}
