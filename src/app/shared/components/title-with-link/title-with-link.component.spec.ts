import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithLinkComponent } from './title-with-link.component';

describe('TitleWithLinkComponent', () => {
  let component: TitleWithLinkComponent;
  let fixture: ComponentFixture<TitleWithLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleWithLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleWithLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
