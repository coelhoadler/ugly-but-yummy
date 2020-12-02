import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Fornecedor } from './interfaces/fornecedor.interface';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private readonly _endpoint = environment.fornecedor;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this._endpoint);
  }

  public getFornecedor(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this._endpoint}${id}`);
  }

  public postFornecedor(data: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this._endpoint, data);
  }

  public updateFornecedor(id: string, data: Fornecedor): Observable<Fornecedor> {
    return this.http.patch<Fornecedor>(`${this._endpoint}${id}`, data);
  }

  public deleteFornecedor(id: string): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(`${this._endpoint}${id}`);
  }
}
