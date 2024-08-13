import { Injectable, OnInit } from '@angular/core';

const KEY_THEME = 'theme';
const KEY_COLOR = 'color';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly qtdTemas: number = 4;
  private readonly corpo = window.document.body;

  private escuro: boolean = false;
  private tema: number = 1;

  constructor() {
    this.recuperaAuteracoes()
  }

  public trocarTema(): boolean {

    this.escuro = !this.escuro;
    this.atualizaCorDeFundo(this.escuro);
    this.salvarAuteracoes();
    return this.escuro;
  }

  public trocaCor() {
    if (++this.tema > this.qtdTemas) this.tema = 1;
    this.atualizarTudo();
    this.salvarAuteracoes();
  }

  private recuperaAuteracoes() {
    const fundo = localStorage.getItem(KEY_THEME) ?? 'light';
    const tema = `tema${localStorage.getItem(KEY_COLOR) ?? 1}`;
    this.escuro = (fundo == 'light');
    this.tema = Number(tema.replace(/\D/g, ''));
    this.atualizarTudo();
  }

  private atualizaCorDeFundo(b: boolean) {
    this.corpo.classList.remove('dark');
    this.corpo.classList.remove('light');
    this.corpo.classList.add(b ? 'light' : 'dark');
  }

  private atualizarTudo() {
    this.atualizaCorDeFundo(this.escuro);
    for (let i = 0; i < this.qtdTemas; i++) this.corpo.classList.remove(`tema${Number(i + 1)}`);
    this.corpo.classList.add(`tema${Number(this.tema)}`);
  }

  private salvarAuteracoes() {
    localStorage.setItem(KEY_THEME, this.escuro ? 'light' : 'dark');
    localStorage.setItem(KEY_COLOR, `${this.tema}`);
  }

}
