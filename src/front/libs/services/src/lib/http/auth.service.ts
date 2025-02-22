import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, take } from 'rxjs';
import { environment } from '../configuration';
import { JwtPayload, LoginModel } from '@front/data';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authenticated$ = new Subject<void>();
  apiBase: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.apiBase = `${environment.apiBase}/autenticacao`;
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  login(model: LoginModel): Observable<any> {
    return this.http.post(`${this.apiBase}/login`, model, { responseType: 'json' });
  }

  public isLoggedIn() {
    return !!this.getToken();
  }

  decodeToken(): JwtPayload  | null{
    const token = this.getToken();

    if(token) {
      return jwtDecode(token);
    }

    return null;
  }

  public getUserRole(): string | undefined {
    return this.decodeToken()?.role;
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public getEmail(): string | undefined {
    return this.decodeToken()?.email;
  }

  public getNome(): string | undefined {
    return this.decodeToken()?.nome;
  }

  public setUrl(url: string) {
    try {
      localStorage.setItem('url', url);
    } catch (ex) {
      console.log(ex);
    }
  }

  public getUrl(): string {
    const url = localStorage.getItem('url');
    return url ? url.toString() : '';
  }

  getPerfil(): string {
    const url = localStorage.getItem('perfil');
    return url ? url.toString() : '';
  }

  public getId(): string {
    // const user = this.getUsuarioToken();

    // if (user)
    //   return this.getUsuarioToken().id;

    return '';
  }

  public setPerfil(perfil: string): void {
    localStorage.setItem('perfil', perfil);
  }
}
