import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Observable, throwError } from 'rxjs';
import { Credenciais } from '../model/Credentials';
import { LocalUser } from '../model/LocalUser';
import { StorageService } from './storage.service';
import { TokenService } from './token-storage.service';
import {catchError, tap} from 'rxjs/operators';

const OAUTH_CLIENT = 'myappname123'
const OAUTH_SECRET = 'myappsecret123'
const API_URL = 'https://hml-projeto-deps.herokuapp.com/oauth/token'
const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic '+ btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '';

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Um erro aconteceu:', error.error.message);
    } else {
      console.error(
          `Backend retornou o código ${error.status}, ` +
          `corpo da mensagem: ${error.error}`);
    }
    return throwError(
        'Alguma coisa aconteceu. Por favor, tente novamente.');
  }

  private static log(message: string): any {
    console.log(message);
  }

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  login(creds: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
        .set('username', creds.username)
        .set('password', creds.password)
        .set('grant_type', 'password')
        // .set('scope', 'read write');

    return this.http.post<any>(API_URL, body, HTTP_OPTIONS)
        .pipe(
            tap(res => {
              this.tokenService.saveToken(res.access_token);
              this.tokenService.saveRefreshToken(res.refresh_token);
            }),
            catchError(AuthService.handleError)
        );
  }

  refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
        .set('refresh_token', refreshData.refresh_token)
        .set('grant_type', 'refresh_token');
    return this.http.post<any>(API_URL, body, HTTP_OPTIONS)
        .pipe(
            tap(res => {
              this.tokenService.saveToken(res.access_token);
              this.tokenService.saveRefreshToken(res.refresh_token);
            }),
            catchError(AuthService.handleError)
        );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }

  // register(data: any): Observable<any> {
  //   return this.http.post<any>(API_URL, data)
  //       .pipe(
  //           tap(_ => AuthService.log('register')),
  //           catchError(AuthService.handleError)
  //       );
  // }
  //
  // secured(): Observable<any> {
  //   return this.http.get<any>(API_URL + 'secret')
  //       .pipe(catchError(AuthService.handleError));
  // }
}
