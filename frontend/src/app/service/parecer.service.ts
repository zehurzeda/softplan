import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParecerModel } from '../model/parecer.model';
import { ParecerDtoModel } from '../model/parecer-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ParecerService {
  private route: string;

  constructor(private http: HttpClient) {
    this.route = `${environment.URL_SERVER_API}/parecer`;
  }

  getAllByParecerProcessoId(idUsuarioParecerProcesso: number): Observable<ParecerDtoModel[]> {
    return this.http.get<ParecerDtoModel[]>(`${this.route}/${idUsuarioParecerProcesso}`);
  }

  salvarParecer(idUsuarioParecerProcesso: number, parecer: ParecerModel): Observable<ParecerModel>{
    return this.http.post<ParecerModel>(`${this.route}/${idUsuarioParecerProcesso}`, parecer);
  }
}
