import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output('intervalFired') intervalFired = new EventEmitter<number>();
  index: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.index++;
      this.intervalFired.emit(this.index)
    }, 1000);
  }

  onStop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
