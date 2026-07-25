import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editais } from './editais';

describe('Editais', () => {
  let component: Editais;
  let fixture: ComponentFixture<Editais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editais],
    }).compileComponents();

    fixture = TestBed.createComponent(Editais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
