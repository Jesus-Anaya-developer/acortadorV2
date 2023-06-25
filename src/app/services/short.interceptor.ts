import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKEN = "b49b991d3d226435b5975d37ad3de5570fbd7f45";
    request = request.clone({ setHeaders: { Authorization: 'Bearer ' + TOKEN } })

    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      console.log(error)
      return throwError(error);
    }));
  }
}
