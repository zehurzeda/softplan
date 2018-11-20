import { environment } from 'src/environments/environment';
import { tap, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AuthGroup } from '../model/authorization.types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  private setSession(authResult) {
    const token = authResult.token;
    const payload: any = jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('roles', payload.scopes);
  }

  login(email: string, senha: string) {
    return this.http
      .post(`${environment.URL_SERVER_API}/login`, {
        email: email,
        senha: senha
      })
      .pipe(
        tap(response => {
          this.setSession(response);
        }),
        shareReplay()
      );
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get roles(): string[] {
    return localStorage.getItem('roles').toString().split(',');
  }
 
  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  hasPermission(authGroup: AuthGroup) {
    if (this.roles && this.roles.find(role => {return role === authGroup})) {
      return true;
    }
    return false;
  }
}
