import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }

@ Input() applyFindHouse;
@ Input() findHouseParams;
@ Input() arrOfHouses;
@ Input() searchArray;
@ Input() searchStatus;
@ Input() arrToShow;
@ Input() showButtonIndex;
@ Input() onHide;
@ Input() onShowMore;

}
