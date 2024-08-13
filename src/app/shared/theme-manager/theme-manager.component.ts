import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrls: ['./theme-manager.component.scss']
})
export class ThemeManagerComponent {

  public corDeFundo: boolean = false;
  public controlFundo: FormControl = new FormControl('');

  constructor(private temaService: ThemeService) { }

  public atualizaTema() {
    this.corDeFundo = this.temaService.trocarTema();
  }

  public trocaCor(){
    this.temaService.trocaCor();
  }

}
