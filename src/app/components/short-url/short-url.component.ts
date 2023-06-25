import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {

  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;

  constructor(private _shortUrlService: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
  }

  procesarUrl() {
    this.urlProcesada = false;

    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {
      //se le asigna el link de la api(data.link) a la variable urlshort para mostrarla en el html
      this.urlShort = data.link;
      this.urlProcesada = true;
    });

  }

}
