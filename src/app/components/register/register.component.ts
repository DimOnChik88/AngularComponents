import {Component, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() {
  }

  @Input() regStatus;
  @Input() applyRegisterForm;
  @Input() user;
  @Input() arrOfUsers;
  @Input() isUserPresent;
}
