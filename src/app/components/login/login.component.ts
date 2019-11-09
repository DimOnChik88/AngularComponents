import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor() { }
  @Input() logStatus;
  @Input() applyLoginForm;
  @Input() userLogin;
  @Input() arrOfUsers;
  @Input() isUserPresent;

}
