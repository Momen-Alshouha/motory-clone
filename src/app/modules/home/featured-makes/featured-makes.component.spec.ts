import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMakesComponent } from './featured-makes.component';

describe('FeaturedMakesComponent', () => {
  let component: FeaturedMakesComponent;
  let fixture: ComponentFixture<FeaturedMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedMakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedMakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
