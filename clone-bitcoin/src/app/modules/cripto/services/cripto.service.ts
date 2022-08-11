import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Modulo para requisições http (restFull)
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CriptoService {
  url = environment.appUrl;
  headers = new HttpHeaders(
    { 'Content-Type': 'application/json' } // Passando como json os dados que recebo
  );

  constructor(private http: HttpClient) {}

  getCriptoService(cripto: string) {
    return this.http.get(`${this.url}/criptos/${cripto}`, {
      headers: this.headers,
    });
  }
}
