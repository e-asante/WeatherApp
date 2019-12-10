import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForTodayComponent } from './weather-for-today.component';

describe('WeatherForTodayComponent', () => {
  let component: WeatherForTodayComponent;
  let fixture: ComponentFixture<WeatherForTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
