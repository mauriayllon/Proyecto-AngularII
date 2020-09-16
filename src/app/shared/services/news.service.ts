import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class NewsService {

  

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<any> {
    return this.http.get(`https://proyecto-certiii-angular.firebaseio.com/noticias.json`);
  }
}