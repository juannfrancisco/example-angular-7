import { RoleCreateComponent } from './components/role-create/role-create.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"users", component:ListUserComponent},
  {path:"users/new", component:CreateUserComponent},
  {path:"roles/new", component:RoleCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
