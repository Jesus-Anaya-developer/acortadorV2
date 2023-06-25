import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  private URL: string;
  private TOKEN: string;

  constructor() {
    this.URL = "https://api-ssl.bitly.com/v4/shorten";
    this.TOKEN = "b49b991d3d226435b5975d37ad3de5570fbd7f45";
  }
}
