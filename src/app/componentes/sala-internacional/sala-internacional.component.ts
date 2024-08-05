import { Component } from '@angular/core';
import { RodadasService } from '../../services/rodadas/rodadas.service';
import { Rodada } from '../../models/rodada';

@Component({
  selector: 'app-sala-internacional',
  templateUrl: './sala-internacional.component.html',
  styleUrl: './sala-internacional.component.css'
})
export class SalaInternacionalComponent {

  rodadas!: Rodada[];

  constructor(private rodadasService: RodadasService) {
  }

  ngOnInit() {
    this.rodadasService.listar().subscribe(data => {
      this.rodadas = data;
    });
  }


}
