import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server11',
  templateUrl: './server11.component.html',
  styleUrls: ['./server11.component.css']
})
export class Server11Component implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        let id = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
