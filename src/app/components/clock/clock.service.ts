import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  public clock;

  constructor() {
    this.clock = Date.now();
    setInterval(() => {
      this.clock = Date.now();
    }, 1000);
  }
}
