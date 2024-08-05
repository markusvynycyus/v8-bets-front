import { Injectable } from '@angular/core';
import { Time } from '../models/time';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private timesUrl: string;

  constructor(private http: HttpClient) {
    this.timesUrl = 'http://localhost:8080/times';
  }

  public listar(): Observable<Time[]> {
    return this.http.get<Time[]>(this.timesUrl);
  }

  public save(user: Time) {
    return this.http.post<Time>(this.timesUrl, user);
  }
}

