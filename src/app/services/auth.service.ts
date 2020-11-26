import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { environment } from '../../environments/environment';






@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';

  private apikey =  environment.WEB_API_KEY_FIREBASE;

//Crear user
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
//Login
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) {
    //console.log(process.env.WEB_API_KEY_FIREBASE);
    //console.log(process.env.WEB_API_KEY_FIREBASE);
  }

  logout(){

  }
  login(user: UserModel){

  }
  singUp(user: UserModel){
    const authData = {
      ...user,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}signUp?key=${this.apikey}`, authData);
  }

}
