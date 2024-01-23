import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionNewCarsComponent } from './suggestion-new-cars.component';

describe('SuggestionNewCarsComponent', () => {
  let component: SuggestionNewCarsComponent;
  let fixture: ComponentFixture<SuggestionNewCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggestionNewCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestionNewCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
