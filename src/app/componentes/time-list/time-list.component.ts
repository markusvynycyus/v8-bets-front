import { Component } from '@angular/core';
import { TimeService } from '../../services/time-service.service';
import { Time } from '../../models/time';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrl: './time-list.component.css'
})
export class TimeListComponent {

  times!: Time[];

  constructor(private timeService: TimeService) {

  }

  ngOnInit() {
    this.timeService.listar().subscribe(data => {
      this.times = data;
    });
  }

}
