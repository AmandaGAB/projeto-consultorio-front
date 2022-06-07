import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MedicosComponent} from "./components/medicos/medicos.component";
import {CadastrarMedicoComponent} from "./components/cadastrar-medico/cadastrar-medico.component";
import {CadastrarPacienteComponent} from "./components/cadastrar-paciente/cadastrar-paciente.component";
import {PacientesComponent} from "./components/pacientes/pacientes.component";
import {CadastrarConsultaComponent} from "./components/cadastrar-consulta/cadastrar-consulta.component";
import {ConsultasComponent} from "./components/consultas/consultas.component";

const routes: Routes = [
  {path: 'medicos', component: MedicosComponent},
  {path: 'medicos/cadastrar/:id', component: CadastrarMedicoComponent},
  {path: 'cadastrarMedicos', component: CadastrarMedicoComponent},
  {path: 'pacientes/cadastrar/:id', component: CadastrarPacienteComponent},
  {path: 'cadastrarPacientes', component: CadastrarPacienteComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'consultas/cadastrar/:id', component: CadastrarConsultaComponent},
  {path: 'cadastrarConsultas', component: CadastrarConsultaComponent},
  {path: 'consultas', component: ConsultasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
