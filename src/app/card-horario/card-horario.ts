import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Aula {
  materia: string;
  curso: 'Telemática' | 'Engenharia de Software' | 'Gestão de TI';
  professor: string;
  horario: string;
  sala: string;
  status: 'breve' | 'agora' | 'concluida';
}

@Component({
  selector: 'app-card-horario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-horario.html',
  styleUrl: './card-horario.css',
})
export class CardHorario {
  aulas: Aula[] = [
    {
      materia: 'Redes de Computadores I',
      curso: 'Telemática',
      professor: 'Prof. André Silva',
      horario: '18:30 - 20:10',
      sala: 'Bloco B - Lab 4',
      status: 'agora'
    },
    {
      materia: 'Arquitetura de Software',
      curso: 'Engenharia de Software',
      professor: 'Profa. Ana Beatriz',
      horario: '20:20 - 22:00',
      sala: 'Bloco A - Sala 102',
      status: 'breve'
    },
    {
      materia: 'Governança de TI (COBIT)',
      curso: 'Gestão de TI',
      professor: 'Prof. Carlos Souza',
      horario: 'Amanhã - 18:30',
      sala: 'Online / Teams',
      status: 'breve'
    }
  ];

  getBadgeClass(curso: string): string {
    switch (curso) {
      case 'Telemática': return 'badge-telematica';
      case 'Engenharia de Software': return 'badge-software';
      case 'Gestão de TI': return 'badge-gestao';
      default: return '';
    }
  }
}

