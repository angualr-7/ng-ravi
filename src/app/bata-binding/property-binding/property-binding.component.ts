import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  public imagePath: string = 'http://www.codekul.com/img/CODEKUL-min.png'
  constructor() { }

  ngOnInit() {
  }

}
