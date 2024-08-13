import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {

  @Output() public evento: EventEmitter<boolean> = new EventEmitter();
  public control: FormControl = new FormControl(false);

  constructor() { }
}
