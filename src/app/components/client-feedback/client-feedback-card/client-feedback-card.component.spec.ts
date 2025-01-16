import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeedbackCardComponent } from './client-feedback-card.component';

describe('ClientFeedbackCardComponent', () => {
  let component: ClientFeedbackCardComponent;
  let fixture: ComponentFixture<ClientFeedbackCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFeedbackCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFeedbackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
