import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medico} from "../model/Medico";

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  URL_MEDICOS = 'http://localhost:8080/medicos';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.URL_MEDICOS);
  }

  inserir(medico: Medico): Observable<Medico>{
    return this.httpClient.post<Medico>(this.URL_MEDICOS, medico)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Medico>(`${this.URL_MEDICOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Medico> {
    return this.httpClient.get<Medico>(`${this.URL_MEDICOS}/${id}`)
  }

  atualizar(medico: Medico): Observable<Medico> {
    return this.httpClient.put<Medico>(`${this.URL_MEDICOS}/${medico.id}`, medico);

  }
}
