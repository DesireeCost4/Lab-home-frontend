import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// 💡 Caminho corrigido para 1 nível acima (../) e nomes de tipos importados explicitamente
import { EditaisService, Edital, SyncResponse } from '../services/editais.service';

@Component({
  selector: 'app-editais',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editais.html',  
  styleUrl: './editais.css'     
})
export class EditaisComponent implements OnInit {
  editais: Edital[] = [];
  editaisFiltrados: Edital[] = [];
  termoBusca: string = '';
  
  carregando: boolean = false;
  sincronizando: boolean = false;
  mensagemFeed: string = '';

  constructor(private editaisService: EditaisService) {}

  ngOnInit(): void {
    this.carregarEditais();
  }

  carregarEditais(): void {
    this.carregando = true;
    this.editaisService.getEditais().subscribe({
      next: (dados: Edital[]) => { 
        this.editais = dados;
        this.filtrar();
        this.carregando = false;
      },
      error: (err: any) => {
        console.error('Erro ao buscar editais:', err);
        this.carregando = false;
      }
    });
  }

  sincronizar(): void {
    this.sincronizando = true;
    this.mensagemFeed = 'Varrendo portal do IFPB...';

    this.editaisService.sincronizarEditais().subscribe({
      next: (res: SyncResponse) => { 
        this.sincronizando = false;
        this.mensagemFeed = `Sincronizado! ${res.total} editais encontrados.`;
        this.carregarEditais();
      },
      error: (err: any) => {
        this.sincronizando = false;
        this.mensagemFeed = 'Falha ao sincronizar. Tente novamente.';
        console.error('Erro no sync:', err);
      }
    });
  }

  filtrar(): void {
    if (!this.termoBusca.trim()) {
      this.editaisFiltrados = this.editais;
      return;
    }

    const busca = this.termoBusca.toLowerCase();
    this.editaisFiltrados = this.editais.filter(e => 
      e.titulo.toLowerCase().includes(busca) || 
      (e.categoria && e.categoria.toLowerCase().includes(busca))
    );
  }
}