import { Component, OnInit } from '@angular/core';
import {Consulta} from "../../model/Consulta";
import {Router} from "@angular/router";
import {MensagensService} from "../../services/mensagens.service";
import {ConsultasService} from "../../services/consultas.service"
import {Paciente} from "../../model/Paciente";
import {Medico} from "../../model/Medico";
import {MatTableDataSource} from "@angular/material/table";
import { TokenService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {


  // color: string[] = ['medico', 'paciente'];
  // consultas1 = Array<Consulta>();
  consultas!: MatTableDataSource<Consulta>;


  //displayedColumns: string[] = ['idConsulta', 'dataConsulta', 'especialidade', 'nomeMedico', 'nomePaciente'];
  displayedColumns: string[] = ['idConsulta', 'dataConsulta', 'especialidade', 'nomeMedico', 'opções'];
  displayedColumns2: string[] = ['idConsulta', 'dataConsulta', 'especialidade', 'nomePaciente', 'opções'];

  constructor(private ConsultasService: ConsultasService, private roteador: Router,
              private mensagemService: MensagensService, private tokenService: TokenService) {

  }

  ngOnInit(): void {
    this.ConsultasService.listar().subscribe(
      consultas => this.consultas = new MatTableDataSource<Consulta>(consultas)
      //p => this.consultas = p
    )
    // console.log(this.consultas);

  }

  filtrar(value: string) {
    this.consultas.filter = value.trim().toLowerCase()

  }

  filtrar1(value: string) {
    this.consultas.filter = value.trim().toLowerCase()

  }

  remover(id: number): void {
    this.ConsultasService.remover(id).subscribe(
      apagado => {
        const indx = this.consultas.data.findIndex(consulta => consulta.idConsulta === id);
        if (indx > -1) {
          this.consultas.data.splice(indx, 1)
          this.consultas = new MatTableDataSource(this.consultas.data)
          this.mensagemService.success('Consulta removida com Sucesso!');
          this.roteador.navigate(['consultas']);
          this.ngOnInit()
        }

        this.ngOnInit()
      },
      error=>{
        // this.roteador.navigate(['consultas']);
        // this.mensagemService.error('Não foi possível apagar a consulta!')
        this.ngOnInit()
      }

    )
    // this.ngOnInit()
    // this.mensagemService.error('Não foi possível apagar a consulta!')
    this.roteador.navigate(['consultas']);

  }
  editar(consulta: Consulta): void {
  
    this.roteador.navigate(['consultas/cadastrar', consulta.idConsulta])
  
  }
  logout(): void {
    this.roteador.navigate([''])
    this.tokenService.removeToken();
    this.mensagemService.error('Você saiu da sessão!');
  }
}

