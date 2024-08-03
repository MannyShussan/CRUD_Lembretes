import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnotacoesService } from 'src/app/core/services/anotacoes/anotacoes.service';
import { AnotacaoResponse } from 'src/app/core/types/anotacaoResponse';
import { FormAnotacaoComponent } from 'src/app/shared/form-anotacao/form-anotacao.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public anotacoes: AnotacaoResponse[] = []
  public fadeBoolean: boolean = false;

  constructor(private anotacaoService: AnotacoesService, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.anotacaoService.listaDeAnotacoesCompleta().subscribe(dados => { this.anotacoes = this.anotacaoService.filtraAnotacoes(dados) });
  }

  public novaAnotacao(enterAnimationDuration: string = '300ms', exitAnimationDuration: string = '300ms'): void {
    this.dialog.open(FormAnotacaoComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        id: 0,
        titulo: '',
        subtitulo: '',
        anotacao: '',
        data: '',
        feito: false
      }

    });
  }

  public borrarTela(estado: boolean) {
    this.fadeBoolean = estado;
  }

}
