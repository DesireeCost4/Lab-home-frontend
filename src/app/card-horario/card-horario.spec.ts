import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHorario } from './card-horario';

describe('CardHorario', () => {
  let component: CardHorario;
  let fixture: ComponentFixture<CardHorario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHorario],
    }).compileComponents();

    fixture = TestBed.createComponent(CardHorario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
