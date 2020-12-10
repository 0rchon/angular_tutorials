import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 2000);
  }

  onClickStop() {
    clearInterval(this.interval);
  }

}
