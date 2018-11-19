import { Observable, Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessoModel } from '../model/processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  private route: string;

  private processosSource = new Subject<any>();

  processosAtualizados$ = this.processosSource.asObservable();

  constructor(private http: HttpClient) {
    this.route = `${environment.URL_SERVER_API}/processo`;
  }

  getAllProcessos(): Observable<ProcessoModel[]> {
    return this.http.get<ProcessoModel[]>(`${this.route}`);
  }

  getProcessoById(id: number): Observable<ProcessoModel> {
    return this.http.get<ProcessoModel>(`${this.route}/${id}`);
  }

  salvarProcesso(usuario: ProcessoModel): Observable<ProcessoModel> {
    return this.http.post<ProcessoModel>(this.route, usuario);
  }

  atualizarProcessos() {
    this.processosSource.next();
  }
}
