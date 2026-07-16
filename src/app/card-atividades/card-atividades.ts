import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Atividade {
  titulo: string;
  curso: 'Telemática' | 'Engenharia de Software' | 'Gestão de TI';
  prazo: string;
  progresso: number; // Porcentagem (0 a 100)
  prioridade: 'alta' | 'media' | 'baixa';
}

@Component({
  selector: 'app-card-atividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-atividades.html',
  styleUrl: './card-atividades.css'
})
export class CardAtividades {
  atividades: Atividade[] = [
    {
      titulo: 'Configuração do ESP32 via MQTT (Lab 4)',
      curso: 'Telemática',
      prazo: 'Em 2 dias',
      progresso: 70,
      prioridade: 'alta'
    },
    {
      titulo: 'Modelagem do Banco de Dados (Projeto Integrador)',
      curso: 'Engenharia de Software',
      prazo: 'Em 5 dias',
      progresso: 40,
      prioridade: 'media'
    },
    {
      titulo: 'Relatório de Alinhamento Estratégico (ITIL/COBIT)',
      curso: 'Gestão de TI',
      prazo: 'Próxima segunda',
      progresso: 15,
      prioridade: 'baixa'
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

  getBarColor(prioridade: string): string {
    switch (prioridade) {
      case 'alta': return '#ff4a4a'; // Vermelho Neon
      case 'media': return '#facc15'; // Amarelo Neon
      case 'baixa': return '#00ff88'; // Verde Neon
      default: return '#00e5ff';
    }
  }
}