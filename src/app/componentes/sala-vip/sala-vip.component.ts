import { Component } from '@angular/core';
import { Rodada } from '../../models/rodada';
import { RodadasService } from '../../services/rodadas/rodadas.service';
import { PartidasService } from '../../services/partidas/partidas.service';
import { Partida } from '../../models/partida';
import { Resultado } from '../../models/resultado';
import { ApostaVipService } from '../../services/aposta-vip/aposta-vip.service';
import { Aposta } from '../../models/aposta';

@Component({
  selector: 'app-sala-vip',
  templateUrl: './sala-vip.component.html',
  styleUrl: './sala-vip.component.css'
})
export class SalaVipComponent {

   partidas!: Partida[];
   apostas: Aposta[] = [];


  constructor(private partidasService: PartidasService,
              private apostaVipService: ApostaVipService) { }


  ngOnInit() {
    this.partidasService.listar().subscribe(data => {
      this.partidas = data;
    });
  }

  selecionarResultado(partida: any, resultado: string): void {
    partida.resultado = resultado;
  }

  confirmarAposta() {
    this.apostaVipService.save(this.apostas);

  }
}
