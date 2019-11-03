import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLogin = false;

  constructor() {}

  login() {
    console.log('login click');
    this.isLogin = true;
  }

  logout() {
    console.log('logout click');
    this.isLogin = false;
  }

}
