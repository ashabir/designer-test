import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  redirectUrl: string;

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
    return this.getUser() !== null;
  }

}
