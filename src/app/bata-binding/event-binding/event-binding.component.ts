import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {




  constructor() { }
  title = 'Learning string interpolation';
  ngOnInit() {
  }
  changeMyTitle() {
    this.title = 'Learning Event Binding';
  }
}
