import {Component} from '@angular/core';
import {UserService} from "../user.service";
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-assigment05',
  templateUrl: './assigment05.component.html',
  styleUrls: ['./assigment05.component.css'],
  providers: [UserService, CounterService]
})
export class Assigment05Component {
}
