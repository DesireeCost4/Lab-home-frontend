import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Notificacao {
  id: number;
  titulo: string;
  remetente: string;
  categoria: string;
  conteudo: string;
  data_recebida: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  //url da api (por hora local)
  private apiUrl = 'http://localhost:3000/api/notificacoes';

  // Injeta o cliente HTTP do Angular
  constructor(private http: HttpClient) { }

  // Busca todas as notificações salvas no DB
  getNotificacoes(categoria?: string): Observable<Notificacao[]> {
    if (categoria) {
      return this.http.get<Notificacao[]>(`${this.apiUrl}?categoria=${categoria}`);
    }
    return this.http.get<Notificacao[]>(this.apiUrl);
  }
//btn para realizar nova verificação. 
  sincronizarEmails(): Observable<any> {
  return this.http.post('http://localhost:3000/api/sync/emails', {});
}


}

