import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  appStatus = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filteredStatus = '';

  constructor() {
  }

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New',
      status: 'stable',
      started: new Date(15, 1, 2017)
    })
  }
}
