import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormAnotacaoService {

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      titulo: new FormControl(null),
      subtitulo: new FormControl(null),
      anotacao: new FormControl(null)
    });
  }

  public obterControle(nome: string) {
    const control = this.form.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe`)
    }
    return control as FormControl;
  }
}
