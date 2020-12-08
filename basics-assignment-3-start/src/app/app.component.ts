import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  clicks = [];

  onClickButton() {
    this.display === false ? this.display = true : this.display = false ;
    this.clicks.push(this.clicks.length + 1);

    //with timestamps
    //this.clicks.push(new Date());
  }

  getColor(click) {
    return click >= 5 ? 'blue' : 'transparent';
  }
}
