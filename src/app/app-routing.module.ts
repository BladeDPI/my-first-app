import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./sec_11_routing/home/home.component";
import {UsersComponent} from "./sec_11_routing/users/users.component";
import {UserComponent} from "./sec_11_routing/users/user/user.component";
import {Servers11Component} from "./sec_11_routing/servers/servers11.component";
import {Server11Component} from "./sec_11_routing/servers/server/server11.component";
import {EditServerComponent} from "./sec_11_routing/servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./sec_11_routing/page-not-found/page-not-found.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]
  },
  {
    path: 'servers', component: Servers11Component, children: [
      {path: ':id', component: Server11Component},
      {path: ':id/edit', component: EditServerComponent}
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
