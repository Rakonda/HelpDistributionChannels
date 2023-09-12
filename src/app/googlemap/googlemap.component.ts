import { Component, ViewEncapsulation } from '@angular/core';
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
  tiles: Tile[] = [
    { text: 'Tile 1', cols: 8, rows: 1, border: '3px double purple' },
    { text: 'Tile 2', cols: 4, rows: 1, border: '3px double red' },
  ];
}
