import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_USUARIOS = 'https://hml-projeto-deps.herokuapp.com/usuarios';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  inserir(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`)
  }
  pesquisarPorUsername(username: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/username/${username}`)
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);

  }
}
