import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTileComponent } from './data-tile.component';

describe('DataTileComponent', () => {
  let component: DataTileComponent;
  let fixture: ComponentFixture<DataTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
