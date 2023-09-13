import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GoogleMap } from '@angular/google-maps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  private readonly _jsonURL = 'assets/villages.json';
  markers: any[] = [];
  apiLoaded: Observable<boolean> = new Observable();

  options: google.maps.MapOptions = {
    center: { lat: 31.62886551816489, lng: -7.990517208395882 },
    zoom: 10,
    disableDefaultUI: true,
  };

  ngOnInit() {
    this.apiLoaded = this.httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=' +
          environment.MAPS_API_KEY,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );

    this.getJSON()
      .pipe(
        map((x) => {
          x.map((element: any) => {
            element['position'] = {
              lat: element.coordinates[0],
              lng: element.coordinates[1],
            };
          });
          return x;
        })
      )
      .subscribe((data) => {
        this.markers = data;
      });
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get(this._jsonURL);
  }
}
