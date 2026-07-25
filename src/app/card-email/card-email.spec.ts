import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmail } from './card-email';

describe('CardEmail', () => {
  let component: CardEmail;
  let fixture: ComponentFixture<CardEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEmail],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
