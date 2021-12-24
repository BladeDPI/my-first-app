import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';

@Component({
  selector: 'app-server11',
  templateUrl: './server11.component.html',
  styleUrls: ['./server11.component.css']
})
export class Server11Component implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService) {
  }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
