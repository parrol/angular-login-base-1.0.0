import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY } from 'src/environments/apikey.env';
import { userModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  // create new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) { }

  logOut() {

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
    );
  }
}
