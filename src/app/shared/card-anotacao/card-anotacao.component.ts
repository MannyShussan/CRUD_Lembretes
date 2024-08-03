import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnotacaoResponse } from './../../core/types/anotacaoResponse';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeletarComponent } from '../modal-deletar/modal-deletar.component';
import { FormAnotacaoComponent } from '../form-anotacao/form-anotacao.component';

@Component({
  selector: 'app-card-anotacao',
  templateUrl: './card-anotacao.component.html',
  styleUrls: ['./card-anotacao.component.scss']
})
export class CardAnotacaoComponent implements OnInit {

  @Input() public anotacao!: AnotacaoResponse;

  public aberto: boolean = false;

  ngOnInit(): void { }

  constructor(private dialog: MatDialog) { }

  public alterarEstado() {
    this.anotacao.feito = !this.anotacao.feito;
  }

  public deletar(identificador: number, enterAnimationDuration: string = '300ms', exitAnimationDuration: string = '300ms') {
    this.dialog.open(ModalDeletarComponent, { enterAnimationDuration, exitAnimationDuration, data: { id: identificador } });
  }

  public abrirForm(enterAnimationDuration: string = '300ms', exitAnimationDuration: string = '300ms') {
    this.dialog.open(FormAnotacaoComponent, { enterAnimationDuration, exitAnimationDuration, data: { anotacao: this.anotacao } });
  }
}
