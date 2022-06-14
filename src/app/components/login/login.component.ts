import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Credenciais } from 'src/app/model/Credentials';
import { AuthService } from 'src/app/services/auth.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { StorageService } from 'src/app/services/storage.service';
import { TokenService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    operacaoCadastro!: boolean;
    creds: Credenciais = {
    username: "",
    password: "",
      grant_type:"password"
  };


  constructor(private http: HttpClient,
              private router: Router,
              private active: ActivatedRoute,
              private auth: AuthService,
              private mensagemService: MensagensService,
              private storage: StorageService, private tokenService: TokenService) {

  }

  ngOnInit() {
      if( this.tokenService.getToken()==null){this.operacaoCadastro = true;}
      else{ this.operacaoCadastro = false;}
  }
  login(){

    this.auth.login(this.creds).subscribe(
        response=>{

        if  ( response.access_token!==null){
            this.operacaoCadastro = true;
            this.mensagemService.success('Login realizado com sucesso!');
            this.router.navigate(['medicos']);
        }
        else{
            this.mensagemService.error("Não foi possível realizar o login. Tente Novamente!")
        }
        },
        error=>{
            switch(error.status) {
                case 400:
                    this.mensagemService.error("Não foi possível realizar o login. Tente Novamente!")
                    break
                case 404:
                    this.mensagemService.error("Não foi possível realizar o login. Tente Novamente!")
                    break
                case 500:
                    this.mensagemService.error("Não foi possível realizar o login. Tente Novamente!")
                    break
            }
            this.ngOnInit()
        })

  }
    logout(): void {
        this.tokenService.removeToken();
        window.location.reload();
        this.router.navigate([''])
        this.mensagemService.error('Você saiu da sessão!');
    }
}
