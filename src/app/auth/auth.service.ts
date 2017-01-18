import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {
  redirectUrl: string;
  baseUrl: string = environment.baseUrl;
  token: string;

  constructor(private http: Http) {
    console.log('URL', this.baseUrl);
  }

  getToken(): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb25zdW1lcl9pZCI6MSwicm11IjoxLCJpYXQiOjE0Njc4MjU5NTAsImV4cCI6MjMzMTgyNTk1MCwidXNlcl9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoxLCJyb2xlX2lkIjoxLCJwcm9maWxlX2lkIjoxfQ.R87dXa3b1MZrtxflaNRL2mvYlR3ousEc7e_J3G2b5Tw');

    let options = new RequestOptions({ headers: headers })
    return this.http.post(
      this.baseUrl + 'token',
      JSON.stringify({
        access_id: 'hf463gu8736gfgyr63',
        access_secret: 'vnc308jcnpj88hf'
      }),
      options
    )
      .map(response => response.json())
      .map((response) => {
        this.token = response.token;
        console.log('TOKEN', this.token);

        return this.token;
      })
  }
  login(loginData: Object, token: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({ headers: headers })
    console.log('SERVICE LOGIN', loginData, token);
    return this.http.post(
      this.baseUrl + 'login',
      JSON.stringify(
        loginData
      ),
      options
    )
      .map(response => response.json())
      .map((response) => {
        console.log('JWT');
        return response.jwt;
      })
      .catch((err) => {
        console.log('Error JSON: ', Observable.throw(err.json()));
        return Observable.throw(err.json());
      })

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

  handleError() {

  }

}
