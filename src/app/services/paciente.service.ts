import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medico} from "../model/Medico";
import {Paciente} from "../model/Paciente";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  URL_PACIENTES = 'http://localhost:8080/pacientes';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.URL_PACIENTES);
  }

  inserir(paciente: Paciente): Observable<Paciente>{
    return this.httpClient.post<Paciente>(this.URL_PACIENTES, paciente)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Paciente>(`${this.URL_PACIENTES}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.URL_PACIENTES}/${id}`)
  }

  atualizar(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.put<Paciente>(`${this.URL_PACIENTES}/${paciente.id}`, paciente);

  }
}
