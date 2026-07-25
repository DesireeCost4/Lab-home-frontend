import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardButtonsComponent } from './card-buttons/card-buttons'; 

import { CardHorario } from './card-horario/card-horario';
import { CardStatus } from './card-status/card-status';
import { CardAtividades } from './card-atividades/card-atividades';
import { CardEmail } from './card-email/card-email';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardButtonsComponent, CardHorario, CardStatus, CardAtividades,CardEmail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab-control-front');
}
