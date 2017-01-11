import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean {
    if(user === 'user' && password === 'password') {
      console.log('From clicked');
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    console.log('AUTH', this.getUser());
    // return this.getUser() !== null;
    return true;
  }

  redirectUrl: string;
}
