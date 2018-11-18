import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RoleModel } from './../model/role.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private route: string;

  constructor(private http: HttpClient) {
    this.route = `${environment.URL_SERVER_API}/role`;
  }

  getAllRoles(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(`${this.route}`).pipe(retry(3));
  }
}
