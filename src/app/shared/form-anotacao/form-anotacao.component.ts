import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormAnotacaoService } from 'src/app/core/services/forms/anotacao/form-anotacao.service';
import { AnotacaoResponse } from 'src/app/core/types/anotacaoResponse';

@Component({
  selector: 'app-form-anotacao',
  templateUrl: './form-anotacao.component.html',
  styleUrls: ['./form-anotacao.component.scss']
})
export class FormAnotacaoComponent {

  constructor(
    public formService: FormAnotacaoService,
    @Inject(MAT_DIALOG_DATA) public data: { anotacao: AnotacaoResponse }
  ) { }
}
