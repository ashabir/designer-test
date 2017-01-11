import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean {
    if(user === 'user' && password === 'password') {
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
    // return this.gisLoggedInetUser() !== null;
    return false;
  }

  redirectUrl: string;
}
