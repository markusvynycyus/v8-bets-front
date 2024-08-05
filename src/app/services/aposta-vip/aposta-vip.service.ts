import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aposta } from '../../models/aposta';

@Injectable({
  providedIn: 'root'
})
export class ApostaVipService {

  private apostasUrl: string;


  constructor(private http: HttpClient) {
    this.apostasUrl = 'http://localhost:8080/apostas';
  }

 // public save(aposta: Aposta) {
 //   return this.http.post<Aposta>(this.apostasUrl, aposta);
  //}

  public save(apostas: Aposta[]) {
    return this.http.post<Aposta[]>(this.apostasUrl, apostas);

  }
}
