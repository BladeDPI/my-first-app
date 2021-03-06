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
    return this.showPass;
  }

  onDisplayClick() {
    this.showPass = !this.showPass;
    this.click.push(new Date());
  }

  onBackGround(object: Object) {
    return object >= 4 ? 'blue' : 'transparent';
  }
}
