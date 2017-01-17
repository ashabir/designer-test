import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {
  redirectUrl: string;
  baseUrl: string = environment.baseUrl;

  constructor() { 
    console.log('URL', this.baseUrl);
    
  }

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
