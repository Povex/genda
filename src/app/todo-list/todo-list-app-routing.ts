import { ActivityRouterActivator } from './utils/activity-route-activator.service';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { TodoListAppComponent } from './todo-list-app.component';

const routes: Routes = [
    {path: '', component: TodoListAppComponent,
        children: [
            {path: 'activities/:date', component: ActivitiesListComponent, canActivate: [ActivityRouterActivator]},
            {path: 'activities', component: ActivitiesListComponent},
        ]},
    {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TodoListAppRoutingModule { }