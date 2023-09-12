import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.less'],
  // standalone: true,
  // imports: [MatGridListModule, NgFor],
  encapsulation: ViewEncapsulation.None,
})
export class GoogleMapComponent {
  constructor(private _formBuilder: FormBuilder) {}

  options: google.maps.MapOptions = {
    center: { lat: 31.62886551816489, lng: -7.990517208395882 },
    zoom: 10,
    disableDefaultUI: true,
  };
  tiles: Tile[] = [
    { text: 'Tile 1', cols: 8, rows: 1, border: '3px double purple' },
    { text: 'Tile 2', cols: 4, rows: 1, border: '3px double red' },
  ];

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
}
