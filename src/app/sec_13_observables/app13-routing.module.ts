import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Home13Component} from "./home/home13.component";
import {User13Component} from "./user/user13.component";


const routes: Routes = [
  {path: '', component: Home13Component},
  {path: 'user/:id', component: User13Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class App13RoutingModule {

}
