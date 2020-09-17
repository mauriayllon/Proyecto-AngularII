import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessagesService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public addProduct(mensaje: any): Observable<any> {
    return this.http.post(`${this.url}/mensajes.json`, mensaje);
  }
} 