import {Component} from '@angular/core';

@Component({
  selector: 'app-assigment05',
  templateUrl: './assigment05.component.html',
  styleUrls: ['./assigment05.component.css']
})
export class Assigment05Component {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
