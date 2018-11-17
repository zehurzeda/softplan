import { UsuarioModel } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

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

  getAllUsuarios(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${this.route}`).pipe(retry(3))
  }

  getUsuarioById(id): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.route}/${id}`).pipe(retry(3));
  }

  salvarUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post(this.route, usuario).pipe(
      map((res: UsuarioModel) => res),
      retry(3)
    );
  }

  deletarUsuario(id): Observable<any> {
    return this.http.delete(`${this.route}/${id}`).pipe(retry(3));
  }

  alterarUsuario(id: number, usuario: UsuarioModel): Observable<any> {
    return this.http.put(`${this.route}/${id}`, usuario).pipe(retry(3));
  }

  atualizarUsuarios() {
    this.usuariosSource.next();
  }
}
