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
import {ServicesComponent} from './section_09/services/services.component';
import {AccountComponent} from "./section_09/account/account.component";
import {NewAccountComponent} from "./section_09/new-account/new-account.component";

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
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
