import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './cpf.pipe';
import { TelefonePipe } from './telefone.pipe';
import { MaiusculoPipe } from './maiusculo.pipe';
import {MinusculoPipe} from "./minusculo.pipe";



@NgModule({
    declarations: [
        CpfPipe,
        TelefonePipe,
        MaiusculoPipe,
        MinusculoPipe
    ],
  exports: [
    CpfPipe,
    TelefonePipe,
    MaiusculoPipe,
    MinusculoPipe
  ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
