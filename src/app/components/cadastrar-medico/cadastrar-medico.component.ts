import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MedicoService} from "../../services/medico.service";
import {Medico} from "../../model/Medico";
import {Especialidade} from "../../model/Especialidade";
import {MensagensService} from "../../services/mensagens.service";
import { Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.scss']
})
export class CadastrarMedicoComponent implements OnInit {
  medico: Medico = new Medico();
  operacaoCadastro = true;
  conditionalOperator = Especialidade;
  especialidades: string[];

  constructor(private  MedicoService: MedicoService, private rotaAtual: ActivatedRoute, private roteador: Router,
              private mensagemService: MensagensService, private tokenService: TokenService) {
    this.medico = new Medico();
    this.especialidades = Object.keys(this.conditionalOperator);
    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.MedicoService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.medico = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirMedico(): void{

    if(this.medico.id) {
      this.MedicoService.atualizar(this.medico).subscribe(medico => {
        this.mensagemService.success('Dados atualizados com Sucesso!');

        this.roteador.navigate(['medicos']);
      })
      

    } else {
      this.MedicoService.inserir(this.medico).subscribe(medico => {
        this.mensagemService.success('Médico cadastrado com Sucesso!');
        this.roteador.navigate(['medicos']);
      })
      this.medico = new Medico();

    }


  }
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'Você deve inserir um email válido';
  //   }
  //
  //   return this.email.hasError('email') ? 'Não é um email válido' : '';
  // }
  logout(): void {
    this.roteador.navigate([''])
    this.tokenService.removeToken();
    this.mensagemService.error('Você saiu da sessão!');
  }
}
