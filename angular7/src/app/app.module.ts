import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {TokenInterceptor} from "./core/interceptor";
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { NotifierModule } from 'angular-notifier';
import { RoleComponent } from './role/role.component';
import { ResourceComponent } from './resource/resource.component';
import { UserRoleComponent } from './user-role/user-role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    MustMatchDirective,
    RoleComponent,
    ResourceComponent,
    UserRoleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NotifierModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
