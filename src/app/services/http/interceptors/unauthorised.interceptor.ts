import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class UnauthorisedInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError((e: HttpErrorResponse) => {
        if (e.status == 401) {
          this.auth.logout(); //is it optimal?
          this.router.navigate(["login"]);
        }

        return throwError(() => e);
      }));
  }
}
