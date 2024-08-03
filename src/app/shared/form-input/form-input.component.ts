import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {

  @Input() control!: FormControl;
  @Input() nome: string = 'Texto';
  @Input() icone: string = 'text_fields';
  @Input() value: string = '';

}
