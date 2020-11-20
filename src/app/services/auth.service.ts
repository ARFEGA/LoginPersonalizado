import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';

  private apikey =  process.env.WEB_API_KEY_FIREBASE;//

//Crear user
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
//Login
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) { }

  logout(){

  }
  login(user: UserModel){

  }
  singUp(){

  }

}
