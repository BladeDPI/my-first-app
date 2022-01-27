import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-test',
  templateUrl: './base-test.component.html',
  styleUrls: ['./base-test.component.css']
})
export class BaseTestComponent implements OnInit {
  title = 'app works!';

  constructor() {
  }

  ngOnInit(): void {
  }

}
