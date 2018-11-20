import { UsuarioModel } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export enum Roles {
  ADMIN = 1,
  TRIADOR = 2,
  FINALIZADOR = 3
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private route: string;

  private usuariosSource = new Subject<any>();

  usuariosAtualizados$ = this.usuariosSource.asObservable();

  constructor(private http: HttpClient) {
    this.route = `${environment.URL_SERVER_API}/usuario`;
  }

  getAllUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.route}`);
  }

  getAllUsuariosFinalizadoresNaoVinculadosAoProcesso(idProcesso: number): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${this.route}/role/${Roles[3]}`, {params: {
      idProcesso: idProcesso ? idProcesso.toString() : ''
    }})
  }

  getUsuarioById(id): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.route}/${id}`);
  }

  salvarUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http
      .post(this.route, usuario)
      .pipe(map((res: UsuarioModel) => res));
  }

  deletarUsuario(id): Observable<any> {
    return this.http.delete(`${this.route}/${id}`);
  }

  alterarUsuario(id: number, usuario: UsuarioModel): Observable<any> {
    return this.http.put(`${this.route}/${id}`, usuario);
  }

  atualizarUsuarios() {
    this.usuariosSource.next();
  }

  getRolesUsuarioLogado(): Observable<string[]> {
    return this.http.get<string[]>(`${this.route}/roles`);
  }
}
