import { Component } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {

  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;

  constructor() {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
  }

  procesarUrl() {
    console.log(this.nombreUrl)
  }

}
