import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = "https://api-ssl.bitly.com/v4/shorten";

  }

  getUrlShort(nombreUrl: string): Observable<any> {
    //El body son las opciones que tiene la api
    const body = {
      long_url: nombreUrl
    };

    //se crea el header para mandar el token de la api
    //Authorization: 'Bearer: es del protocolo POST de las APIs
    //const tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + this.TOKEN });

    //el header y el token se pasar por el interceptor
    return this.http.post(this.URL, body);
  }
}
