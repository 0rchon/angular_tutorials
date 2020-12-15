import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Active to Inactive: ' + this.inactiveToActiveCounter);
  }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Inactive to Active: ' + this.activeToInactiveCounter);
  }

}
