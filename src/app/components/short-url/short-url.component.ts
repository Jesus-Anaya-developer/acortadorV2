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
  loading: boolean;
  mostrarError: boolean;
  textError: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
    this.mostrarError = false;
    this.textError = '';
  }

  procesarUrl() {
    //procesar si la url es vacia
    if (this.nombreUrl == '') {
      this.error('Por favor ingrese una URL.');
      return
    }

    this.urlProcesada = false;
    this.loading = true;

    //se crea pra que se pueda ver el spinner
    setTimeout(() => {
      this.obtenerUrlShort();
    }, 3000);
  }

  obtenerUrlShort() {

    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {
      this.loading = false;
      //se le asigna el link de la api(data.link) a la variable urlshort para mostrarla en el html
      this.urlShort = data.link;
      this.urlProcesada = true;
    }, error => {

      this.loading = false;
      //valida si el error que sale es producida por una url invalida
      if (error.error.description === 'The value provided is invalid.') {
        this.error('La URL ingresada es invalida');
      }
    }
    );
  }

  error(valor: string) {
    //valor contiene el mensaje de alerta que mostraremos
    this.mostrarError = true;
    this.textError = valor;

    //Mostramos error unos segundos
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
    return
  }

}
