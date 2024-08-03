import { AcoesResponse } from "./acoesResponse";

export interface TarefaResponse {
    id: number;
    prioridade: number;
    concluida: boolean;
    descricao: string;
    acoes: AcoesResponse[];
}