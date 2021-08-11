import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from '../models/conta.model';

const URL = '/api/conta';

const CONTAS = [
  {
    codigo: '1',
    saldo: 200,
    titular: 'Bruno Dutra',
    tipo_conta: 'CORRENTE',
    limite_emprestimo: 0,
  },
  {
    codigo: '2',
    saldo: 1000,
    titular: 'Breno Dutra',
    tipo_conta: 'POUPANCA',
    limite_emprestimo: 0,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Conta[]> {
  
    return this.http.get<Conta[]>(URL);
  
  }

  findByTipoConta(tipo: string): Observable<Conta[]> {

    let params = new HttpParams().set('tipoConta', tipo);
    return this.http.get<Conta[]>(URL, { params: params });
  
  }

  add(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(URL, conta);
 }

  edit(conta: Conta) {
    return this.http.put<Conta>(`${URL}/${conta.codigo}`, conta);
  }

  delete(conta: Conta) {
    return this.http.delete<Conta>(`${URL}/${conta.codigo}`);
  }
}
