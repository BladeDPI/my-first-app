import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directiv',
  templateUrl: './directiv.component.html',
  styleUrls: ['./directiv.component.css']
})
export class DirectivComponent implements OnInit {
  index = 1;
  click = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onShowPassword() {
    return this.index % 2 === 0;
  }

  onDisplayClick() {
    this.click.push(this.index);
    this.index++;
  }

  onBackGround(object: Object) {
    return object >= 5 ? 'blue' : 'transparent';
  }
}
