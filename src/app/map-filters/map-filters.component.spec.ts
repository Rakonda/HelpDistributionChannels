import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFiltersComponent } from './map-filters.component';

describe('MapFiltersComponent', () => {
  let component: MapFiltersComponent;
  let fixture: ComponentFixture<MapFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapFiltersComponent]
    });
    fixture = TestBed.createComponent(MapFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
