import { Component, Inject } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: any;
  config: any;
  totalNumber: number;
  pno = 1;
  perPage=20;

  constructor(@Inject(HttpServiceService) private httpService) {
    this.httpService.getData().subscribe(data => {
      this.countries = data;
      this.totalNumber = Object.values(data).length
    });
  }
}
