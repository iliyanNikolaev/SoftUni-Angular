import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('/users/login')) {
      return next.handle(request).pipe(
        tap((event) => {
          if (event instanceof HttpResponse && event.status === 200) {
            const { _id, firstName, lastName, profilePic, token } = event.body;
            localStorage.setItem('token', token);
            localStorage.setItem('fullName', firstName + ' ' + lastName);
            localStorage.setItem('profilePic', profilePic);
            localStorage.setItem('_id', _id);
          }
        })
      );
    } else if(request.url.startsWith('https://api.cloudinary.com')) {
      return next.handle(request);
    } else {
      const token = localStorage.getItem('token');
      if (token) {
        request = request.clone({
          setHeaders: {
            token: token
          }
        });
      }
      return next.handle(request);
    }
  }
}

export const authInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
