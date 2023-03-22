import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationGroupComponent } from './validation-group.component';

describe('ValidationGroupComponent', () => {
  let component: ValidationGroupComponent;
  let fixture: ComponentFixture<ValidationGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
