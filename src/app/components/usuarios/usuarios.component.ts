import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { MensagensService } from 'src/app/services/mensagens.service';
import { TokenService } from 'src/app/services/token-storage.service';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios = Array<Usuario>();

  displayedColumns: string[] = [
    'nome', 'username', 'cadastradoPor','opções'];

  constructor(private UsuarioService: UsuarioService, private roteador: Router,
              private mensagemService: MensagensService,
              private tokenService: TokenService) {

  }

  ngOnInit(): void {
    this.UsuarioService.listar().subscribe(
        p => this.usuarios = p
    )
  }

  editar(usuario: Usuario): void {
    this.roteador.navigate(['usuarios/cadastrar', usuario.id])
  }

  remover(usuario: Usuario) : void{
    this.UsuarioService.remover(Number(usuario.id)).subscribe(
        resposta => {
          const indexUsuarioParaRemover = this.usuarios.findIndex(u => u.id === usuario.id)
          if(indexUsuarioParaRemover > -1) {
            this.usuarios.splice(indexUsuarioParaRemover, 1)
            this.mensagemService.success('Usuario removido!');



          }
          this.mensagemService.success('Usuario removido!');
          this.ngOnInit()
        },
        error=>{
          switch(error.status) {
            case 400:
              this.mensagemService.error("Não foi possível remover. Tente novamente")
              break
            case 404:
              this.mensagemService.error("Não foi possível remover. Tente novamente")
              break
            case 500:
              this.mensagemService.error("Não foi possível fazer a operação com ID informado")
          }
        }

    )

  }
  logout(): void {
    this.roteador.navigate([''])
    this.tokenService.removeToken();
    this.mensagemService.error('Você saiu da sessão!');
  }
}
