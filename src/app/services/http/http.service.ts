import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _httpOptions: HttpOptions;
  private apiUrl = "";

  constructor(private http: HttpClient) {
    this._httpOptions = {
    };

    let token = localStorage.getItem("token");

    if (token != null) {
      this.setToken(token);
    }
  }

  public setToken(token: string) {
    this._httpOptions.headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  public clearToken() {
    this._httpOptions.headers?.delete("Authorization");
  }

  get<T>(url: string, params?: any): Observable<T> {
    if (params != null) {
      let httpParams = new HttpParams();
      for (const key in params) {
        const element = params[key];

        if (element != null) {
          if (Array.isArray(element)) {            
            for (const arrayElem of element) {
              httpParams = httpParams.append(key, arrayElem);              
            }
          } else {
            httpParams = httpParams.set(key, element);
          }
        }
      }

      this._httpOptions["params"] = httpParams;
    }

    return this.http.get<T>(`${this.apiUrl}/${url}`, this._httpOptions);
    // return this.http.get<T>(`${environment.apiUrl}/${url}`, this._httpOptions);
  }

  post<R>(url: string, data: any): Observable<R> {
    return this.http.post<R>(`${this.apiUrl}/${url}`, data, this._httpOptions);
    // return this.http.post<R>(`${environment.apiUrl}/${url}`, data, this._httpOptions);
  }

  put<R>(url: string, data?: any): Observable<R> {
    return this.http.put<R>(`${this.apiUrl}/${url}`, data, this._httpOptions);
    // return this.http.put<R>(`${environment.apiUrl}/${url}`, data, this._httpOptions);
  }

  delete<R>(url: string): Observable<R> {
    return this.http.delete<R>(`${this.apiUrl}/${url}`, this._httpOptions);
    // return this.http.delete<R>(`${environment.apiUrl}/${url}`, this._httpOptions);
  }
}

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
}