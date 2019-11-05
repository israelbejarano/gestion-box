import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLogin = false;

  constructor(private router: Router) {}

  login() {
    console.log('login click');
    this.router.navigateByUrl('/login');
    this.isLogin = true;
  }

  logout() {
    console.log('logout click');
    this.isLogin = false;
  }

}
