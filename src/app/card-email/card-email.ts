import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NotificacaoService, Notificacao } from '../services/notificacao.service';

@Component({
  selector: 'app-card-email',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './card-email.html',
  styleUrl: './card-email.css'
})
export class CardEmail implements OnInit {

  emailsExibidos: Notificacao[] = [];
  carregando: boolean = true;
  sincronizando: boolean = false; // 控制 o estado do botão de atualização

  constructor(
    private notificacaoService: NotificacaoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarEmails();
  }

  carregarEmails(): void {
    this.notificacaoService.getNotificacoes().subscribe({
      next: (dados: Notificacao[]) => {
        this.processarEmailsPorDominio(dados);
        this.carregando = false;
        this.sincronizando = false;
        this.cdr.detectChanges();
      },
      error: (erro: any) => {
        console.error('❌ Erro ao carregar e-mails:', erro);
        this.carregando = false;
        this.sincronizando = false;
        this.cdr.detectChanges();
      }
    });
  }

  // Função disparada ao clicar no botão de atualizar
  sincronizar(): void {
    if (this.sincronizando) return;

    this.sincronizando = true;
    this.cdr.detectChanges();

    this.notificacaoService.sincronizarEmails().subscribe({
      next: () => {
        console.log('🔄 Sincronização IMAP concluída! Atualizando lista...');
        this.carregarEmails(); // Recarrega os dados do banco logo após sincronizar
      },
      error: (erro: any) => {
        console.error('❌ Erro ao sincronizar e-mails:', erro);
        this.sincronizando = false;
        this.cdr.detectChanges();
      }
    });
  }

  private processarEmailsPorDominio(dados: Notificacao[]): void {
    const mapa = new Map<string, Notificacao[]>();

    dados.forEach(item => {
      const dominio = item.remetente && item.remetente.includes('@')
        ? item.remetente.split('@')[1].toLowerCase()
        : 'geral';

      if (!mapa.has(dominio)) {
        mapa.set(dominio, []);
      }

      if (mapa.get(dominio)!.length < 4) {
        mapa.get(dominio)!.push(item);
      }
    });

    const resultado: Notificacao[] = [];
    mapa.forEach(lista => resultado.push(...lista));

    this.emailsExibidos = resultado;
  }

  getContaTag(item: any): string {
    const emailRef = (item.destinatario || item.remetente || '').toLowerCase();
    
    if (emailRef.includes('ifpb') || emailRef.includes('academico')) {
      return '#tec';
    }
    return '#sup';
  }

  getBadgeClass(categoria: string): string {
    if (!categoria) return 'badge-default';
    const cat = categoria.toLowerCase();
    
    if (cat.includes('edital') || cat.includes('urgente')) return 'badge-urgente';
    if (cat.includes('acadêmico') || cat.includes('academico') || cat.includes('aula')) return 'badge-academico';
    if (cat.includes('comunicado') || cat.includes('aviso')) return 'badge-comunicado';
    
    return 'badge-default';
  }
}