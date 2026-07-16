import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAtividades } from './card-atividades';

describe('CardAtividades', () => {
  let component: CardAtividades;
  let fixture: ComponentFixture<CardAtividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAtividades],
    }).compileComponents();

    fixture = TestBed.createComponent(CardAtividades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
