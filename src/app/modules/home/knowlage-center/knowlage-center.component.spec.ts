import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowlageCenterComponent } from './knowlage-center.component';

describe('KnowlageCenterComponent', () => {
  let component: KnowlageCenterComponent;
  let fixture: ComponentFixture<KnowlageCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnowlageCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowlageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
