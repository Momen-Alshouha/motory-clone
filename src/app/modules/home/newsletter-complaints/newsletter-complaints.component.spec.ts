import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterComplaintsComponent } from './newsletter-complaints.component';

describe('NewsletterComplaintsComponent', () => {
  let component: NewsletterComplaintsComponent;
  let fixture: ComponentFixture<NewsletterComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsletterComplaintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsletterComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
