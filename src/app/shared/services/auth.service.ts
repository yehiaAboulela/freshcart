import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private HttpClient: HttpClient, private JwtModule: JwtModule) {}

  //base url => https://route-ecommerce.onrender.com/
  setRegister(registerFormBody: object): Observable<any> {
    return this.HttpClient.post(
      `https://route-ecommerce.onrender.com/api/v1/auth/signup`,
      registerFormBody
    );
  }
  setLogin(loginFormBody: object): Observable<any> {
    return this.HttpClient.post(
      `https://route-ecommerce.onrender.com/api/v1/auth/signin`,
      loginFormBody
    );
  }
}
