import { ActivitiesService } from './services/activities.service';
import { TodoListAppRoutingModule } from './todo-list-app-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListAppComponent } from './todo-list-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { ActivityThumbnailComponent } from './components/activity-thumbnail/activity-thumbnail.component';
import { ActivityRouterActivator } from './utils/activity-route-activator.service';

@NgModule({
  declarations: [
    TodoListAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    ActivitiesListComponent,
    ActivityThumbnailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    TodoListAppRoutingModule
  ],
  providers: [
    ActivitiesService,
    ActivityRouterActivator
  ]
})
export class TodoListModule { }
