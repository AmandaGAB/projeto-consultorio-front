import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { MensagensService } from 'src/app/services/mensagens.service';
import { TokenService } from 'src/app/services/token-storage.service';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  operacaoCadastro = true;
  options = ["sim", "não"]
  // selectedStatus: boolean = this.usuario.admin
  constructor(private UsuarioService: UsuarioService, private rotaAtual: ActivatedRoute,
              private roteador: Router, private mensagemService: MensagensService,
              private tokenService: TokenService) {
    this.usuario = new Usuario();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.UsuarioService.pesquisarPorId(idParaEdicao).subscribe(
          usuarioRetornado => this.usuario = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {

    if (this.usuario.id) {
      this.UsuarioService.atualizar(this.usuario).subscribe(usuario => {
        this.mensagemService.success('Dados alterados com Sucesso!');
        this.roteador.navigate(['usuarios']);
      })

    } else {
      this.UsuarioService.inserir(this.usuario).subscribe(usuario => {
        this.mensagemService.success('Usuario cadastrado com Sucesso!');
        this.roteador.navigate(['usuarios']);
      })
      this.usuario = new Usuario();

    }

  }

  logout(): void {
    this.roteador.navigate([''])
    this.tokenService.removeToken();
    this.mensagemService.error('Você saiu da sessão!');
  }
}
