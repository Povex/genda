import { LoginComponent } from './authentication/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './shared/authentication.guard';

const routes: Routes = [
  {path: 'todo-list', canActivate: [AuthenticationGuard], loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)},
  {path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  {path: 'login', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: '**', redirectTo: 'todo-list'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
