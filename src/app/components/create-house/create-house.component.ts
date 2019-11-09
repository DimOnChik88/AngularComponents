import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent {

  constructor() { }

 @Input() createHouseStatus;
 @Input() applyCreateHouseForm;
 @Input() house;
 @Input() arrOfUsers;
 @Input() arrOfHouses;

}
