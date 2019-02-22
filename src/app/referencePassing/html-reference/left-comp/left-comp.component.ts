import { Component, OnInit, Input, HostListener } from '@angular/core';
import { RightCompComponent } from '../right-comp/right-comp.component';

@Component({
  selector: 'app-left-comp',
  templateUrl: './left-comp.component.html',
  styleUrls: ['./left-comp.component.scss']
})
export class LeftCompComponent implements OnInit {

  @Input() sideBar: RightCompComponent;

  constructor() { }

  ngOnInit() {
    this.click()
  }


  click() {
    this.sideBar.toggle();
    console.log('this.sideBar.toggle()', this.sideBar.toggle())
  }
}
