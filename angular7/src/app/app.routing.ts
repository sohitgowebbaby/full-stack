import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import { RoleComponent } from './role/role.component';
import { ResourceComponent } from './resource/resource.component';
import { UserRoleComponent } from './user-role/user-role.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {	path : '', component : AddUserComponent},
  {	path : 'add-role', component : RoleComponent},
  {	path : 'add-resource', component : ResourceComponent}
  {	path : 'user-role', component : UserRoleComponent}
];

export const routing = RouterModule.forRoot(routes);
