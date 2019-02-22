import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-communication';
  ngOnChanges() {
    console.log('ngOnChanges')
  }
  numbers = [];
  constructor() {
    for (let index = 0; index < 100; index++) {
      this.numbers.push(index);
    }
  }
}
