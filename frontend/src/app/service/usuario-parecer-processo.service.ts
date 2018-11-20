import {  UsuarioParecerProcessoModel } from './../model/usuario-parecer-service.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioParecerProcessoService {

  private route: string;

  constructor(private http: HttpClient) {
    this.route = `${environment.URL_SERVER_API}/parecer-processo`;
  }

  getAllByIdProcesso(idProcesso): Observable<UsuarioParecerProcessoModel[]> {
    return this.http.get<UsuarioParecerProcessoModel[]>(`${this.route}/${idProcesso}`);
  }

  getAllPendentesByUsuarioLogado(): Observable<UsuarioParecerProcessoModel[]> {
    return this.http.get<UsuarioParecerProcessoModel[]>(`${this.route}`);
  }

  salvar(model :UsuarioParecerProcessoModel) {
    return this.http.post<UsuarioParecerProcessoModel>(this.route, model);
  }

  vincularUsuarioProcesso(idProcesso: number, usuarios: UsuarioModel[]): Observable<UsuarioParecerProcessoModel[]> {
    return this.http.post<UsuarioParecerProcessoModel[]>(`${this.route}/${idProcesso}/vincular`, usuarios);
  }

  desvincularUsuariosProcesso(idProcesso: number, usuariosProcesso: UsuarioParecerProcessoModel[]): Observable<any> {
    return this.http.post(`${this.route}/${idProcesso}/desvincular`, usuariosProcesso);
  }

}
