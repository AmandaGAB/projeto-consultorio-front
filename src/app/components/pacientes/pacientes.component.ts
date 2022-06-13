import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { MensagensService } from 'src/app/services/mensagens.service';
import { TokenService } from 'src/app/services/token-storage.service';
import {Paciente} from "../../model/Paciente";
import {PacienteService} from "../../services/paciente.service";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes = Array<Paciente>();

  displayedColumns: string[] = [
    'nome', 'dataDeNascimento', 'cpf', 'telefone', 'email', 'sexo', 'endereco', 'opções'];

  constructor(private PacienteService: PacienteService, private roteador: Router,
              private mensagemService: MensagensService,
              private tokenService: TokenService) {

  }

  ngOnInit(): void {
    this.PacienteService.listar().subscribe(

      p => this.pacientes = p

    )

  }

  editar(paciente: Paciente): void {

    this.roteador.navigate(['pacientes/cadastrar', paciente.id])

  }

  remover(paciente: Paciente) : void{

    this.PacienteService.remover(Number(paciente.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.pacientes.findIndex(u => u.id === paciente.id)

        if(indexUsuarioParaRemover > -1) {

          this.pacientes.splice(indexUsuarioParaRemover, 1)
          this.mensagemService.success('Paciente removido com Sucesso!');


        }
        this.ngOnInit()
      },
      error=>{
        this.mensagemService.error("Não é possivel remover pacientes com consultas cadastradas")
        this.ngOnInit()
      }

    )

  }
  logout(): void {
    this.roteador.navigate([''])
    this.tokenService.removeToken();
    this.mensagemService.error('Você saiu da sessão!');
  }
}
