import { Campeonato } from "./campeonato";
import { Resultado } from "./resultado";
import { Rodada } from "./rodada";
import { Time } from "./time";

export class Partida{
    
    id!: number;
    rodada!: Rodada;
    campeonato!: Campeonato;
    timeCasa!: Time;
    timeFora!: Time;
    dataPartida!: Date;
    resultado!: Resultado;

    constructor() {
        this.rodada = new Rodada();
    }

}