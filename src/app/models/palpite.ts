import { Aposta } from "./aposta";
import { Partida } from "./partida";
import { Resultado } from "./resultado";

export class Palpite {
    id!: number;
    aposta!: Aposta;
    partida!: Partida;
    resultado!: string ;
}