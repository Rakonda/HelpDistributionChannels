import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent {
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCSJ12LIIUgGOt4JxOlOZc3cUxZkisn1nc',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  apiLoaded: Observable<boolean> = new Observable();

  options: google.maps.MapOptions = {
    center: { lat: 31.62886551816489, lng: -7.990517208395882 },
    zoom: 10,
    disableDefaultUI: true,
  };
}
