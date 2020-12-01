import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Produto } from './interfaces/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly _endpoint = environment.produto;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getProdutoes(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this._endpoint);
  }

  public getProduto(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this._endpoint}${id}`);
  }

  public postProduto(data: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._endpoint, data);
  }

  public deleteProduto(id: string): Observable<Produto> {
    return this.http.delete<Produto>(`${this._endpoint}${id}`);
  }
}
