import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Modulo para requisições http (restFull)
import { environment } from 'src/environments/environment';
import { Cripto } from 'src/app/shared/header/interfaces/cripto.interface';

@Injectable({ providedIn: 'root' })
export class CriptoService {
  url = environment.appUrl;
  headers = new HttpHeaders(
    { 'Content-Type': 'application/json' } // Passando como json os dados que recebo
  );

  constructor(private http: HttpClient) {}

  getCriptoService(cripto: string) {
    return this.http.get<Cripto>(`${this.url}/criptos/${cripto}`, {
      headers: this.headers,
    });
  }

  setFavoriteCripto(id: string, favorite: boolean) {
    const body = { isFavorite: favorite };
    return this.http.patch(`${this.url}/criptos/${id}`, body, {
      headers: this.headers,
    });
  }
}
