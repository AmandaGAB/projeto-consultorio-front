import {Especialidade} from '../model/Especialidade';
import {Consulta} from '../model/Consulta';

export class Medico{
  id!: number;
  crm!:number
  nome!:string;
  especialidade!: Especialidade;
  telefone!:string;
  email!:string;
  consulta!: Consulta
}
