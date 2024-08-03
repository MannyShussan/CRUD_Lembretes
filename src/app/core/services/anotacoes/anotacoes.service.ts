import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnotacaoRequest } from '../../types/anotacaoRequest';
import { AnotacaoResponse } from 'src/app/core/types/anotacaoResponse';

@Injectable({
  providedIn: 'root'
})
export class AnotacoesService {

  private apiUrl: string = environment.apiUrl;
  private cache$!: Observable<AnotacaoResponse[]>;

  constructor(private http: HttpClient) { }

  public listaDeAnotacoesCompleta(): Observable<AnotacaoResponse[]> {
    if (!this.cache$) {
      this.cache$ = this.listar();
    }
    return this.cache$;
  }

  public cadastrarAnotacao(anotacao: AnotacaoRequest) {
    this.http.post(`${this.apiUrl}`, anotacao);
    this.cache$ = this.listar();
  }

  public filtraAnotacoes(lista: AnotacaoResponse[]): AnotacaoResponse[] {
    return lista.filter(v => { return v.feito === false });
  }

  private listar(): Observable<AnotacaoResponse[]> {
    return this.http.get<AnotacaoResponse[]>(`${this.apiUrl}/anotacoes`);
  }

}
