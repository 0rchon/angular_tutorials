import { Injectable } from "@angular/core";

// @Injectable({providedIn: 'root'})
export class LoggingService {
  lastlog: string;

  /**
   * To print a log message
   * @param message
   */
  printLog (message: string) {
    console.log('Current message: ' + message);
    console.log('Last message: ' + this.lastlog);
    this.lastlog = message;
  }
}
