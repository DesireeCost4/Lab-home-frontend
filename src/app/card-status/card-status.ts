import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dispositivo {
  nome: string;
  tipo: 'ESP32' | 'PC' | 'Sensor' | 'Atuador';
  status: 'ONLINE' | 'OFFLINE' | 'LIGADO' | 'DESLIGADO';
  detalhe: string;
}

@Component({
  selector: 'app-card-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-status.html',
  styleUrl: './card-status.css'
})
export class CardStatus {
  dispositivos: Dispositivo[] = [
    {
      nome: 'Módulo ESP32',
      tipo: 'ESP32',
      status: 'ONLINE',
      detalhe: '192.168.1.100'
    },
    {
      nome: 'PC - Desktop',
      tipo: 'PC',
      status: 'OFFLINE',
      detalhe: 'Suporta Wake-on-LAN'
    },
    {
      nome: 'Interruptor Luz',
      tipo: 'Atuador',
      status: 'LIGADO',
      detalhe: 'GPIO 22'
    },
    {
      nome: 'Ventilador',
      tipo: 'Atuador',
      status: 'ONLINE',
      detalhe: 'GPIO 15'
    }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'ONLINE':
      case 'LIGADO':
        return 'status-active';
      case 'OFFLINE':
      case 'DESLIGADO':
        return 'status-inactive';
      default:
        return '';
    }
  }

  getIcon(tipo: string): string {
    switch (tipo) {
      case 'ESPC3': return '🛠️';
      case 'PC': return '💻';
      case 'Sensor': return '📡';
      case 'Atuador': return '🔌';
      default: return '⚙️';
    }
  }
}