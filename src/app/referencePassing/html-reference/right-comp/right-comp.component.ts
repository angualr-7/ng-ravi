import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-right-comp',
  templateUrl: './right-comp.component.html',
  styleUrls: ['./right-comp.component.scss']
})
export class RightCompComponent implements OnInit {

  name
  constructor() { }

  ngOnInit() {
    this.toggle()
  }


  toggle() {

    return this.name = 'Ravi';
  }

}
