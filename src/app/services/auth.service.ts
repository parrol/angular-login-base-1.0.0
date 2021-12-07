import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY } from 'src/environments/apikey.env';
import { userModel } from '../model/user.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  userToken: string;
  // create new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) {
    this.readToken();
  }

  logOut() {
    localStorage.removeItem('token');
  }

  login(user: userModel) {

    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}:signInWithPassword?key=${API_KEY}`,
      authData
    ).pipe(
      map(response => {
        this.saveToken(response['idToken']);
        return response;
      })
    );
  }

  registerUser(user: userModel) {

    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}:signUp?key=${API_KEY}`,
      authData
    ).pipe(
      map(response => {
        this.saveToken(response['idToken']);
        return response;
      })
    );
  }

  private saveToken(idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expires', hoy.getTime().toString());
  }

  private readToken() {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticated(): boolean {
    if (this.userToken.length < 2) return false;

    const expires = Number(localStorage.getItem('expires'));
    const expirationDate = new Date().setTime(expires);

    if (expirationDate > new Date().getTime()) {
      return true;
    } else {
      return false;
    }
    return this.userToken.length > 2;
  }
}
