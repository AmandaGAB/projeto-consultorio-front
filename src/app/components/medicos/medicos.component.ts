import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MedicoService} from "../../services/medico.service";
import {Medico} from "../../model/Medico";
import {MensagensService} from "../../services/mensagens.service";

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  medicos = Array<Medico>();

  displayedColumns: string[] = ['nome', 'crm',  'especialidade', 'telefone', 'email', 'opções'];

  constructor(private MedicoService: MedicoService, private roteador: Router, private mensagemService: MensagensService) {

  }

  ngOnInit(): void {
    this.MedicoService.listar().subscribe(

      p => this.medicos = p

    )
    console.log(this.medicos);

  }
  editar(medico: Medico): void {
  
    this.roteador.navigate(['medicos/cadastrar', medico.id])
  
  }


  remover(medico: Medico) : void{

    this.MedicoService.remover(Number(medico.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.medicos.findIndex(u => u.crm === medico.crm)

        if(indexUsuarioParaRemover > -1) {

          this.medicos.splice(indexUsuarioParaRemover, 1)
          this.mensagemService.error('Médico removido com Sucesso!');
          this.ngOnInit()


        }

      },
      error=>{
        this.mensagemService.error("Não foi possível fazer a operação com ID informado")
      }

    )

  }

}
