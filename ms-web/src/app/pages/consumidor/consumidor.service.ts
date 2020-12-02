import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Consumidor } from './interfaces/consumidor.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {

  private readonly _endpoint = environment.consumidor;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getConsumidores(): Observable<Consumidor[]> {
    return this.http.get<Consumidor[]>(this._endpoint);
  }

  public getConsumidor(id: string): Observable<Consumidor> {
    return this.http.get<Consumidor>(`${this._endpoint}${id}`);
  }

  public postConsumidor(data: Consumidor): Observable<Consumidor> {
    return this.http.post<Consumidor>(this._endpoint, data);
  }

  public updateConsumidor(id: string, data: Consumidor): Observable<Consumidor> {
    return this.http.patch<Consumidor>(`${this._endpoint}${id}`, data);
  }

  public deleteConsumidor(id: string): Observable<Consumidor> {
    return this.http.delete<Consumidor>(`${this._endpoint}${id}`);
  }
}
