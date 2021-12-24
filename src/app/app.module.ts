import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServerComponent} from "./section_3/server/server.component";
import {ServersComponent} from './section_3/servers/servers.component';
import {WarningAlertComponent} from './assigment01/warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './assigment01/success-alert/success-alert.component';
import {DataBindingComponent} from './section_3/data-binding/data-binding.component';
import {DirectivComponent} from './section_3/directiv/directiv.component';
import {DebugComponent} from "./section_4/debug/debug.component";
import {CockpitComponent} from './section_5/cockpit/cockpit.component';
import {ServerElementComponent} from './section_5/server-element/server-element.component';
import {GameControlComponent} from './assigment04/game-control/game-control.component';
import {OddComponent} from './assigment04/odd/odd.component';
import {EvenComponent} from './assigment04/even/even.component';
import {GameAppComponent} from './assigment04/game-app/game-app.component';
import {Section5Component} from './section_5/section5/section5.component';
import {DirectivesComponent} from './section_07/directives/directives.component';
import {BasicHighlightDirective} from "./section_07/basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from './section_07/better-hightlight/better-highlight.directive';
import {UnlessDirective} from './section_07/unless-directive/unless.directive';
import {ServicesComponent} from './sec_09_injection/services/services.component';
import {AccountComponent} from "./sec_09_injection/account/account.component";
import {NewAccountComponent} from "./sec_09_injection/new-account/new-account.component";
import {Assigment05Component} from './sec_09_injection/assigment_05/assigment05/assigment05.component';
import {ActiveUsersComponent} from "./sec_09_injection/assigment_05/active-users/active-users.component";
import {InactiveUsersComponent} from "./sec_09_injection/assigment_05/inactive-users/inactive-users.component";
import {Sec11Component} from './sec_11_routing/sec11/sec11.component';
import {HomeComponent} from "./sec_11_routing/home/home.component";
import {UsersComponent} from "./sec_11_routing/users/users.component";
import {UserComponent} from "./sec_11_routing/users/user/user.component";
import {EditServerComponent} from "./sec_11_routing/servers/edit-server/edit-server.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'servers', component: ServersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    DirectivComponent,
    DebugComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameAppComponent,
    Section5Component,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    Assigment05Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    Sec11Component,
    HomeComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
