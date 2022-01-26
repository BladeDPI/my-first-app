import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServerComponent} from "./sec_3_basics/server/server.component";
import {ServersComponent} from './sec_3_basics/servers/servers.component';
import {WarningAlertComponent} from './sec_02_basics/assigment01/warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './sec_02_basics/assigment01/success-alert/success-alert.component';
import {DataBindingComponent} from './sec_3_basics/data-binding/data-binding.component';
import {DirectivComponent} from './sec_3_basics/directiv/directiv.component';
import {DebugComponent} from "./sec_4_debug/debug/debug.component";
import {CockpitComponent} from './sec_5_compoents_databindig/cockpit/cockpit.component';
import {ServerElementComponent} from './sec_5_compoents_databindig/server-element/server-element.component';
import {GameControlComponent} from './sec_5_compoents_databindig/assigment04/game-control/game-control.component';
import {OddComponent} from './sec_5_compoents_databindig/assigment04/odd/odd.component';
import {EvenComponent} from './sec_5_compoents_databindig/assigment04/even/even.component';
import {GameAppComponent} from './sec_5_compoents_databindig/assigment04/game-app/game-app.component';
import {Section5Component} from './sec_5_compoents_databindig/section5/section5.component';
import {DirectivesComponent} from './sec_07_directives/directives/directives.component';
import {BasicHighlightDirective} from "./sec_07_directives/basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from './sec_07_directives/better-hightlight/better-highlight.directive';
import {UnlessDirective} from './sec_07_directives/unless-directive/unless.directive';
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
import {Servers11Component} from "./sec_11_routing/servers/servers11.component";
import {Server11Component} from "./sec_11_routing/servers/server/server11.component";
import {PageNotFoundComponent} from './sec_11_routing/page-not-found/page-not-found.component';
import {AuthService} from "./sec_11_routing/auth.service";
import {AuthGuard} from "./sec_11_routing/auth-guard.service";
import {CanDeactivateGuard} from "./sec_11_routing/servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from './sec_11_routing/error-page/error-page.component';
import {ServerResolver} from "./sec_11_routing/servers/server/server-resolver.service";
import {Sec13Component} from './sec_13_observables/sec13/sec13.component';
import {Home13Component} from "./sec_13_observables/home/home13.component";
import {User13Component} from "./sec_13_observables/user/user13.component";
import {App13RoutingModule} from "./sec_13_observables/app13-routing.module";
import {FormTemplateComponent} from './sec_15_forms/form-template/form-template.component';
import {Assigment06Component} from './sec_15_forms/assigment06/assigment06.component';
import {FormReactivComponent} from './sec_15_forms/form-reactiv/form-reactiv.component';
import {Assigment07Component} from './sec_15_forms/assigment07/assigment07.component';
import {PipesComponent} from './sec_17_pipe/pipes/pipes.component';
import {ShortenPipe} from "./sec_17_pipe/pipes/shorten.pipe";
import {FilterPipe} from './sec_17_pipe/pipes/filter.pipe';
import {AssigmentPipesComponent} from './sec_17_pipe/pipes/assigment-pipes/assigment-pipes.component';
import {ReversePipe} from './sec_17_pipe/pipes/assigment-pipes/reverse.pipe';
import {SortPipe} from './sec_17_pipe/pipes/assigment-pipes/sort.pipe';

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
    Server11Component,
    Servers11Component,
    PageNotFoundComponent,
    ErrorPageComponent,
    Sec13Component,
    Home13Component,
    User13Component,
    FormTemplateComponent,
    Assigment06Component,
    FormReactivComponent,
    Assigment07Component,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    AssigmentPipesComponent,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    App13RoutingModule
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
