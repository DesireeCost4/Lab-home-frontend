import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEmail } from '../card-email/card-email';

interface Aula {
  materia: string;
  curso: string;
  categoria: string;
  horario: string;
  local: string;
  professor: string;
  diaSemana: number;
}

@Component({
  selector: 'app-card-horario',
  standalone: true,
  imports: [CommonModule, CardEmail],
  templateUrl: './card-horario.html',
  styleUrls: ['./card-horario.css']
})
export class CardHorario implements OnInit {

  private todasAsAulas: Aula[] = [

    // SEGUNDA-FEIRA (diaSemana: 1)
    { materia: 'Cálculo', curso: 'MATEMÁTICA', categoria: 'calculo', horario: '13:00 - 14:40', local: 'Bloco B - Sala 102', professor: 'Prof. André Silva', diaSemana: 1 },
    { materia: 'TÓPICOS', curso: 'TELEMÁTICA', categoria: 'telematica', horario: '18:20 - 21:40', local: 'Bloco B - Lab 4', professor: 'Prof. Carlos Souza', diaSemana: 1 },

    // TERÇA-FEIRA (diaSemana: 2)
    { materia: 'TESTE DE SW', curso: 'Téc informática', categoria: 'informática', horario: '18:20 - 21:40', local: 'LABPROG 05', professor: 'DANYLLO WAGNER', diaSemana: 2 },


    // QUARTA-FEIRA (diaSemana: 3)
    { materia: 'Cálculo', curso: 'TELEMÁTICA', categoria: 'calculo', horario: '13:00 - 14:40', local: 'Bloco B - Sala 102', professor: 'ANDERSON COSTA', diaSemana: 3 },
    { materia: 'ELETRICIDADE', curso: 'TELEMÁTICA', categoria: 'eletricidade', horario: '14:40 - 18:00', local: 'Lab de Elétrica', professor: 'ELIAS FREIRE ', diaSemana: 3 },
    { materia: 'DESENV WEB II', curso: 'Téc informática', categoria: 'informática', horario: '18:20 - 20:00', local: 'Bloco B - Lab 4', professor: 'CESAR ROCHA', diaSemana: 3 },
    { materia: 'TÓPICOS', curso: 'Téc informática', categoria: 'informática', horario: '20:00 - 21:40', local: 'LABPROG 04', professor: 'NEWMARK HEINER', diaSemana: 3 },

    // QUINTA-FEIRA (diaSemana: 4)
    { materia: 'DESENV WEB II', curso: 'Téc informática', categoria: 'software', horario: '18:20 - 21:40', local: 'LABPROG 05', professor: 'CESAR ROCHA', diaSemana: 4 },

    // SEXTA-FEIRA (diaSemana: 5)
    { materia: 'ADS', curso: 'SISTEMAS', categoria: 'ads', horario: '18:20 - 20:50', local: 'Remoto', professor: 'xxxxx', diaSemana: 5 },

    // SÁBADO (diaSemana: 6)
    { materia: 'ADS', curso: 'SISTEMAS', categoria: 'ads', horario: '13:00 - 18:00', local: 'Remoto', professor: 'xxxxx', diaSemana: 6 }
  ];

  aulasDoDia: Aula[] = [];
  nomeDiaHoje: string = '';

  ngOnInit() {
    this.obterAulasDoDia();
  }

  obterAulasDoDia() {
    const hoje = new Date();
    const numeroDia = hoje.getDay();

    this.aulasDoDia = this.todasAsAulas.filter(aula => aula.diaSemana === numeroDia);

    const nomesDias = [
      'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
      'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
    this.nomeDiaHoje = nomesDias[numeroDia];
  }

  getBadgeClass(curso: string): string {
    switch (curso) {
      case 'TELEMÁTICA': return 'badge-telematica';
      case 'E. SOFTWARE': return 'badge-software';
      case 'MATEMÁTICA': return 'badge-matematica';
      case 'SISTEMAS': return 'badge-sistemas';
      case 'SAÚDE': return 'badge-saude';
      case 'TELETRÔNICA': return 'badge-eletronica';
      default: return '';
    }
  }
}