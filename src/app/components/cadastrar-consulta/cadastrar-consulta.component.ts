import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Consulta } from 'src/app/model/Consulta';
import {Especialidade} from "../../model/Especialidade";
import {Medico} from "../../model/Medico";
import {MedicoService} from "../../services/medico.service";
import {Paciente} from "../../model/Paciente";
import {PacienteService} from "../../services/paciente.service";
import {ConsultasService} from "../../services/consultas.service";
import {DatePipe, formatDate} from "@angular/common";
import {MAT_DATE_FORMATS} from "@angular/material/core";
import {MensagensService} from "../../services/mensagens.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.scss']
})
export class CadastrarConsultaComponent implements OnInit {
  consulta: Consulta = new Consulta();
  conditionalOperator = Array<Medico>();
  medicos = Array<Medico>();
  pacientes = Array<Paciente>();
  listaMedicos: any
  listaPacientes: any
  operacaoCadastro = true;
  constructor(private MedicoService: MedicoService, private rotaAtual: ActivatedRoute, private  PacienteService: PacienteService,
              private ConsultaService: ConsultasService, private mensagemService: MensagensService,
              private roteador: Router) {
                if(this.rotaAtual.snapshot.paramMap.has('id')) {
                  this.operacaoCadastro = false;
                  const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
                  this.ConsultaService.pesquisarPorId(idParaEdicao).subscribe(
                    usuarioRetornado => this.consulta = usuarioRetornado
                  );
                }
                
  }
  ngOnInit(): void {
  this.listaMedicos = this.MedicoService.listar().subscribe(
    p => this.medicos = p
  )
    this.listaPacientes = this.PacienteService.listar().subscribe(
      p => this.pacientes = p
    )
  }
  salvar(): void{
    if(this.consulta.idConsulta) {
      this.ConsultaService.atualizar(this.consulta).subscribe(consulta => {
        this.mensagemService.success('Dados atualizados com Sucesso!');
  
        this.roteador.navigate(['consultas']);
        
      },
      error =>{
        this.mensagemService.error('Não é possível atualizar os dados')
      })
    }
    else{
      
          this.ConsultaService.inserir(this.consulta).subscribe(consulta => {
            this.roteador.navigate(['consultas']);
            this.mensagemService.success('Consulta salva com Sucesso!')
          },
          () =>
          
          {
              return this.mensagemService.error('Não foi possível cadastrar a consulta. Verifique as informações!');
            },
       )
      
      } 
      
  }
}
 


