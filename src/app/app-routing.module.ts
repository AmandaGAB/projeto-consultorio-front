import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MedicosComponent} from "./components/medicos/medicos.component";
import {CadastrarMedicoComponent} from "./components/cadastrar-medico/cadastrar-medico.component";
import {CadastrarPacienteComponent} from "./components/cadastrar-paciente/cadastrar-paciente.component";
import {PacientesComponent} from "./components/pacientes/pacientes.component";
import {CadastrarConsultaComponent} from "./components/cadastrar-consulta/cadastrar-consulta.component";
import {ConsultasComponent} from "./components/consultas/consultas.component";
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';
const appRoutes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'medicos', component: MedicosComponent, canActivate:[AuthGuardService]},
  {path: 'medicos/cadastrar/:id', component: CadastrarMedicoComponent, canActivate:[AuthGuardService]},
  {path: 'cadastrarMedicos', component: CadastrarMedicoComponent, canActivate:[AuthGuardService]},
  {path: 'pacientes/cadastrar/:id', component: CadastrarPacienteComponent, canActivate:[AuthGuardService]},
  {path: 'cadastrarPacientes', component: CadastrarPacienteComponent, canActivate:[AuthGuardService]},
  {path: 'pacientes', component: PacientesComponent, canActivate:[AuthGuardService]},
  {path: 'consultas/cadastrar/:id', component: CadastrarConsultaComponent, canActivate:[AuthGuardService]},
  {path: 'cadastrarConsultas', component: CadastrarConsultaComponent, canActivate:[AuthGuardService]},
  {path: 'consultas', component: ConsultasComponent, canActivate:[AuthGuardService]},
  {path: 'usuarios/cadastrar/:id', component: CadastrarUsuarioComponent, canActivate:[AuthGuardService]},
  {path: 'cadastrarUsuarios', component: CadastrarUsuarioComponent, canActivate:[AuthGuardService]},
  {path: 'usuarios', component: UsuariosComponent},
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
