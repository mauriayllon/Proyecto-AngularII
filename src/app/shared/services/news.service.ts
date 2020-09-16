import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class NewsService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<any> {
    return this.http.get(`${this.url}/noticias.json`);
  }
}