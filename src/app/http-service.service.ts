import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(@Inject(HttpClient) private http) { }
  getData() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
