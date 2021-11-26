import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from './servers/servers.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {DirectivComponent} from './directiv/directiv.component';
import {DebugComponent} from "./debug/debug.component";
import {CockpitComponent} from './cockpit/cockpit.component';
import {ServerElementComponent} from './server-element/server-element.component';
import {GameControlComponent} from './assigment04/game-control/game-control.component';
import {OddComponent} from './assigment04/odd/odd.component';
import {EvenComponent} from './assigment04/even/even.component';
import {GameAppComponent} from './assigment04/game-app/game-app.component';

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
    GameAppComponent
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
