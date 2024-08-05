import { Component } from '@angular/core';
import { Time } from '../../models/time';
import { TimeService } from '../../services/time-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrl: './time-form.component.css'
})
export class TimeFormComponent {

  time: Time;

  constructor(private route: ActivatedRoute, private router: Router, private userService: TimeService) {
    this.time = new Time();
  }

  onSubmit() {
    this.userService.save(this.time).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/times']);
  }

}
