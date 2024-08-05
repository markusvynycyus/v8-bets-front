import { Palpite } from "./palpite";
import { Rodada } from "./rodada";
import { Usuario } from "./usuario";

export class Aposta {
    id!: string;  // Campo id necessário
    dataAposta!: string;  // Data no formato de string
    usuario!: Usuario;  // Objeto Usuario
    rodada!: Rodada;  // Objeto Rodada
    palpites!: Palpite[];  // Lista de palpites
    pontos!: number;
}