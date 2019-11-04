import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = 'Hi there people';
  regStatus = false;
  logStatus = false;
  createHouseStatus = false;

  user = {
    userID: null,
    email: '',
    password: '',
    name: '',
    isBlocked: false
  };
  userLogin = {
    email: '',
    password: ''
  };
  house = {
    houseId: null,
    city: '',
    square: 0,
    street: '',
    price: 0,
    owner: this.user
  };
  arrOfUsers = [{
    userID: 0,
    email: 'IvanPupkin@gmail.com',
    password: 'pupochkin',
    name: 'Ivan',
    isBlocked: false
  }];
  arrOfHouses = [{
    houseId: 0,
    city: 'Lviv',
    square: 67,
    street: 'Suhiv',
    price: 50000,
    owner: this.arrOfUsers[0]
  }];
  isUserPresent = 3;
  findHouseParams = {
    city: '',
    square: 0,
    street: '',
    price: 0,
  };
  searchArray = [];
  arrToShow = [];
  searchStatus = 2;
  showButtonIndex: number;


  onClickRegistration() {
    this.regStatus = !this.regStatus && !this.logStatus && !this.createHouseStatus;
  }

  onClickLogin() {
    this.logStatus = !this.logStatus && !this.regStatus && !this.createHouseStatus;
  }

  onClickCreateHouse() {
    this.createHouseStatus = !this.createHouseStatus && !this.logStatus && !this.regStatus;
  }

  applyRegisterForm(registerForm: NgForm) {
    console.log(registerForm);
    this.user.isBlocked = Boolean(Math.round(Math.random()));
    this.user.userID = this.arrOfUsers.length;
    console.log(this.user);
    for (let i = 0; i < this.arrOfUsers.length; i++) {
      if (this.arrOfUsers[i].email === this.user.email) {
        this.isUserPresent = 2;
      }
    }
    if (this.isUserPresent === 2) {
      console.log('That user was already register.');
    } else {
      this.isUserPresent = 1;
      this.arrOfUsers.push(this.user);
    }
    console.log(this.arrOfUsers);
    this.user = {
      userID: null,
      email: '',
      password: '',
      name: '',
      isBlocked: false
    };
    setTimeout(() => {
      this.isUserPresent = 3;
    }, 1500);
  }

  applyLoginForm(loginForm: NgForm) {
    console.log(this.userLogin);
    for (let i = 0; i < this.arrOfUsers.length; i++) {
      if (this.userLogin.password === this.arrOfUsers[i].password &&
        this.userLogin.email === this.arrOfUsers[i].email) {
        return this.isUserPresent = 1;
      }
    }
    if (this.isUserPresent === 1) {
      console.log('Welcome');
    } else { this.isUserPresent = 0; }
    this.userLogin  = {
      email: '',
      password: ''
    };
    setTimeout(() => {
      this.isUserPresent = 3;
    }, 1500);
  }

  applyCreateHouseForm(createForm: NgForm) {
    console.log(createForm);
    this.house.owner = this.arrOfUsers[Math.floor(Math.random() * this.arrOfUsers.length)];
    this.house.houseId = this.arrOfHouses.length;
    console.log(this.house);
    this.arrOfHouses.push(this.house);
    console.log(this.arrOfHouses);
    this.house = {
      houseId: null,
      city: '',
      square: 0,
      street: '',
      price: 0,
      owner: this.user
    };
  }

  applyFindHouse(findForm: NgForm) {
    console.log(this.findHouseParams);
    for (let i = 0; i < this.arrOfHouses.length; i++) {
      if (
        (this.findHouseParams.city === this.arrOfHouses[i].city || this.findHouseParams.city === '') &&
        (this.findHouseParams.street === this.arrOfHouses[i].street || this.findHouseParams.street === '') &&
        (this.findHouseParams.price === this.arrOfHouses[i].price || this.findHouseParams.price === 0 ) &&
        (this.findHouseParams.square === this.arrOfHouses[i].square || this.findHouseParams.square === 0)
      ) {

        this.searchArray.push(this.arrOfHouses[i]);
        this.searchStatus = 1;
      }
    }
    console.log(findForm);
    console.log(this.searchArray);
    if (this.searchArray.length < 1) { this.searchStatus = 0; }
    this.arrToShow = this.searchArray;
    this.searchArray = [];
    this.findHouseParams = {
      city: '',
      square: 0,
      street: '',
      price: 0,
    };
  }

  onShowMore(id: number) {
    this.showButtonIndex = id;
  }

  onHide() {
    this.showButtonIndex = null;
  }
}
