import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwatchPickerComponent } from './swatch-picker.component';

describe('SwatchPickerComponent', () => {
  let component: SwatchPickerComponent;
  let fixture: ComponentFixture<SwatchPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwatchPickerComponent]
    });
    fixture = TestBed.createComponent(SwatchPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
