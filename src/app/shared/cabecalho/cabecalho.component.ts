import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {

  @Output() public evento: EventEmitter<boolean> = new EventEmitter();
  public control: FormControl = new FormControl(false);

  public toggle() {
    this.evento.emit(this.control.value);
  }

}
