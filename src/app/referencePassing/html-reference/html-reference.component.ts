import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-reference',
  templateUrl: './html-reference.component.html',
  styleUrls: ['./html-reference.component.scss']
})
export class HtmlReferenceComponent implements OnInit {

  sideBar = 'Ravi';
  constructor() { }

  ngOnInit() {
  }

}
