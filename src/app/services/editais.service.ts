import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Edital {
  id?: number;
  titulo: string;
  link: string;
  origem: string;
  categoria?: string;
  data_publicacao: string;
}

export interface SyncResponse {
  sucesso: boolean;
  mensagem: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class EditaisService {
  private readonly API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Buscar editais salvos no banco
  getEditais(): Observable<Edital[]> {
    return this.http.get<Edital[]>(`${this.API_URL}/editais`);
  }

  // Disparar sincronização com o IFPB
  sincronizarEditais(): Observable<SyncResponse> {
    return this.http.post<SyncResponse>(`${this.API_URL}/sync/editais-ifpb`, {});
  }
}