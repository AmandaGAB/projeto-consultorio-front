import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Paciente} from "../model/Paciente";
import {Observable} from "rxjs";
import {Consulta} from "../model/Consulta";
import {Medico} from "../model/Medico";

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  URL_CONSULTAS = 'http://localhost:8080/consultas';
  constructor(private  httpClient: HttpClient) {

  }
  listar(): Observable<Consulta[]>{
    return this.httpClient.get<Consulta[]>(this.URL_CONSULTAS);
  }
  inserir(consulta: Consulta): Observable<Consulta>{
    return this.httpClient.post<Consulta>(this.URL_CONSULTAS, consulta)
  }

  pesquisarPorId(id: number): Observable<Consulta> {
    return this.httpClient.get<Consulta>(`${this.URL_CONSULTAS}/${id}`)
  }
  listarConsultasPorMedico(id: number): Observable<Consulta[]>{
    return this.httpClient.get<Consulta[]>(`${this.URL_CONSULTAS}/medico/${id}`)
  }
  listarConsultasPorPaciente(id: number): Observable<Consulta[]>{
    return this.httpClient.get<Consulta[]>(`${this.URL_CONSULTAS}/paciente/${id}`)
  }
  atualizar(consulta: Consulta): Observable<Consulta> {
    return this.httpClient.put<Consulta>(`${this.URL_CONSULTAS}/${consulta.idConsulta}`, consulta);

  }
  remover(id: number): Observable<object> {
    return this.httpClient.delete<Consulta>(`${this.URL_CONSULTAS}/${id}`);
  }
 

}
