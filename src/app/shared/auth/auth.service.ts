import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpService
  ) { }

  login(loginData: LoginData): Observable<LoginResult> {
    if (loginData.googleStuff) {
      throw new Error("Google auth is not implemented");
    }

    if (loginData.password) {
      return of({} as LoginData);
    }
    
    throw new Error("Not implemented");
  }

  logout() {
    
  }
}

export interface LoginResult {

}

export interface LoginData {
  email?: string;
  password?: string;
  remember: boolean;
  googleStuff?: string;
}