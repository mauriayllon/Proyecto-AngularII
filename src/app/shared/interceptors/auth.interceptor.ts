import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();;
 
    if(token){
      request=request.clone(
        {
          url: request.url.indexOf('?') > -1 ? `${request.url}&auth=${token}` : `${request.url}?auth=${token}`
        });
    }
    return next.handle(request).pipe(
      catchError( (err:HttpErrorResponse) =>{
        if(err.status==401){
          this.handle401Error();
        }
        return throwError('error');
      }
      )
    ); 
  }

  private handle401Error():Observable<any>{
    this.router.navigate(['login']);
    this.authService.logout();
    return throwError('ERROR 401')
  }

}