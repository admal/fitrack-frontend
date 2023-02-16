import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarHeaderTileComponent } from './calendar-header-tile.component';

describe('CalendarHeaderTileComponent', () => {
  let component: CalendarHeaderTileComponent;
  let fixture: ComponentFixture<CalendarHeaderTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarHeaderTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarHeaderTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
