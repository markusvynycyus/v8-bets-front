import { Injectable } from '@angular/core';
import { Partida } from '../../models/partida';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  private partidasUrl: string;

  constructor(private http: HttpClient) {
    this.partidasUrl = 'http://localhost:8080/partidas';
  }

  public listar(): Observable<Partida[]> {
    return this.http.get<Partida[]>(this.partidasUrl);
  }
}
