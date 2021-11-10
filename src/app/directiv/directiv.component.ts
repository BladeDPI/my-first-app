import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directiv',
  templateUrl: './directiv.component.html',
  styleUrls: ['./directiv.component.css']
})
export class DirectivComponent implements OnInit {
  showPass = false;
  click = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onShowPassword() {
    this.showPass = !this.showPass;
    return this.showPass;
  }

  onDisplayClick() {
    this.click.push(new Date());
  }

  onBackGround(object: Object) {
    return object >= 4 ? 'blue' : 'transparent';
  }
}
