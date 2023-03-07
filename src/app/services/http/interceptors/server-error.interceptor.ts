import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(
    // private toastService: ToastService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((e: HttpErrorResponse) => {
          if (e.status == 500) {
            // this.toastService.addError("Błąd serwera. Proszę spróbować ponownie albo skontaktować się z adminem.");
          } else if(e.status == 400) {
            console.error(e);
            // this.toastService.addError(e.error);
          }

          return throwError(() => e);
        })
      );
  }
}
