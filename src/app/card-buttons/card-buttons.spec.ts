import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtons } from './card-buttons';

describe('CardButtons', () => {
  let component: CardButtons;
  let fixture: ComponentFixture<CardButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardButtons],
    }).compileComponents();

    fixture = TestBed.createComponent(CardButtons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
