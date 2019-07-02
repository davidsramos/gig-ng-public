import { Component, OnInit } from '@angular/core';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  public clock: any;

  constructor(
    private clockService: ClockService
  ) { }

  ngOnInit() {
    this.clock = Date.now();
    setInterval(() => {
      this.clock = Date.now();
      this.clockService.clock = this.clock;
    }, 1000);
  }

}
