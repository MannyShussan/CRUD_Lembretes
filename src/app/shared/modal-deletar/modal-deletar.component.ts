import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timer } from 'rxjs';

@Component({
  selector: 'app-modal-deletar',
  templateUrl: './modal-deletar.component.html',
  styleUrls: ['./modal-deletar.component.scss']
})
export class ModalDeletarComponent implements OnInit {

  @Input() id!: number;

  public abilitar: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: number }) { }

  ngOnInit(): void {
    timer(4000).subscribe(() => this.abilitar = false);
  }

}
