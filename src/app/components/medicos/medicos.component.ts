import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MedicoService} from "../../services/medico.service";
import {Medico} from "../../model/Medico";
import {MensagensService} from "../../services/mensagens.service";
import { TokenService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  currentUser: any;
  medicos = Array<Medico>();

  displayedColumns: string[] = ['nome', 'crm',  'especialidade', 'telefone', 'email', 'opções'];

  constructor(private MedicoService: MedicoService, private roteador: Router,
              private mensagemService: MensagensService,
              private token: TokenService) {

  }

  ngOnInit(): void {
    this.currentUser = this.token.getToken();
    this.MedicoService.listar().subscribe(

      p => this.medicos = p

    )

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
          this.mensagemService.success('Médico removido com Sucesso!');

        }
        this.mensagemService.success('Médico removido com Sucesso!');
        this.ngOnInit();

      },
      error=>{
        switch(error.status){
          case 400: this.mensagemService.error("Não foi possível fazer a operação com ID informado")
                break
          case 404: this.mensagemService.error("Não foi possível fazer a operação com ID informado")
                break
          case 500:
            this.mensagemService.error("Não foi possível fazer a operação com ID informado")

        }
        // this.mensagemService.error("Não foi possível fazer a operação com ID informado")

        // this.ngOnInit()


      }

    )

  }
  logout(): void {
    this.roteador.navigate([''])
    this.token.removeToken();
    this.mensagemService.error('Você saiu da sessão!');
  }
}
