import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-app',
  templateUrl: './game-app.component.html',
  styleUrls: ['./game-app.component.css']
})
export class GameAppComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.oddNumbers.push(firedNumber);
    } else {
      this.evenNumbers.push(firedNumber);
    }
  }
}
