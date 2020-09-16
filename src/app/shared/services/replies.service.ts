import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RepliesService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getMessagesById(id: any): Observable<any> {
    return this.http.get(`${this.url}/respuestas.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  }
  public getMessages(): Observable<any> {
    return this.http.get(`${this.url}/respuestas.json`);
  }
}