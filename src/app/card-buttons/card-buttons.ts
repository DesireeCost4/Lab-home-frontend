import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-buttons.html',
  styleUrl: './card-buttons.css'
})
export class CardButtonsComponent {
  luzLigada = false;
  ventiladorLigado = false;

  alterarLuz(estado: boolean) {
    this.luzLigada = estado;
    console.log(`Luz alterada para: ${estado ? 'LIGADA' : 'DESLIGADA'}`);
    // Futura integração HTTP POST para http://<IP_ESP32>/api/dispositivos/luz
  }

  alterarVentilador(estado: boolean) {
    this.ventiladorLigado = estado;
    console.log(`Ventilador alterado para: ${estado ? 'LIGADO' : 'DESLIGADO'}`);
    // Futura integração HTTP POST para http://<IP_ESP32>/api/dispositivos/ventilador
  }

  executarModoDormir() {
    this.luzLigada = false;
    this.ventiladorLigado = true;
    console.log('Rotina "Modo Dormir" disparada!');
    // Futura integração HTTP POST para http://<IP_ESP32>/api/rotinas/modo_dormir
  }
}