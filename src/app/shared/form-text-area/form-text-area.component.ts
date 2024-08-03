import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-text-area',
  templateUrl: './form-text-area.component.html',
  styleUrls: ['./form-text-area.component.scss']
})
export class FormTextAreaComponent {

  @Input() control!: FormControl;
  @Input() nome: string = 'Anotacao';
  @Input() icone: string = 'edit';
  @Input() value: string = '';

}
