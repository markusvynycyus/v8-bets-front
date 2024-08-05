import { Injectable } from '@angular/core';
import { Rodada } from '../../models/rodada';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RodadasService {

  private rodadasUrl: string;

  constructor(private http: HttpClient) {
    this.rodadasUrl = 'http://localhost:8080/rodadas';
  }

  public listar(): Observable<Rodada[]> {
    return this.http.get<Rodada[]>(this.rodadasUrl);
  }

  public save(rodada: Rodada) {
    return this.http.post<Rodada>(this.rodadasUrl, rodada);
  }

  
}
